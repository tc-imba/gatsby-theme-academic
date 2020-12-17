import React from 'react';
import {
  Affix, Layout, Row, Col, List,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';
import Utils from '../../../utils/pageUtils';

const { Content } = Layout;

const Name = () => {
  const arr = Config.author.split(' ');
  const firstName = arr.slice(0, arr.length - 1).join(' ');
  const lastName = arr[arr.length - 1];
  return (
    <h2>
      {firstName}
      {' '}
      <span>{lastName}</span>
    </h2>
  );
};

const DomContent = () => (
  <aside>
    <img className={`${style.profileAvatar} centerAlign`} src={Utils.generateFullUrl(Config.avatar)} alt="" />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <Name />
      </div>
      <Row>
        {Config.professions.map((profession) => (
          <Col xs={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <span className={`${style.badge} ${style.badgeGray}`}>{profession}</span>
          </Col>
        ))}
      </Row>
      <div className="centerAlign box">
        <a href={Config.social.github} target="_blank" label="button" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </div>
      <List itemLayout="horizontal" split={false} style={{ width: '200px' }}>
        {Config.birthday
          ? (
            <List.Item>
              <List.Item.Meta
                avatar={<FontAwesomeIcon size="lg" fixedWidth icon="calendar" />}
                title={Config.birthday}
              />
            </List.Item>
          ) : null}
        {Config.location
          ? (
            <List.Item>
              <List.Item.Meta
                avatar={<FontAwesomeIcon size="lg" fixedWidth icon="map-marker-alt" />}
                title={Config.location}
              />
            </List.Item>
          ) : null}
        {Config.email
          ? (
            <List.Item>
              <List.Item.Meta
                avatar={<FontAwesomeIcon size="lg" fixedWidth icon="envelope" />}
                title={<a href={`mailto:${Config.email}`}>{Config.email}</a>}
              />
            </List.Item>
          ) : null}
      </List>
      {/* <div className={style.resumeDownload}> */}
      {/*  <a href="../resume.pdf" target="_blank">Download CV</a> */}
      {/* </div> */}
    </div>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={120}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row style={{ marginBottom: '4rem' }}>
            <Col sm={24} md={10} lg={7} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={14} lg={17}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
