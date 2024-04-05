// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@gatsbyjs/reach-router';
import React, { useRef, useContext } from 'react';
import {
  Container, Content, Row, Col, List, Button, Sidebar, Grid, FlexboxGrid, Divider, IconButton,
} from 'rsuite';

import Context from '../../../utils/context';
import { useWindowSize, useSiteMetadata } from '../../../utils/hooks';
import Utils from '../../../utils/pageUtils.mjs';
import Affix from '../../Affix';
import Icon from '../../Icon';
import IconListItem from '../../IconListItem';
import LoadableTableOfContents from '../../TableOfContents/loadable';

import * as style from './sidebar.module.less';

const Name = () => {
  const siteMetadata = useSiteMetadata();
  const arr = siteMetadata.author.split(' ');
  const firstName = arr.slice(0, arr.length - 1)
    .join(' ');
  const lastName = arr[arr.length - 1];
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item as={Col} xs={24}>
        <h2 className="centerAlign">
          {firstName}
          &nbsp;
          <span>{lastName}</span>
        </h2>
      </FlexboxGrid.Item>
      {siteMetadata.authorAlternative ? (
        <FlexboxGrid.Item as={Col} xs={24}>
          <h3 className="centerAlign">{siteMetadata.authorAlternative}</h3>
        </FlexboxGrid.Item>
      ) : null}
    </FlexboxGrid>
  );
};

const UserInfo = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <>
      <div className={`${style.name} centerAlign`}>
        <Row type="flex">
          {siteMetadata.professions.map((profession) => (
            <Col
              key={profession}
              xs={24}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span className={`${style.badge} ${style.badgeGray}`}>{profession}</span>
            </Col>
          ))}
        </Row>
        <div className="centerAlign box" style={{ marginTop: '0.5rem' }}>
          <FlexboxGrid>
            {siteMetadata.social.map((social) => (
              <FlexboxGrid.Item as={Col} key={social.url} className={style.iconButtonCol}>
                <IconButton
                  className={style.iconButton}
                  size="sm"
                  appearance="subtle"
                  icon={(
                    <a
                      href={social.url}
                      target="_blank"
                      label="button"
                      rel="noopener noreferrer"
                    >
                      <Icon size="lg" fixedWidth icon={social.icon} />
                    </a>
                  )}
                />
              </FlexboxGrid.Item>
            ))}
          </FlexboxGrid>
        </div>
        <div
          style={{
            width: '200px',
            marginBottom: '-0.5rem',
          }}
        >
          {siteMetadata.birthday
            ? (
              <IconListItem icon="calendar" title={siteMetadata.birthday} />
            ) : null}
          {siteMetadata.location
            ? (
              <IconListItem icon="map-marker-alt" title={siteMetadata.location} />
            ) : null}
          {siteMetadata.email
            ? (
              <IconListItem icon="envelope" title={<a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>} />
            ) : null}
        </div>
      </div>
    </>
  );
};

const DomContent = (props) => {
  const siteMetadata = useSiteMetadata();
  const mainSidebar = useRef(null);
  const context = useContext(Context);
  const { pathname } = props;
  // console.log(context);
  return (
    <Sidebar>
      <div ref={mainSidebar}>
        <img
          className={`${style.profileAvatar} centerAlign`}
          src={Utils.generateFullUrl(siteMetadata, siteMetadata.avatar)}
          alt=""
        />
        <div className={`${style.name} ${style.boxName} centerAlign`}>
          <Name />
        </div>
        {context && context.state && context.state.tableOfContents
        && context.state.pathname === pathname
          ? (
            <>
              <Divider />
              <LoadableTableOfContents
                tableOfContents={context.state.tableOfContents}
                mainSidebar={mainSidebar}
              />
            </>
          ) : <UserInfo />}
      </div>
      {/* <div className={style.resumeDownload}> */}
      {/*  <a href="../resume.pdf" target="_blank">Download CV</a> */}
      {/* </div> */}
    </Sidebar>
  );
};

const SidebarWrapper = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = useLocation();
  let domContent = <DomContent pathname={pathname} />;
  if (width >= 992) {
    domContent = (
      <Affix top={100}>
        <DomContent pathname={pathname} />
      </Affix>
    );
  }
  if (width < 480) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent pathname={pathname} />;
    }
  }
  return (
    <>
      <Container className={`${style.content}`}>
        <Content className={`${style.content}`}>
          <FlexboxGrid style={{ marginBottom: '4rem' }}>
            <FlexboxGrid.Item as={Col} xs={24} sm={24} md={8} lg={7} className={style.sidebarContent}>
              {domContent}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item as={Col} xs={24} sm={24} md={16} lg={17}>
              <Container className={`${style.boxContent} borderRadiusSection`}>
                {children}
              </Container>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Container>
      <Content className={`${style.content}`}>
        <Row type="flex">
          <Col sm={24} md={24} lg={24}>
            <Container className={`${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Container>
          </Col>
        </Row>
      </Content>
    </Container>
  );
};

export default SidebarWrapper;
