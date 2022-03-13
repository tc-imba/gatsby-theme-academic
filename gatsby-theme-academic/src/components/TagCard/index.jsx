import { Link } from 'gatsby';
import React from 'react';

import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils';

import * as style from './tagCard.module.less';

const TagCard = (props) => {
  const {
    img, name, description, color,
  } = props;
  const siteMetadata = useSiteMetadata();
  const tagsPage = siteMetadata.pages.tags;
  return (
    <Link className={style.tagCard} to={Utils.resolvePageUrl(tagsPage, name)}>
      <div className={style.tagCard}>
        <div
          className={style.tagImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}` }}>
              #
              {name}
            </h4>
          </div>
          <p>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TagCard;
