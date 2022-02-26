import {
  Layout, Empty, Row, Col, Input, Alert, Space,
} from 'antd';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import moment from 'moment';
import React, { useState } from 'react';
import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

import 'github-markdown-css';
import 'typeface-jetbrains-mono';
import 'highlight.js/styles/github.css';
import 'katex/dist/katex.min.css';

import CodeBox from '../../components/CodeBox';
import Comment from '../../components/Comment';
import Footer from '../../components/PageLayout/Footer';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils';
import './highlight-syntax.less';

// import * as style from './post.module.less';

const Post = ({ data }) => {
  // console.log(data.mdx.tableOfContents);
  const {
    fields: { slug: { html, nonce, htmlEncrypted } }, frontmatter: {
      cover, title, excerpt, path, date, commit, type,
    }, tableOfContents,
  } = data.mdx;
  const editTime = moment.unix(commit).format('MMM Do YYYY');
  const postTime = Utils.formatDate(date);

  const fluid = cover ? cover.childImageSharp.fluid : null;

  const siteMetadata = useSiteMetadata();
  const canonicalUrl = Utils.generateFullUrl(siteMetadata, path);
  // console.log(canonicalUrl);

  const [state, setState] = useState({
    locked: nonce !== '',
    failed: false,
    html,
  });

  // encrypted post

  const onUnlock = (value) => {
    if (state.locked) {
      try {
        const password = naclUtil.decodeUTF8(value);
        const nonceBuffer = naclUtil.decodeBase64(nonce);
        const keyBuffer = nacl.hash(password).slice(0, nacl.secretbox.keyLength);
        const box = naclUtil.decodeBase64(htmlEncrypted);
        const htmlBuffer = nacl.secretbox.open(box, nonceBuffer, keyBuffer);
        const htmlReal = naclUtil.encodeUTF8(htmlBuffer);
        setState({
          locked: false,
          failed: false,
          html: htmlReal,
        });
      } catch (e) {
        setState({
          locked: true,
          failed: true,
          html: '',
        });
      }
    }
  };

  const time = [];
  if (postTime) {
    time.push(`Posted: ${postTime}`);
  }
  if (commit > 0 && postTime !== editTime) {
    time.push(`Edited: ${editTime}`);
  }

  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title={title}
          description={excerpt}
          path={path}
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'technology']}
        />
        <Header />
        <SidebarWrapper tableOfContents={tableOfContents}>
          <Space direction="vertical" size="large">
            <div className="marginTopTitle">
              <h1 className="titleSeparate">{title}</h1>
            </div>
            <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
              {time.join(', ')}
            </div>
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={24} md={24} lg={fluid ? 12 : 24} xl={fluid ? 16 : 24}>
                <CodeBox title="Abstract" style={{ height: '100%' }}>
                  <p style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: Utils.parseMarkDown(excerpt, true) }} />
                </CodeBox>
              </Col>
              { fluid ? (
                <Col xs={24} sm={24} md={24} lg={12} xl={8}>
                  <Row align="middle" style={{ height: '100%' }}>
                    <Col xs={24}>
                      <Img fluid={fluid} title={title} alt={title} />
                    </Col>
                  </Row>
                </Col>
              ) : null }
            </Row>

            { state.locked
              ? (
                <Empty
                  description=""
                >
                  <Row justify="center">
                    <Col xs={24} sm={24} md={24} lg={16} xl={12}>
                      {
                        state.failed
                          ? (<Alert type="error" showIcon message="Wrong password! Please try again." />)
                          : (<Alert type="info" showIcon message="This article is encrypted by xsalsa20-poly1305 algorithm." />)
                      }
                      <Input.Search
                        placeholder="Enter password to unlock this article."
                        allowClear
                        enterButton="Unlock"
                        size="large"
                        onSearch={onUnlock}
                        style={{ marginTop: '1rem' }}
                      />
                    </Col>
                  </Row>
                </Empty>
              )
              : (
                <article className="markdown-body">
                  <MDXRenderer>{state.html}</MDXRenderer>
                </article>
              )}
          </Space>
          { type === 'posts' ? (
            <div style={{ marginTop: '2rem' }}>
              <Comment pageCanonicalUrl={canonicalUrl} pageId={title} />
            </div>
          ) : null}
          <Footer />
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($fileAbsolutePath: String!) {
    mdx(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      timeToRead
      tableOfContents
      frontmatter {
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        title
        date
        tags
        path
        excerpt
        links { 
          name
          url
        }
        commit
        type
      }
      fileAbsolutePath
      fields {
        slug {
          html
          htmlEncrypted
          nonce
        }
      }
    }
  }
`;

export default Post;
