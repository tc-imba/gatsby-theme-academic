import { Container } from 'rsuite';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../../components/PageLayout/Footer';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Panel from '../../components/Panel';
import SEO from '../../components/Seo';

const Research = ({ data }) => (
  <>
    <SEO
      title="Research"
      description="I like blogging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
          and scenarios I have come across in realtime."
      path="research"
    />
    <div className="marginTopTitle">
      <h1 className="titleSeparate">Research</h1>
      <Panel type="research" data={data} />
    </div>
  </>
);

Research.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allTag(
      sort: {count: DESC},
      filter: { research: { eq: true } }
    ) {
      edges {
        node {
          name
          color
          path
        }
      }
    }
    allMdx(
      filter: { 
        internal: {
          contentFilePath: { regex: "/research\/.*\/index\\.mdx?$/" }
        }
      }
      sort: [{frontmatter: {priority: ASC}}, {frontmatter: {title: ASC}}]
    ) {
      edges {
        node {
          frontmatter {
            cover {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 320
                  height: 180
                  transformOptions: {
                    fit: CONTAIN
                  }
                )
              }
            }
          }
          fields {
            slug {
              date
              venue
              authors
              path
              title
              tags
              excerpt
              priority
              links {
                name
                url
              }
            }
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  }
`;

export default Research;
