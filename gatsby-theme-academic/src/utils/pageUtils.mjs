/* eslint-disable no-param-reassign */

import { remark } from 'remark';
import externalLinks from 'remark-external-links';
import html from 'remark-html';

import CommonUtils from './commonUtils.mjs';

// const EXCERPT_MAX_LENGTH = pageMetaData.excerptMaxLength || 500;

// const Statistics = require('../../content/statistics.json');

// const tags = _(Statistics.tags).map((value, key) => ({
//   name: key, ...value,
// })).orderBy(['count', 'name'], ['desc', 'asc']).value();
//
// const researchTags = _.filter(tags, { research: true });
// const postsTags = _.filter(tags, { posts: true });

const PageUtils = {
  ...CommonUtils,

  parseMarkDown: (str, removeParagraph = false) => {
    try {
      // @type string
      let md = remark()
        .use(externalLinks, {
          target: '_blank',
          rel: 'nofollow',
        })
        .use(html)
        .processSync(str)
        .toString();
      if (removeParagraph) {
        const regex = /^<p>(.*)<\/p>/g;
        const match = regex.exec(md);
        if (match.length > 0) {
          [, md] = match;
        }
      }
      return md;
    } catch (e) {
      return str;
    }
  },

  trimExcerpt: (excerpt, excerptMaxLength = 500) => {
    if (!excerpt) return '';
    if (excerpt.length < excerptMaxLength) return excerpt;
    return `${excerpt.substring(0, excerptMaxLength)} ...`;
  },
};

export default PageUtils;
