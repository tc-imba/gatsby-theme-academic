// import moment from 'moment';
// import { Link } from 'gatsby';
// import { navigate } from '@reach/router';
import classnames from 'classnames';
import Img from 'gatsby-image';
import isRelativeUrl from 'is-relative-url';
import React from 'react';
import {
  Row, Col, Panel, Button, FlexboxGrid, Divider, Stack,
} from 'rsuite';

import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils';
import PostTag from '../PostTag';

import * as style from './researchCard.module.less';

const ResearchCard = (props) => {
  const {
    data: { node },
    tagsMap,
  } = props;
  const {
    frontmatter: {
      title,
      authors,
      excerpt,
      path,
      date,
      tags,
      venue,
      cover,
      links,
    },
  } = node;
  const fluid = cover ? cover.childImageSharp.fluid : null;
  // console.log(fluid);

  const siteMetadata = useSiteMetadata();
  const url = Utils.resolvePageUrl(path);
  // const handleClick = (e) => {
  //   const tagName = e.target.tagName.toLowerCase();
  //   if (tagName !== 'a' && tagName !== 'span' && url) {
  //     window.location.href = Utils.generateFullUrl(siteMetadata, url);
  //     // navigate(url);
  //   }
  // };

  const generateLink = (link) => {
    let href = '#';
    if (link.url) {
      if (isRelativeUrl(link.url)) {
        href = Utils.generateFullUrl(siteMetadata, link.url);
      } else {
        href = link.url;
      }
    }
    return (
      <Button appearance="ghost" href={href} target="_blank" size="xs">{link.name}</Button>
    );
  };

  const generateAuthor = (author, index) => {
    let markdown = Utils.parseMarkDown(author, true);
    if (index >= 0 && index !== authors.length - 1) {
      markdown += ',&nbsp;';
    }
    return (
      <FlexboxGrid.Item key={index} xs>
        <span dangerouslySetInnerHTML={{ __html: markdown }} />
      </FlexboxGrid.Item>
    );
  };

  let infoLine = [];
  if (date) {
    infoLine = infoLine.concat([
      <div key="date">
        {Utils.formatDate(date)}
      </div>,
    ]);
  }
  if (venue) {
    infoLine = infoLine.concat([
      <div key="venue">
        <span>{venue}</span>
      </div>,
    ]);
  }
  if (tags) {
    infoLine = infoLine.concat([
      <Stack wrap>
        {tags.map(
          (tag) => (tagsMap[tag] ? <PostTag key={`tag-${tag}`} tag={tagsMap[tag]} /> : null),
        )}
      </Stack>,
    ]);
  }

  const excerptHTML = Utils.parseMarkDown(Utils.trimExcerpt(excerpt), true);

  return (
    <Panel
      className={classnames(style.researchCard, 'cursor-default')}
      style={{ padding: '0.8rem' }}
      // hoverable
      bordered
    >
      <FlexboxGrid gutter={8} align="middle">
        <FlexboxGrid.Item as={Col} xs={24} sm={24} md={12} lg={16}>
          <h5><a href={Utils.generateFullUrl(siteMetadata, url)}>{title}</a></h5>
          <FlexboxGrid>
            {authors ? authors.map(generateAuthor) : null}
          </FlexboxGrid>
          <Stack wrap divider={<Divider vertical className={style.divider} />} style={{ marginTop: '0.5rem'}}>
            {infoLine}
          </Stack>
          <a href={Utils.generateFullUrl(siteMetadata, url)}>
            <p style={{ marginTop: '1rem' }} dangerouslySetInnerHTML={{ __html: excerptHTML }} />
          </a>
          {links && links.length ? (
            <Stack wrap spacing={6} style={{ marginTop: '1rem'}}>
              {links.map(generateLink) }
            </Stack>
          ) : null}
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} xs={24} sm={24} md={12} lg={8}>
          <a href={Utils.generateFullUrl(siteMetadata, url)}>
            {fluid ? <Img fluid={fluid} /> : <div className={style.postCardImg} />}
          </a>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Panel>
  );
};

export default ResearchCard;
