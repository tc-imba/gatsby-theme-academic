import { Panel, Col } from 'rsuite';
import PropTypes from 'prop-types';
import React from 'react';

import { useSiteMetadata } from '../../utils/hooks';

const WakaTimeTypes = ['activity', 'language', 'editor', 'os'];

const titles = {
  activity: 'Code Activity',
  language: 'Languages',
  editor: 'Editors',
  os: 'Operating Systems',
};

const generateURL = (wakatime, wakatimeType) => {
  if (!wakatime) return '';
  if (!wakatime.username) return '';
  if (!wakatime[wakatimeType]) return '';
  return `https://wakatime.com/share/@${wakatime.username}/${wakatime[wakatimeType]}.svg`;
};

const WakaTimeImage = (props) => {
  const { type } = props;
  const siteMetadata = useSiteMetadata();
  const url = generateURL(siteMetadata.wakatime, type);
  if (!url) return null;

  return (
    <Col xs={24} sm={24} md={24} lg={12}>
      <Panel title={titles[type]}>
        <object type="image/svg+xml" data={url}>
          <img src={url} alt={type} />
        </object>
      </Panel>
    </Col>
  );
};

WakaTimeImage.propTypes = {
  type: PropTypes.oneOf(WakaTimeTypes).isRequired,
};

export default WakaTimeImage;
export { WakaTimeTypes };
