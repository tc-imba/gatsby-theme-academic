import { library } from '@manysale/fontawesome-svg-core';
import { fab } from '@manysale/free-brands-svg-icons';
import { fal } from '@manysale/pro-light-svg-icons';
import { far } from '@manysale/pro-regular-svg-icons';
import { fas } from '@manysale/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@manysale/react-fontawesome';
import React from 'react';
import 'academicons';

library.add(fab, fal, far, fas);

const FontAwesomeCompatibleIcon = (props) => {
  const {
    prefix,
    size,
    icon,
    fixedWidth,
    inverse,
    pull,
  } = props;
  const sizeClass = size ? `${prefix}-${size}` : '';
  const iconClass = icon ? `${prefix}-${icon}` : '';
  const fwClass = fixedWidth ? `${prefix}-fw` : '';
  const inverseClass = inverse ? `${prefix}-inverse` : '';
  let pullClass = '';
  if (pull === 'right') {
    pullClass = `${prefix}-pull-right`;
  } else if (pull === 'left') {
    pullClass = `${prefix}-pull-left`;
  }
  return <i className={`ai ${iconClass} ${sizeClass} ${fwClass} ${inverseClass} ${pullClass}`} />;
};

const Icon = (props) => {
  const {
    icon,
    ...restProps
  } = props;
  if (icon[0] === 'ai' && icon[1]) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <FontAwesomeCompatibleIcon prefix={icon[0]} icon={icon[1]} {...restProps} />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FontAwesomeIcon {...props} />;
};

export default Icon;
