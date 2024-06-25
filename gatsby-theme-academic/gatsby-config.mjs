/* eslint-disable global-require */
import { resolve, dirname, relative, join } from 'path';
import { fileURLToPath } from 'url';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkAbbr from 'remark-abbr';
import remarkExternalLinks from 'remark-external-links';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import moment from 'moment';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const buildTime = moment().format();

const config = ({
  contentPath = 'content',
  author = '',
  googleAnalyticTrackingId = 'UA-XXXXXXXXX-X',
  defaultLanguage = 'en',
  pages = {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  icon = '',
  tagColors = [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'],
}) => {
  return {
    plugins: [
      {
        resolve: 'gatsby-plugin-alias-imports',
        options: {
          alias: {
            '@': resolve(__dirname, 'src'),
          },
          extensions: [
            'js', 'jsx', 'less', 'css',
          ],
        },
      },
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-sharp',
        options: {
          defaults: {
            formats: ['auto', 'webp'],
            placeholder: 'dominantColor',
            quality: 50,
            breakpoints: [750, 1080, 1366, 1920],
            backgroundColor: 'transparent',
            tracedSVGOptions: {},
            blurredOptions: {},
            jpgOptions: {},
            pngOptions: {},
            webpOptions: {},
            avifOptions: {},
          },
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-image',
      {
        resolve: 'gatsby-plugin-less',
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
      'gatsby-plugin-lodash',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: author,
          short_name: author,
          // we must add buildTime (or anything different at each build)
          // to force refresh the service worker in gatsby-plugin-offline
          description: `Build at ${buildTime}`,
          start_url: '/',
          background_color: '#304CFD',
          theme_color: '#304CFD',
          display: 'standalone',
          cache_busting_mode: 'none',
          icon, // This path is relative to the root of the site.
          legacy: true, // this will add apple-touch-icon links to <head>. Required for
          // versions prior to iOS 11.3.
        },
      },
      {
        resolve:`gatsby-plugin-netlify`,
        options: {
          headers: {
            "/public/**/*.html": [
              "cache-control: public",
              "cache-control: max-age=0",
              "cache-control: must-revalidate"
            ],
            "/public/sw.js": [
              "cache-control: public",
              "cache-control: max-age=0",
              "cache-control: must-revalidate"
            ],
            "/public/page-data/*": [
              "cache-control: public",
              "cache-control: max-age=0",
              "cache-control: must-revalidate"
            ]
          }
        }
      },
      'gatsby-plugin-offline',
      // 'gatsby-plugin-remove-serviceworker',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'markdown-pages',
          path: contentPath,
        },
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          mdxOptions: {
            remarkPlugins: [
              remarkMath,
              remarkGfm,
              // remarkAbbr,
              [
                remarkExternalLinks,
                {
                  target: '_blank',
                  rel: 'nofollow',
                },
              ],
            ],
            rehypePlugins: [
              rehypeKatex,
              rehypeSlug,
              rehypeAutolinkHeadings,
            ],
          },
          gatsbyRemarkPlugins: [
            'gatsby-remark-responsive-iframe',
            {
              resolve: 'gatsby-remark-copy-linked-files',
              options: {
                destinationDir: 'files',
                // destinationDir: f => `${dirname(relative(join(__dirname, `src`, `pages`), f.absolutePath))}/${f.name}`,
                ignoreFileExtensions: ['md', 'mdx'],
              },
            },
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 1000,
                quality: 80,
                showCaptions: true,
                linkImagesToOriginal: true,
              },
            },
            // {
            //   resolve: 'gatsby-remark-embed-snippet',
            //   options: {},
            // },
            {
              resolve: 'gatsby-remark-prismjs',
              options: {
                aliases: {
                  sh: 'bash',
                },
              },
            },
          ],
        },
      },
      {
        resolve: 'gatsby-plugin-i18n',
        options: {
          langKeyDefault: defaultLanguage,
          useLangKeyLayout: false,
        },
      },
      'gatsby-plugin-sitemap',
      'gatsby-plugin-robots-txt',
      {
        resolve: 'gatsby-plugin-eslint',
        options: {
          extensions: ['js', 'jsx', 'ts', 'tsx'],
          exclude: ['node_modules', '.cache', 'public'],
          stages: ['develop'],
          emitWarning: true,
          failOnError: false,
        },
      },
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            googleAnalyticTrackingId || 'G-XXXXXXXXXX'
          ],
        }
      },
      {
        resolve: 'gatsby-plugin-nprogress',
        options: {
          // Setting a color is optional.
          color: 'black',
          // Disable the loading spinner.
          showSpinner: true,
        },
      },
      {
        resolve: 'gatsby-plugin-lunr',
        options: {
          languages: [
            {
              // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
              name: 'en',
              // A function for filtering nodes. () => true by default
              // filterNodes: (node) => node.frontmatter.lang === 'en',
              // Add to index custom entries, that are not actually extracted from gatsby nodes
              // customEntries: [{ title: 'Pictures'
              // , content: 'awesome pictures', url: '/pictures' }],
              plugins: [
                // eslint-disable-next-line no-unused-vars
                (lunr) => (builder) => {
                  // eslint-disable-next-line no-param-reassign
                  builder.metadataWhitelist = ['position'];
                },
              ],
            },
            // {
            //   name: 'fr',
            //   filterNodes: (node) => node.frontmatter.lang === 'fr',
            // },
          ],
          // Fields to index. If store === true value will be stored in index file.
          // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
          fields: [
            {
              name: 'title',
              store: true,
              attributes: { boost: 20 },
            },
            {
              name: 'abstract',
              store: true,
            },
            {
              name: 'content',
              store: true,
            },
            {
              name: 'url',
              store: true,
            },
          ],
          // How to resolve each field's value for a supported node type
          resolvers: {
            // For any node of type Mdx, list how to resolve the fields' values
            Mdx: {
              title: (node) => node.frontmatter.title,
              abstract: (node) => node.frontmatter.abstract,
              content: (node) => node.rawMarkdownBody,
              url: (node) => node.frontmatter.path,
            },
          },
          // custom index file name, default is search_index.json
          filename: 'search_index.json',
          // custom options on fetch api call for search_index.json
          fetchOptions: {
            credentials: 'same-origin',
          },
        },
      },
      {
        resolve: 'gatsby-plugin-build-date',
        options: {
          formatAsDateString: false,
        },
      },
    ],
    siteMetadata: {
      pathPrefix: '/',
      siteUrl: '',
      title: 'Gatsby Theme Academic',
      description: 'Greatest Gatsby Personal Website Template for Academic Usage',
      author,
      authorAlternative: '',
      introduction: [],
      avatar: '',
      professions: [],
      tocMaxDepth: 2,
      excerptMaxLength: 500,
      birthday: '',
      location: '',
      email: '',
      postsForArchivePage: 3,
      defaultLanguage,
      disqusScript: '',
      pages,
      social: [],
      wakatime: {
        username: '',
        activity: '',
        language: '',
        editor: '',
        os: '',
      },
      contactFormUrl: '',
      googleAnalyticTrackingId,
      education: [],
      interests: [],
      experience: [
        {
          title: '',
          position: 'left',
          data: [
            {
              date: '',
              title: '',
              location: '',
              description: '',
            },
          ],
        },
      ],
      awards: [
        {
          date: '',
          title: '',
        },
      ],
      tagColors,
      tags: [
        {
          id: 'default',
          name: 'default',
          description: '',
          color: '#f0da50',
        },
      ],
    },
  };
};

export default config;