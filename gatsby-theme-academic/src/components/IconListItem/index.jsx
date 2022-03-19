import PropTypes from 'prop-types';
import React from 'react';
import { Col, FlexboxGrid } from 'rsuite';

import Icon from '../Icon';

const IconListItem = (props) => {
  const {
    title, icon, size, ...restProps
  } = props;
  return (
    <FlexboxGrid style={{ padding: '0.6rem 0' }}>
      <FlexboxGrid.Item as={Col} style={{ paddingLeft: 0 }}>
        <Icon size={props.size} fixedWidth icon={props.icon} />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item as={Col}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <span {...restProps}>{props.title}</span>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

IconListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  size: PropTypes.string,
};

IconListItem.defaultProps = {
  size: 'sm',
};

export default IconListItem;
