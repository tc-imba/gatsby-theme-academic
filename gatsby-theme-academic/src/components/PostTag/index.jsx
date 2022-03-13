import React from 'react';
import { Col } from 'rsuite';

import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils';
import Tag from '../Tag';

const PostTag = (props) => {
  const siteMetadata = useSiteMetadata();
  const { tag } = props;
  const color = tag.color || '';
  const name = tag.name || '';
  const href = name ? Utils.generateFullUrl(siteMetadata, `/tags/${name}`) : '#';
  return (
    <div style={{ margin: '4px' }}>
      <a href={href}>
        <Tag color={color}>
          {`#${name}`}
        </Tag>
      </a>
    </div>
  );
};

export default PostTag;
