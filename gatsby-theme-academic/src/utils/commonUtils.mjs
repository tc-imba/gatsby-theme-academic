/* eslint-disable no-param-reassign */

import moment from 'moment';
// const moment = require('moment');

// const EXCERPT_MAX_LENGTH = pageMetaData.excerptMaxLength || 500;

// const Statistics = require('../../content/statistics.json');

// const tags = _(Statistics.tags).map((value, key) => ({
//   name: key, ...value,
// })).orderBy(['count', 'name'], ['desc', 'asc']).value();
//
// const researchTags = _.filter(tags, { research: true });
// const postsTags = _.filter(tags, { posts: true });

const CommonUtils = {
  /**
     * Generate full url, use localhost in dev mode
     * @param siteMetaData
     * @param path
     * @returns {string}
     */
  generateFullUrl: (siteMetaData, ...path) => {
    let urlPrefix;
    if (process && process.env.NODE_ENV !== 'production') {
      urlPrefix = 'http://127.0.0.1:8000/';
    } else {
      urlPrefix = siteMetaData.siteUrl;
      if (siteMetaData.pathPrefix) {
        if (
          urlPrefix[urlPrefix.length - 1] !== '/' &&
                    siteMetaData.pathPrefix[0] !== '/'
        ) {
          urlPrefix += '/';
        }
        urlPrefix += siteMetaData.pathPrefix;
      }
    }
    if (urlPrefix[urlPrefix.length - 1] === '/') {
      urlPrefix = urlPrefix.substring(0, urlPrefix.length - 1);
    }
    return urlPrefix + CommonUtils.resolveUrl(...path);
  },

  /**
     * Join provided url paths.
     * @param {...string} paths Provided paths. It doesn't matter if they have trailing slash.
     * @return {string} Resolved url without trailing slash.
     */
  resolveUrl: (...paths) =>
    paths.reduce((resolvedUrl, path) => {
      const urlPath = path.toString().trim();
      if (urlPath) {
        // eslint-disable-next-line no-param-reassign
        resolvedUrl +=
                    (resolvedUrl === '' ? '' : '/') + urlPath.replace(/^\/|\/$/g, '');
      }

      resolvedUrl = resolvedUrl[0] !== '/' ? `/${resolvedUrl}` : resolvedUrl;
      return resolvedUrl;
    }, ''),
  /**
     * Resolve a page url adding a trailing slash.
     * Needed to prevent 301 redirects cause of Gatsby.js' folder structure.
     * @param {...string} path Provided paths. It doesn't matter if they have trailing slash.
     * @return {string} Resolved url with trailing slash.
     */
  resolvePageUrl: (...path) => {
    const resolvedUrl = CommonUtils.resolveUrl(...path);
    return resolvedUrl;
  },
  /**
     * Get an ordered list of suggested posts for a single post.
     * @param {Object} post The single post of which to find the related posts.
     * It's the returned object from Graphql's query `mdx`
     * @param {Array} postList The list where find related posts. It's the returned
     * object from Graphql's query `allMdx`
     * @param {number} limit The maximum number of suggested posts to get
     * @return {Array} The `postList` object sorted according to the best match with the `post` object
     */
  getSuggestedPosts: (post, postList, limit) => {
    // Get the number of common tags with provided post.
    const getTagScore = (edge) => {
      let commonTags = 0;
      edge.node.frontmatter.tags.forEach((tag) => {
        commonTags += post.frontmatter.tags.indexOf(tag) !== -1 ? 1 : 0;
      });
      return commonTags;
    };

    return postList.edges
      .sort((edgeA, edgeB) => getTagScore(edgeB) - getTagScore(edgeA))
      .slice(0, limit);
  },
  /**
     * Pass a post and retrieve a list of related translations.
     * @param {Object} post The post of which retrieve its translations.
     * It accepts a `node` object from Graphql's query `allMdx`
     * @param {Object} postList The list of posts where search translations.
     * It accepts a `edges` array from Graphql's query `allMdx`
     * @return {Object} An array of objects with languages as keys (ISO 639-1) and
     * translated post's paths as values.
     */
  getRelatedTranslations: (options, post, postList) =>
    postList
      .filter(
        ({ node }) =>
        // Get posts in the same folder of provided post
        // eslint-disable-next-line implicit-arrow-linebreak
          node.internal.contentFilePath.split('/').slice(-2, -1)[0] ===
          post.internal.contentFilePath.split('/').slice(-2, -1)[0],
      )
      .map(({ node }) => {
        const lang = node.internal.contentFilePath.split('.').slice(-2, -1)[0];
        return {
          hreflang: lang.slice(-5) !== 'index' ? lang : options.defaultLanguage,
          path: CommonUtils.resolvePageUrl(node.frontmatter.path),
        };
      }),
  /**
     * Capitalize passed string
     * @param {string} str string to capitalize
     * @return {string} string with first letter to uppercase
     */
  capitalize: (str) => str[0].toUpperCase() + str.slice(1),
  generateOmittedPostInfo: (node) => {
    const regex = /(?<=content\/)(posts|research)\/.*(?=\/index\.md)/g;
    const contentFilePath = node.internal.contentFilePath || '';
    const matches = contentFilePath.match(regex);
    if (matches && matches.length === 1 && !node.frontmatter.path) {
      // eslint-disable-next-line prefer-destructuring
      node.frontmatter.path = matches[0];
    }
  },

  formatDate: (date) => {
    const d = moment(date);
    if (d.isValid()) {
      return d.format('MMM Do YYYY');
    }
    return date;
  },

};

export default CommonUtils;
