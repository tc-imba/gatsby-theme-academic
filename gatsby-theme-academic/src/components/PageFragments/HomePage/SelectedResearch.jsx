import { Col, FlexboxGrid } from 'rsuite';
import { useStaticQuery, graphql } from 'gatsby';
import _ from 'lodash';
import React from 'react';

import ResearchCard from '../../ResearchCard';

import * as styles from './homePage.module.less';

const SelectedResearch = () => {
  const data = useStaticQuery(graphql`
  {
    allTag {
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
        fileAbsolutePath: { regex: "/research\/.*\/index\\.md$/" }
        frontmatter: { 
          selected: { eq: true } 
        }
      }
      sort: { fields: [frontmatter___priority, frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 320, maxHeight: 180, fit: CONTAIN, background: "rgba(0,0,0,0)") {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            date
            venue
            authors
            path
            title
            tags
            excerpt
            selected
            priority
            links {
              name
              url
            }
          }
          fileAbsolutePath
        }
      }
    }
  }
`);

  const tags = data.allTag ? data.allTag.edges : [];
  const tagsMap = _.mapValues(_.keyBy(tags, (tag) => tag.node.name), 'node');
  return (data.allMdx && data.allMdx.edges && data.allMdx.edges.length) ? (
    <div className={styles.homepageSection}>
      <h2 style={{ marginBottom: '1rem' }}>Selected Research</h2>
      <FlexboxGrid fluid className="spacing-grid">
        {data.allMdx &&
          data.allMdx.edges.map((val, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <FlexboxGrid.Item as={Col} xs={24} sm={24} md={24} lg={24}>
              <ResearchCard data={val} tagsMap={tagsMap} />
            </FlexboxGrid.Item>
          ))}
      </FlexboxGrid>
    </div>
  ) : (
    <></>
  );
};

export default SelectedResearch;
