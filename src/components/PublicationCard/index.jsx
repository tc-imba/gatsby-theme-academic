import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Row, Col } from 'antd';
import style from './publicationCard.module.less';
import Utils from '../../utils/pageUtils';

const PublicationCard = (props) => {
  const { data: { node: { frontmatter } } } = props;

  return (
    <div className={style.publicationCard}>
      <Link to={Utils.resolvePageUrl(frontmatter.path)}>
        <Row gutter={[10, 10]} align="middle">
          <Col xs={24} sm={24} md={16} lg={16}>
            <div>
              <p>
                <span className={style.dateHolder}>{frontmatter ? moment(frontmatter.date).format('MMM Do YYYY') : ''}</span>
              </p>
              <h3>{frontmatter ? frontmatter.title : ''}</h3>
              <p>{frontmatter ? frontmatter.excerpt : ''}</p>
              <p style={{ color: '#ce6d96', wordSpacing: '10px' }}>
                {
                    `#${frontmatter.tags.join(' #')}`
                }
              </p>
            </div>
          </Col>
          <Col xs={0} sm={0} md={8} lg={8}>
            <div
              className={style.postCardImg}
              style={{
                backgroundImage: `url(${frontmatter ? frontmatter.cover.childImageSharp.fluid.src : ''})`,
              }}
            />
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default PublicationCard;
