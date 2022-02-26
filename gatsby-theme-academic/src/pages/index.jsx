import { Layout } from 'antd';
import { graphql } from 'gatsby';
import React from 'react';

import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Awards from '../components/PageFragments/HomePage/Awards';
import Experience from '../components/PageFragments/HomePage/Experience';
import SelectedResearch from '../components/PageFragments/HomePage/SelectedResearch';
import Footer from '../components/PageLayout/Footer';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <AboutMe />
        <Experience />
        <Awards />
        <SelectedResearch />
        <Footer />
      </SidebarWrapper>
    </Layout>
  </Layout>
);
