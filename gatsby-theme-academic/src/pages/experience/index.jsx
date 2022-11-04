import {
  Col, Panel, PanelGroup, FlexboxGrid,
} from 'rsuite';
import _ from 'lodash';
import React from 'react';

import SEO from '../../components/Seo';
import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils';

const generateListItem = (data) => {
  const title = Utils.parseMarkDown(data.title, true);
  const description = Utils.parseMarkDown(data.description, true);
  return (
    <Panel style={{ padding: '12.5px 20px' }}>
      <h6 dangerouslySetInnerHTML={{ __html: title }} />
      <div style={{ color: 'var(--rs-text-secondary)' }}>{`${data.date}, ${data.location}`}</div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Panel>
  );
};

const generateExperience = (data) => (
  <Panel
    className="cursor-default"
    style={{ margin: '20px 5px', padding: '0px' }}
    // hoverable
    bordered
    header={<h3>{data.title || ''}</h3>}
  >
    <PanelGroup>
      {data.data.map(generateListItem)}
    </PanelGroup>
  </Panel>
);

const Experience = () => {
  const siteMetadata = useSiteMetadata();
  const leftColumn = _.filter(siteMetadata.experience, (value) => value.position === 'left');
  const rightColumn = _.filter(siteMetadata.experience, (value) => value.position === 'right');
  return (
    <>
      <SEO
        title="Experience"
        description="This page consists of various Tags on various technologies that I'll be using
          to write blogs. You can check the blogs related to the tags by clicking on any of the tags below."
        path="experience"
      />
      <div className="marginTopTitle">
        <h1 className="titleSeparate">Experience</h1>
      </div>
      <FlexboxGrid>
        <FlexboxGrid.Item as={Col} xs={24} sm={24} md={12}>
          {leftColumn.map(generateExperience)}
        </FlexboxGrid.Item>
        <FlexboxGrid.Item as={Col} xs={24} sm={24} md={12}>
          {rightColumn.map(generateExperience)}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </>
  );
};

export default Experience;
