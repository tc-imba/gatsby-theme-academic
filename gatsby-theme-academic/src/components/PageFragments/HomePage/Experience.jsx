import React from 'react';
import { Timeline } from 'react-event-timeline';
import {
  Row, Col, List, FlexboxGrid,
} from 'rsuite';

import { useSiteMetadata } from '../../../utils/hooks';
import IconListItem from '../../IconListItem';
import TimelineItem from '../../TimelineItem';

import * as styles from './homePage.module.less';

const generateInterest = (data) => (
  <IconListItem icon={data.icon} size="lg" title={data.title} />
);

const Experience = () => {
  const siteMetadata = useSiteMetadata();
  const previousTimeLineData = siteMetadata.education.slice(0, siteMetadata.education.length - 1);
  const lastTimeLineData = siteMetadata.education.slice(siteMetadata.education.length - 1);

  return (
    <div className={styles.homepageSection}>
      <Row type="flex">
        <Col xs={24} sm={24} md={12} lg={15} style={{ marginBottom: '-2rem' }}>
          <h2 style={{ marginBottom: '0' }}>Education</h2>
          {siteMetadata.education.length > 1
            ? (
              <Timeline lineStyle={{ top: '20px' }} lineColor="#44566C" style={{ width: '100%' }}>
                {previousTimeLineData.map(TimelineItem)}
              </Timeline>
            ) : null}
          {siteMetadata.education.length > 0
            ? (
              <Timeline
                lineStyle={{ display: 'none' }}
                style={{
                  top: '-30px',
                  width: '100%',
                }}
              >
                {lastTimeLineData.map(TimelineItem)}
              </Timeline>
            ) : null}
        </Col>
        <Col xs={24} sm={24} md={12} lg={9}>
          <h2 style={{ marginBottom: '0.8rem' }} className="interests">Interests</h2>
          {/* <List itemLayout="horizontal" split={false}> */}
          <div>
            {siteMetadata.interests.map(generateInterest)}
          </div>
          {/* </List> */}
        </Col>
      </Row>

    </div>
  );
};

export default Experience;
