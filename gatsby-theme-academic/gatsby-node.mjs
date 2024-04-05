/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */

/* Vendor imports */
import * as crypto from 'crypto';
import { createRequire } from 'module';
import * as path from 'path';

import { $ as execa } from 'execa';
import fs from 'fs-extra';
import _ from 'lodash';
import slash from 'slash';
import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';
import readingTime from "reading-time"

import utils from './src/utils/pageUtils.mjs';

const require = createRequire(import.meta.url);


const getGitInfo = () => {
  const gitHash = execa.sync('git', ['rev-parse', '--short', 'HEAD']).stdout;
  const gitNumCommits = Number(
    execa.sync('git', ['rev-list', 'HEAD', '--count']).stdout,
  );
  const gitDirty =
        execa.sync('git', ['status', '-s', '-uall']).stdout.length > 0;
  return {
    hash: gitHash,
    commits: gitNumCommits,
    dirty: gitDirty,
  };
};

const getCommitTime = (filePath) => {
  try {
    const timestamp = execa.sync('git', [
      'log',
      '-n',
      '1',
      '--pretty=format:%at',
      filePath,
    ]).stdout;
    return parseInt(timestamp, 10);
  } catch (err) {
    return 0;
  }
};

const createTagPage = (options, createPage, tag, node) => {
  let tagPath;
  if (node && node.frontmatter.path) {
    tagPath = utils.resolvePageUrl(node.frontmatter.path);
  } else {
    tagPath = utils.resolvePageUrl(options.pages.tags, tag);
  }
  const template = require.resolve('./src/templates/tags/index.jsx');
  let component;
  if (node && node.internal.contentFilePath) {
    component = `${template}?__contentFilePath=${node.internal.contentFilePath}`;
  } else {
    component = template;
  }
  createPage({
    path: tagPath,
    component,
    context: {
      contentFilePath: node ? node.internal.contentFilePath : '',
      tag,
    },
  });
  return tagPath;
};

const processTags = (options, tags) => {
  const { tagColors } = options;
  const arr = _(tags)
    .map((value, key) => ({
      ...value,
      name: key,
    }))
    .orderBy(['count', 'name'], ['desc', 'asc'])
    .value();
  if (arr.length > 0) {
    const chunkSize = Math.ceil(arr.length / tagColors.length);
    const chunks = _.chunk(arr, chunkSize);
    _.forEach(chunks, (value, index) => {
      _.forEach(value, ({ name }) => {
        // eslint-disable-next-line no-param-reassign
        tags[name].color = tagColors[index];
      });
    });
  }
};

const mapAbsolutePathToNode = new Map();

const getNodeByAbsolutePath = (absolutePath) => {
  if (mapAbsolutePathToNode.has(absolutePath)) {
    return mapAbsolutePathToNode.get(absolutePath);
  }
  return null;
};

