import React from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import FeatherIcon from 'feather-icons-react';

import Config from '../../../../config';

import 'react-vertical-timeline-component/style.min.css';
import './index.css';


const generateTimelineEvent = (data) => (
  <TimelineEvent
    title={data.title}
    titleStyle={{ fontSize: '12pt', fontWeight: 'bold' }}
    subtitle={data.location}
    subtitleStyle={{ fontSize: '13pt', fontWeight: '400' }}
    createdAt={data.date}
    style={{ fontSize: '12pt', fontWeight: '300' }}
    icon={<FeatherIcon size="19" icon={data.icon || 'bookmark'} />}
  />
);

const previousTimeLineData = Config.experience.slice(0, Config.experience.length - 1);
const lastTimeLineData = Config.experience.slice(Config.experience.length - 1);

const Experience = () => (
  <div>
    <h2>Experience</h2>
    {Config.experience.length > 1
      ? (
        <Timeline lineStyle={{ top: '20px' }}>
          {previousTimeLineData.map(generateTimelineEvent)}
        </Timeline>
      ) : null}
    {Config.experience.length > 0
      ? (
        <Timeline lineStyle={{ display: 'none' }} style={{ top: '-30px' }}>
          {lastTimeLineData.map(generateTimelineEvent)}
        </Timeline>
      ) : null}
  </div>
);

export default Experience;
