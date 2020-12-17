import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Affix, Layout } from 'antd';

import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Panel from '../../components/Panel';
import SEO from '../../components/Seo';

const Posts = ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="Posts"
        description="I like blogging about various web technologies and other stuff related to
          javascript and other trends like graphql, prisma etc. This blog expresses my views of various technologies
          and scenarios I have come across in realtime."
        path="posts"
      />
      <SidebarWrapper>
        <Affix offsetTop={130} prefixCls="fix-title">
          <h1 className="titleSeparate">Posts</h1>
        </Affix>
        <Panel type="posts" data={data} />
      </SidebarWrapper>
    </Layout>
  </Layout>
);

Posts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allTag(
      sort: { fields: [count], order: DESC },
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/posts\/.*\/index\\.md$/" }
      }
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
          }
          fileAbsolutePath
          fields {
            parsed {
              date
              path
              title
              tags
              excerpt
            }
          }
        }
      }
    }
  }
`;

export default Posts;