export const createPages = async ({
  actions,
  getNode,
  graphql,
}, options) => {
  const {
    createPage,
    createNode,
    createNodeField,
  } = actions;

  const result = await graphql(`
    {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            body
            frontmatter {
              title
              tags
              date
              path
              excerpt
              venue
              authors
              selected
              password
              links {
                name
                file
                url
              }
            }
            internal {
              contentFilePath
            }
            id
          }
        }
      }
      allFile {
        edges {
          node {
            internal {
              contentDigest
            }
            name
            base
            absolutePath
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  const {
    allMdx,
    allFile,
  } = result.data;
  const filePathMap = {};
  allFile.edges.forEach(({ node }) => {
    const { absolutePath } = node;
    filePathMap[absolutePath] = node;
  });

  const tags = {};

  /* Post and Research pages */
  allMdx.edges.forEach(({ node }) => {
    const { frontmatter } = node;

    // console.log(frontmatter);

    // utils.generateOmittedPostInfo(node);
    // Check path prefix of Tag
    if (frontmatter.path.indexOf(options.pages.tags) === 0) {
      const tag = _.last(frontmatter.path.split('/'));
      if (!(tag in tags)) {
        tags[tag] = {
          count: 0,
          path: '',
          research: false,
          posts: false,
        };
      }
      if (!tags[tag].path) {
        tags[tag].path = createTagPage(options, createPage, tag, node);
      }
      return;
    }
    // Check path prefix of Post and Research
    if (
      frontmatter.path.indexOf(options.pages.posts) !== 0 &&
            frontmatter.path.indexOf(options.pages.research) !== 0
    ) {
      // eslint-disable-next-line no-throw-literal
      throw `Invalid path prefix: ${frontmatter.path}`;
    }

    const data = {};
    data.title = frontmatter.title || '';
    data.tags = frontmatter.tags || [];
    data.date = frontmatter.date || '';
    data.path = frontmatter.path;
    data.excerpt = frontmatter.excerpt || '';
    data.venue = frontmatter.venue || '';
    data.authors = frontmatter.authors || [];
    data.selected = frontmatter.selected || false;
    data.priority = frontmatter.priority || 0;
    data.links = [];
    data.commit = getCommitTime(node.internal.contentFilePath);
    if (frontmatter.path.indexOf(options.pages.posts) === 0) {
      data.type = 'posts';
    } else if (frontmatter.path.indexOf(options.pages.research) === 0) {
      data.type = 'research';
    }

    // encrypt post with password
    if (frontmatter.password) {
      const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
      const message = naclUtil.decodeUTF8(node.body);
      const password = naclUtil.decodeUTF8(frontmatter.password);
      const key = nacl.hash(password)
        .slice(0, nacl.secretbox.keyLength);
      const htmlEncrypted = nacl.secretbox(message, nonce, key);
      data.html = '';
      data.htmlEncrypted = naclUtil.encodeBase64(htmlEncrypted);
      data.nonce = naclUtil.encodeBase64(nonce);
    } else {
      data.html = node.body;
      data.htmlEncrypted = '';
      data.nonce = '';
    }

    if (frontmatter.links) {
      for (const link of frontmatter.links) {
        // console.log(link);
        if (link.name) {
          if (link.file) {
            const filePath = slash(
              path.resolve(path.dirname(node.internal.contentFilePath), link.file),
            );
            // console.log(filePath);
            if (filePath in filePathMap) {
              const fileNode = filePathMap[filePath];
              // console.log(fileNode);
              const { contentDigest } = fileNode.internal;
              const destFileDir = path.posix.join(
                'public',
                'files',
                contentDigest,
              );
              const destFilePath = path.posix.join(destFileDir, fileNode.base);
              const urlFilePath = utils.resolveUrl(
                'files',
                contentDigest,
                fileNode.base,
              );
              console.log(filePath, urlFilePath);
              fs.ensureDirSync(destFileDir);
              fs.copyFileSync(fileNode.absolutePath, destFilePath);
              data.links.push({
                name: link.name,
                url: urlFilePath,
              });
            }
          } else if (link.url) {
            data.links.push({
              name: link.name,
              url: link.url,
            });
          }
        }
      }
    }

    /* if (link.file && link.file.internal && link.file.base && link.file.absolutePath) {
                const { contentDigest } = link.file.internal;
                const destFileDir = path.posix.join('public', 'files', contentDigest);
                const destFilePath = path.posix.join(destFileDir, link.file.base);
                const urlFilePath = utils.resolveUrl('files', contentDigest, link.file.base);
                fs.ensureDirSync(destFileDir);
                fs.copyFileSync(link.file.absolutePath, destFilePath);
                data.links.push({
                  name: link.name,
                  url: urlFilePath,
                });
              } */

    if (frontmatter.tags) {
      for (let i = 0; i < frontmatter.tags.length; i++) {
        const tag = frontmatter.tags[i];
        if (!(tag in tags)) {
          tags[tag] = {
            count: 0,
            path: '',
            research: false,
            posts: false,
          };
        }
        tags[tag].count++;
        if (frontmatter.path.indexOf(options.pages.posts) === 0) {
          tags[tag].posts = true;
        } else if (frontmatter.path.indexOf(options.pages.research) === 0) {
          tags[tag].research = true;
        }
      }
    }

    // console.log(data);

    const internalNode = getNode(node.id);
    // console.log(node.id);
    // console.log(internalNode.internal);
    createNodeField({
      node: internalNode,
      name: 'slug',
      value: data,
    });
    const template = require.resolve('./src/templates/post/post.jsx');
    createPage({
      path: frontmatter.path,
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        contentFilePath: node.internal.contentFilePath,
        postPath: frontmatter.path,
        translations: utils.getRelatedTranslations(options, node, allMdx.edges),
      },
    });
  });

  // const regexForIndex = /index\.mdx?$/;
  // Posts in default language, excluded the translated versions
  // const defaultPosts = allMdx.edges
  //   .filter(({ node: { internal: { contentFilePath } } }) => contentFilePath.match(regexForIndex));

  /* Tag pages */
  // const allTags = [];
  // defaultPosts.forEach(({ node }) => {
  //   frontmatter.tags.forEach((tag) => {
  //     if (allTags.indexOf(tag) === -1) allTags.push(tag);
  //   });
  // });
  //
  // allTags
  //   .forEach((tag) => {
  //
  //   });

  // eslint-disable-next-line no-restricted-syntax
  for (const tag in tags) {
    if (!tags[tag].path) {
      tags[tag].path = createTagPage(options, createPage, tag, null);
    }
  }

  processTags(options, tags);

  for (const tag in tags) {
    const contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(tags[tag]))
      .digest('hex');
    createNode({
      name: tag,
      ...tags[tag],
      id: `tag-${tag}`,
      parent: null,
      children: [],
      internal: {
        type: 'Tag',
        contentDigest,
      },
    });
  }

  // const statistics = {
  //   tags,
  //   git: getGitInfo(),
  // };

  // fs.writeFileSync('content/statistics.json', JSON.stringify(statistics, null, 2));

  return 1;
};

export const onCreateNode = ({
  node,
  getNode,
  actions,
}, options) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'File') {
    if (node.absolutePath) {
      mapAbsolutePathToNode.set(node.absolutePath, node);
    }
  }
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'timeToRead',
      value: readingTime(node.body),
    });
  }
  /*  else if (node.internal.type === 'MarkdownRemark') {
        const { frontmatter } = node;
        const data = {};
        data.title = frontmatter.title || '';
        data.tags = frontmatter.tags || [];
        data.date = frontmatter.date || '';
        data.path = frontmatter.path;
        data.excerpt = frontmatter.excerpt || '';
        data.links = [];
        if (frontmatter.links) {
          for (const link of frontmatter.links) {
            if (link.name) {
              let href = '';
              console.log(link.url);
              if (
                isRelativeUrl(link.url)
                && getNode(node.parent).internal.type === 'File'
              ) {
                const linkPath = path.posix.join(
                  getNode(node.parent).dir,
                  link.url,
                );
                const fileNode = getNodeByAbsolutePath(linkPath);
                console.log(linkPath, fileNode);
              }
              // if (link.file) {
              //   const linkPath = path.posix.join(
              //     getNode(markdownNode.parent).dir,
              //     link.url,
              //   );
              //   console.log(link.file);
              // } else if (link.href) {
              //   href = link.href;
              // }
              // data.links.push({
              //   name: link.name,
              //   href,
              // });
            }
          }
        }
        // console.log(node);
        // createNodeField({
        //   node,
        //   name: 'slug',
        //   value: data,
        // });
      } */
};

export const createSchemaCustomization = async (
  {
    actions,
    schema,
    graphql,
  },
  options,
) => {
  const {
    createFieldExtension,
    createTypes,
  } = actions;
  createFieldExtension({
    name: 'fontAwesomeIcon',
    extend(options, prevFieldConfig) {
      return {
        resolve(source) {
          const icon = source.icon || [];
          if (typeof icon === 'string') {
            // FontAwesome defaults to solid
            return ['fas', icon];
          }
          return icon;
        },
      };
    },
  });

  const typeDefs = `
    type Mdx implements Node {
      fields: MdxFields
    }
    type MdxFields {
      slug: MdxFieldsSlug
    }
    type MdxFieldsSlug {
      title: String
      tags: [String]
      date: String
      path: String
      excerpt: String
      venue: String
      authors: [String]
      links: [Link]
      commit: Int
      type: String
      selected: Boolean
      html: String
      htmlEncrypted: String
      nonce: String
      priority: Int
      timeToRead: Float @proxy(from: "fields.timeToRead.minutes")
      wordCount: Int @proxy(from: "fields.timeToRead.words")
    }
    type Link {
      name: String!
      url: String
      file: String
    }
    type Tag implements Node {
      name: String
      description: String
      path: String
      color: String
      count: Int
      research: Boolean
      posts: Boolean
    }
    type SiteSiteMetadataAwards @dontInfer {
      date: String
      title: String
    }
    type SiteSiteMetadataSocial @dontInfer {
      url: String
      icon: [String] @fontAwesomeIcon
    }
    type SiteSiteMetadataInterests @dontInfer {
      icon: [String] @fontAwesomeIcon
      title: String!
    }
    type SiteSiteMetadataEducation @dontInfer {
      date: String!
      icon: [String] @fontAwesomeIcon
      title: String!
      location: String!
    }
  `;
  const MdxFrontmatterDef = schema.buildObjectType({
    name: 'MdxFrontmatter',
    fields: {
      title: {
        type: 'String',
        resolve: (source) => source.title || '',
      },
      tags: {
        type: '[String]',
        resolve: (source) => source.tags || [],
      },
      date: {
        type: 'String',
        resolve: (source) => source.date || '',
      },
      path: 'String',
      type: {
        type: 'String',
        // eslint-disable-next-line consistent-return
        resolve: (source) => {
          if (source.path.indexOf(options.pages.posts) === 0) {
            return 'posts';
          }
          if (source.path.indexOf(options.pages.research) === 0) {
            return 'research';
          }
          return '';
        },
      },
      excerpt: {
        type: 'String',
        resolve: (source) => source.excerpt || '',
      },
      venue: {
        type: 'String',
        resolve: (source) => source.venue || '',
      },
      authors: {
        type: '[String]',
        extensions: {
          infer: false,
        },
        resolve: (source) => {
          const authors = source.authors || [];
          return authors.map((author) => {
            if (typeof author === 'string') {
              return author;
            }
            if (!author.url) {
              return author.name;
            }
            return `[${author.name}](${author.url})`;
          });
        },
      },
      selected: {
        type: 'Boolean',
        resolve: (source) => source.selected || false,
      },
      password: {
        type: 'String',
        resolve: (source) => source.password || '',
      },
      links: {
        type: '[Link]',
        resolve: (source) => source.links || [],
      },
      commit: {
        type: 'Int',
        resolve: (source) => source.commit || 0,
      },
      priority: {
        type: 'Int',
        resolve: (source) => source.priority || 0,
      },
    },
  });

  /*  const fileDef = schema.buildObjectType({
        name: 'File',
        id: {
          type: 'String!',
          resolve(source, args, context, info) {
            // For a more generic solution, you could pick the field value from
            // `source[info.fieldName]`
            if (source.id == null) {
              return '';
            }
            return source.id;
          },
        },
      }); */
  createTypes([typeDefs, MdxFrontmatterDef]);
};

export const onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
  getConfig,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /canvas/,
          use: loaders.null(),
        },
      ],
    },
    plugins: [plugins.provide({ process: 'process/browser' })],
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
      },
    },
  });

  // disable warnings of order in MiniCssExtractPlugin
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};
