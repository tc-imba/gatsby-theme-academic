import { Container } from 'rsuite';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// import Footer from '../../components/PageLayout/Footer';
// import Header from '../../components/PageLayout/Header';
// import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Panel from '../../components/Panel';
import SEO from '../../components/Seo';

const Posts = ({ data }) => (
  <>
    <SEO
      title="Posts"
      description="I like blogging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
          and scenarios I have come across in realtime."
      path="posts"
    />
    <div className="marginTopTitle">
      <h1 className="titleSeparate">Posts</h1>
    </div>
    <Panel type="posts" data={data} />
  </>
);

Posts.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allTag(
      sort: {count: DESC}
      filter: { posts: { eq: true } }
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
      sort: {frontmatter: {date: DESC}}
      filter: {
        internal: {
          contentFilePath: { regex: "/posts\/.*\/index\\.mdx?$/" }
        }
      }
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
              path
              title
              tags
              excerpt
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

export default Posts;
