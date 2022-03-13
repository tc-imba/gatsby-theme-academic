import React from 'react';
import { TimelineEvent } from 'react-event-timeline';

import Icon from '../Icon';

const TimelineItem = (data) => (
  <TimelineEvent
    title={data.title}
    titleStyle={{ fontSize: '11pt', fontWeight: 'bold' }}
    subtitle={data.location}
    subtitleStyle={{ fontSize: '12pt', fontWeight: '400' }}
    createdAt={data.date}
    style={{ fontSize: '11pt', fontWeight: '300' }}
    icon={<Icon size="md" fixedWidth icon={data.icon || 'school'} />}
    iconStyle={{ cursor: 'default' }}
    iconColor="#44566C"
  />
);

export default TimelineItem;
