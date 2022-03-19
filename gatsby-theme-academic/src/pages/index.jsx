import React from 'react';

import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Awards from '../components/PageFragments/HomePage/Awards';
import Experience from '../components/PageFragments/HomePage/Experience';
import SelectedResearch from '../components/PageFragments/HomePage/SelectedResearch';
import SEO from '../components/Seo';

export default () => (
  <>
    <SEO
      title="About"
      description=""
      path=""
      keywords={['NodeJS', 'Gatsby']}
    />
    <AboutMe />
    <Experience />
    <Awards />
    <SelectedResearch />
  </>
);
