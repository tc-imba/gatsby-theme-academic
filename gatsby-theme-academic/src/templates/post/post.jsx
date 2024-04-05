import { useLocation } from '@gatsbyjs/reach-router';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { MDXRenderer } from 'gatsby-plugin-mdx-v1';
import moment from 'moment';
import React, { useState, useEffect, useContext } from 'react';
import {
  Panel, Row, Col, Input, Message, FlexboxGrid, InputGroup, Grid,
} from 'rsuite';

import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

import CodeBox from '../../components/CodeBox';
import Comment from '../../components/Comment';
import SEO from '../../components/Seo';
import Context from '../../utils/context';
import { useSiteMetadata } from '@/utils/hooks';
import Utils from '../../utils/pageUtils.mjs';
import './highlight-syntax.less';
import Icon from '@/components/Icon';

// import * as style from './post.module.less';

function Post({
  data: { mdx },
  children,
}) {
  // console.log(data.mdx.tableOfContents);
  const {
    fields: {
      slug: {
        html,
        nonce,
        htmlEncrypted,
        title,
        excerpt,
        path,
        date,
        commit,
        type,
      },
    },
    frontmatter: {
      cover,
    },
    tableOfContents,
  } = mdx;
  // console.log(tableOfContents);
  const editTime = moment.unix(commit)
    .format('MMM Do YYYY');
  const postTime = Utils.formatDate(date);

  const image = cover ? getImage(cover) : null;

  const siteMetadata = useSiteMetadata();
  const canonicalUrl = Utils.generateFullUrl(siteMetadata, path);
  console.log(nonce);

  const [state, setState] = useState({
    locked: nonce !== '',
    failed: false,
    html,
  });
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const handlePasswordVisibleChange = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  // encrypted post

  const onUnlock = () => {
    if (state.locked) {
      try {
        const passwordDecoded = naclUtil.decodeUTF8(password);
        const nonceBuffer = naclUtil.decodeBase64(nonce);
        const keyBuffer = nacl.hash(passwordDecoded)
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
      context.setState({
        tableOfContents,
        pathname: location.pathname,
      });
    }
  }, []);

  const EncryptedBody = () => {
    return state.locked
      ? (
        <Panel
          description=""
        >
          <Grid fluid>
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
                <InputGroup style={{ marginTop: '1rem' }}>
                  <Input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    placeholder="Enter password to unlock this article."
                    onPressEnter={onUnlock}
                    onChange={handlePasswordChange}
                    size="lg"
                  />
                  <InputGroup.Button onClick={handlePasswordVisibleChange}>
                    {passwordVisible ? <Icon icon="eye" /> : <Icon icon="eye-slash" />}
                  </InputGroup.Button>
                </InputGroup>
              </Col>
            </Row>
          </Grid>
        </Panel>
      )
      : (
        <article className="markdown-body">
          {children}
        </article>
      );
  };

  const PublicBody = () => {
    return (
      <article className="markdown-body">
        {children}
      </article>
    );
  };

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
        <div style={{
          color: 'var(--rs-text-tertiary)',
          marginBottom: '1rem',
        }}
        >
          {time.join(', ')}
        </div>
        <FlexboxGrid style={{ marginBottom: '1rem' }}>
          <FlexboxGrid.Item as={Col} xs={24} sm={24} md={image ? 12 : 24} lg={image ? 16 : 24}>
            <CodeBox title="Abstract" style={{ height: '100%' }}>
              <p
                style={{ marginBottom: '0' }}
                dangerouslySetInnerHTML={{ __html: Utils.parseMarkDown(excerpt, true) }}
              />
            </CodeBox>
          </FlexboxGrid.Item>
          {image ? (
            <FlexboxGrid.Item as={Col} xs={24} sm={24} md={12} lg={8}>
              <div style={{ height: '100%' }}>
                <GatsbyImage image={image} title={title} alt={title} />
              </div>
            </FlexboxGrid.Item>
          ) : null}
        </FlexboxGrid>
        {nonce === '' ? <PublicBody /> : <EncryptedBody />}

      </div>
      {type === 'posts' ? (
        <div style={{ marginTop: '2rem' }}>
          <Comment pageCanonicalUrl={canonicalUrl} pageId={title} />
        </div>
      ) : null}
    </>
  );
}

export const pageQuery = graphql`
  query($contentFilePath: String!) {
    mdx(internal: { contentFilePath: { eq: $contentFilePath } }) {
      tableOfContents
      frontmatter {
        cover {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 1000
            )
          }
        }
      }
      fields {
        slug {
          html
          htmlEncrypted
          nonce
          timeToRead
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
      }
      internal {
        contentFilePath
      }
    }
  }
`;

export default Post;
