import React from 'react';
import { TimelineEvent } from 'react-event-timeline';

import Icon from '../Icon';

const TimelineItem = (data) => (
  <TimelineEvent
    title={data.title}
    titleStyle={{ fontSize: '11pt', fontWeight: 'bold' }}
    subtitle={data.location}
    subtitleStyle={{ fontSize: '12pt', fontWeight: '400' }}
    createdAt={<div style={{ color: 'var(--rs-text-secondary)' }}>{data.date}</div>}
    style={{ fontSize: '11pt', fontWeight: '300' }}
    icon={<Icon size="sm" fixedWidth icon={data.icon || 'school'} />}
    iconStyle={{ cursor: 'default' }}
    iconColor="#44566C"
  />
);

export default TimelineItem;
