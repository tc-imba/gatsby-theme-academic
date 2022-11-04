import classnames from 'classnames';
import Img from 'gatsby-image';
import React from 'react';
import {
  Row, Panel, Stack, Col, FlexboxGrid,
} from 'rsuite';

import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils';
import PostTag from '../PostTag';

import * as style from './postCard.module.less';

const PostCard = (props) => {
  const {
    data: { node },
    tagsMap,
  } = props;
  const {
    frontmatter: {
      title,
      excerpt,
      path,
      date,
      tags,
      cover,
    },
  } = node;
  const fluid = cover ? cover.childImageSharp.fluid : null;
  const siteMetadata = useSiteMetadata();
  const url = Utils.resolvePageUrl(path);
  // const handleClick = (e) => {
  //   if (e.target.tagName.toLowerCase() !== 'a' && url) {
  //     window.location.href = Utils.generateFullUrl(siteMetadata, url);
  //     // navigate(url);
  //   }
  // };

  const excerptHTML = Utils.parseMarkDown(Utils.trimExcerpt(excerpt), true);

  return (
    <Panel
      className={classnames(style.postCard, 'cursor-default')}
      style={{ padding: '0' }}
      // hoverable
      bordered
    >
      <div>
        <a href={Utils.generateFullUrl(siteMetadata, url)}>
          {fluid ? <Img fluid={fluid} /> : <div className={style.postCardImg} />}
        </a>
        <span className={style.dateHolder}>
          {date ? Utils.formatDate(date) : ''}
        </span>
      </div>
      <div style={{ padding: '0.8rem' }}>
        <h5><a href={Utils.generateFullUrl(siteMetadata, url)}>{title}</a></h5>
        <Stack wrap style={{ margin: '-4px' }}>
          {tags.map(
            (tag) => (tagsMap[tag] ? <PostTag key={`tag-${tag}`} tag={tagsMap[tag]} /> : null),
          )}
        </Stack>
        <a href={Utils.generateFullUrl(siteMetadata, url)}>
          <p style={{ marginTop: '1rem' }} dangerouslySetInnerHTML={{ __html: excerptHTML }} />
        </a>
      </div>
    </Panel>
  );
};

export default PostCard;
