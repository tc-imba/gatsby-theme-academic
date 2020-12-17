import React, { useState } from 'react';
import {
  Layout, Empty, Row, Col, Input, Alert, Affix,
} from 'antd';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';
import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

import 'github-markdown-css';
import 'typeface-jetbrains-mono';
import 'highlight.js/styles/github.css';

import Header from '../../components/PageLayout/Header';
import Footer from '../../components/PageLayout/Footer';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Comment from '../../components/Comment';

import './highlight-syntax.less';

import style from './post.module.less';
import Utils from '../../utils/pageUtils';

const Post = ({ data }) => {
  const { fields: { parsed }, frontmatter: { cover } } = data.markdownRemark;
  const {
    title, excerpt, path, date, commit, html, nonce, htmlEncrypted, type,
  } = parsed;
  const editTime = moment.unix(commit).format('MMM Do YYYY');
  const postTime = Utils.formatDate(date);

  const fluid = cover ? cover.childImageSharp.fluid : null;

  const canonicalUrl = Utils.generateFullUrl(path);
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
        <SidebarWrapper>
          <Affix offsetTop={130} prefixCls="fix-title">
            <h1 className="titleSeparate">{title}</h1>
            <div>
              <div style={{ color: 'rgba(0, 0, 0, 0.45)', marginBottom: '1rem' }}>
                {time.join(', ')}
              </div>
            </div>
            { fluid ? (
              <div className={style.bannerImgContainer}>
                <Img className={style.bannerImg} fluid={fluid} title={excerpt} alt={title} />
              </div>
            ) : null }
          </Affix>
          <div>
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
              : <article className="markdown-body" dangerouslySetInnerHTML={{ __html: state.html }} />}
          </div>
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
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      timeToRead
      frontmatter {
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fileAbsolutePath
      fields {
        parsed {
          html
          htmlEncrypted
          nonce
          title
          date
          tags
          path
          excerpt
          links { name }
          commit
          type
        }
      }
    }
  }
`;

export default Post;
