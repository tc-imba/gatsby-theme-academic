/* eslint-disable react/forbid-prop-types */
import { Container, Row } from 'rsuite';
import React from 'react';

// import Header from '../../components/PageLayout/Header';
// import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import WakaTimeImage, { WakaTimeTypes } from '../../components/WakaTimeImage';

const WakaTime = () => (
  <>
    <SEO
      title="WakaTime"
      description="This page consists of your wakatime stats."
      path="wakatime"
    />
    <div className="marginTopTitle">
      <h1 className="titleSeparate">WakaTime Activities</h1>
    </div>
    <Row gutter={[20, 20]} type="flex">
      {
        WakaTimeTypes.map((val) => (
          <WakaTimeImage type={val} />
        ))
      }
    </Row>
  </>
);

export default WakaTime;
