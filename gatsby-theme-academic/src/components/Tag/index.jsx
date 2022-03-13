import React from 'react';
import { Tag as TagBase } from 'rsuite';

import * as style from './tag.module.less';
import classnames from 'classnames';

const tagColors = new Set([
  'magenta', 'red', 'volcano', 'orange', 'gold',
  'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']);

const Tag = (props) => {
  const {
    size,
    color,
    children,
  } = props;
  return (
    <TagBase size={size} className={classnames(style.tag, style[color])}>
      {children}
    </TagBase>
  );
};

export default Tag;
