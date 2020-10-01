import React from 'react';
import {
  Affix, Layout, Row, Col, List
} from 'antd';
import FA from 'react-fontawesome';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  facebook, github, instagram, twitter,
} = Config.social;

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
    <img className={`${style.profileAvatar} centerAlign`} src={`../${Config.avatar}`} alt="" />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <Name />
      </div>
      {Config.professions.map((profession) => <div className={`${style.badge} ${style.badgeGray}`}>{profession}</div>)}
      <div className="centerAlign box">
        <a href={facebook} target="_blank" label="button" rel="noopener noreferrer"><FA name="facebook-f" /></a>
        <a href={twitter} target="_blank" label="button" rel="noopener noreferrer"><FA name="twitter" /></a>
        <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FA name="github" /></a>
        <a href={instagram} target="_blank" label="button" rel="noopener noreferrer"><FA name="instagram" /></a>
      </div>
      <List itemLayout="horizontal" split={false}>
        <List.Item>
          <List.Item.Meta
            avatar={<FeatherIcon size="19" icon="calendar" />}
            title={Config.birthday}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<FeatherIcon size="19" icon="map-pin" />}
            title={Config.location}
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<FeatherIcon size="19" icon="mail" />}
            title={<a href={`mailto:${Config.email}`}>{Config.email}</a>}
          />
        </List.Item>
      </List>
      <div className={style.resumeDownload}>
        <a href="../resume.pdf" download target="_blank">Download CV</a>
      </div>
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
      <Affix offsetTop={0}>
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
          <Row>
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
