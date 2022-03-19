import { useLocation } from '@gatsbyjs/reach-router';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import moment from 'moment';
import React, { useState, useEffect, useContext } from 'react';
import {
  Panel, Row, Col, Input, Message, FlexboxGrid,
} from 'rsuite';
import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

import CodeBox from '../../components/CodeBox';
import Comment from '../../components/Comment';
import SEO from '../../components/Seo';
import Context from '../../utils/context';
import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils';
import './highlight-syntax.less';

// import * as style from './post.module.less';

const Post = ({ data }) => {
  // console.log(data.mdx.tableOfContents);
  const {
    fields: {
      slug: {
        html,
        nonce,
        htmlEncrypted,
      },
    },
    frontmatter: {
      cover,
      title,
      excerpt,
      path,
      date,
      commit,
      type,
    },
    tableOfContents,
  } = data.mdx;
  const editTime = moment.unix(commit)
    .format('MMM Do YYYY');
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
        const keyBuffer = nacl.hash(password)
          .slice(0, nacl.secretbox.keyLength);
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

  // toc
  const context = useContext(Context);
  const location = useLocation();
  useEffect(() => {
    if (context && context.setState && Object.getOwnPropertyNames(tableOfContents).length) {
      context.setState({ tableOfContents, pathname: location.pathname });
    }
  }, []);

  return (
    <>
      <SEO
        title={title}
        description={excerpt}
        path={path}
        keywords={[
          'FullStack developer',
          'Javascript',
          'ReactJS',
          'NodeJS',
          'Gatsby',
          'technology']}
      />
      <div>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">{title}</h1>
        </div>
        <div style={{ color: 'var(--rs-text-tertiary)', marginBottom: '1rem' }}>
          {time.join(', ')}
        </div>
        <FlexboxGrid style={{ marginBottom: '1rem' }}>
          <FlexboxGrid.Item as={Col} xs={24} sm={24} md={fluid ? 12 : 24} lg={fluid ? 16 : 24}>
            <CodeBox title="Abstract" style={{ height: '100%' }}>
              <p
                style={{ marginBottom: '0' }}
                dangerouslySetInnerHTML={{ __html: Utils.parseMarkDown(excerpt, true) }}
              />
            </CodeBox>
          </FlexboxGrid.Item>
          {fluid ? (
            <FlexboxGrid.Item as={Col} xs={24} sm={24} md={12} lg={8}>
              <div style={{ height: '100%' }}>
                <Img fluid={fluid} title={title} alt={title} />
              </div>
            </FlexboxGrid.Item>
          ) : null}
        </FlexboxGrid>

        {state.locked
          ? (
            <Panel
              description=""
            >
              <Row justify="center" type="flex">
                <Col xs={24} sm={24} md={24} lg={16} xl={12}>
                  {
                    state.failed ? (
                      <Message type="error">
                        Wrong password! Please try again.
                      </Message>
                    ) : (
                      <Message type="info">
                        This article is encrypted by xsalsa20-poly1305 algorithm.
                      </Message>
                    )
                  }
                  {/*                  <Input.Search
                    placeholder="Enter password to unlock this article."
                    allowClear
                    enterButton="Unlock"
                    size="large"
                    onSearch={onUnlock}
                    style={{ marginTop: '1rem' }}
                  /> */}
                </Col>
              </Row>
            </Panel>
          )
          : (
            <article className="markdown-body">
              <MDXRenderer>{state.html}</MDXRenderer>
            </article>
          )}
      </div>
      {type === 'posts' ? (
        <div style={{ marginTop: '2rem' }}>
          <Comment pageCanonicalUrl={canonicalUrl} pageId={title} />
        </div>
      ) : null}
    </>
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
