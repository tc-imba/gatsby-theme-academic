import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import {
  Layout, Affix, Col, Row,
} from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './header.module.less';
import '../../../styles/global.less';
import { useWindowSize } from '../../../utils/hooks';

import LoadableSearch from '../../SearchBar/loadable';

library.add(fas, fab);

export default () => {
  const [menu, setMenu] = useState(false);
  const [isSearchBarExpanded, setSearchBarExpanded] = useState(false);
  const searchBarRef = useRef(null);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      if (menu) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
  };

  const toggleSearchIconClick = (flag) => {
    setSearchBarExpanded(flag);
  };

  const expandSearch = () => {
    toggleSearchIconClick(true);
  };

  const collapseSearch = () => {
    toggleSearchIconClick(false);
  };

  return (
    <Affix offsetTop={0}>
      <div className={style.circleMenu} role="button" tabIndex="0" onKeyDown={toggleMenu} onClick={toggleMenu}>
        <div className={`${style.hamburger} ${menu ? style.menuIcon : null}`}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.hamburgerText}>MENU</div>
        </div>
      </div>
      <div className={style.topPadding} />
      <Layout className={`${style.navWrap} ${menu ? null : style.hidden} ${menu ? style.openMenu : null}`}>
        <div className={style.backgroundDiv}>
          <ul className={style.nav}>
            <li className={style.navItem}>
              <Link to="/" onClick={toggleMenu} activeClassName={style.anchorActive}>
                About
              </Link>
            </li>
            {/* <li className={style.navItem}> */}
            {/*  <Link to="/contact" onClick={toggleMenu} activeClassName={style.anchorActive}> */}
            {/*    Contact */}
            {/*  </Link> */}
            {/* </li> */}
            <li className={style.navItem}>
              <Link to="/experience/" onClick={toggleMenu} activeClassName={style.anchorActive}>
                Experience
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/research/" onClick={toggleMenu} activeClassName={style.anchorActive}>
                Research
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/posts/" onClick={toggleMenu} activeClassName={style.anchorActive}>
                Posts
              </Link>
            </li>
            <li className={style.navItem} style={{ marginLeft: '1rem' }}>
              <LoadableSearch
                isSearchBarExpanded={isSearchBarExpanded}
                handleSearchBarToggle={collapseSearch}
                ref={searchBarRef}
              />
              {isSearchBarExpanded
                ? <FontAwesomeIcon icon="times" fixedWidth />
                : <FontAwesomeIcon icon="search" fixedWidth onMouseDown={expandSearch} />}
            </li>
            {/* <li className={style.navItem}>
              <Link to="/tags" onClick={toggleMenu} activeClassName={style.anchorActive}>
                Tags
              </Link>
            </li>
            <li className={style.navItem}>
              <Link to="/resume" onClick={toggleMenu} activeClassName={style.anchorActive}>
                Resume
              </Link>
            </li> */}
          </ul>
        </div>
      </Layout>
      <div className="container" style={{ position: 'fixed' }}>
        <Row>
          <Col sm={24} md={10} lg={7} />
          <Col sm={24} md={14} lg={17}>
            <div className={style.bottomPadding} />
          </Col>
        </Row>
      </div>
    </Affix>
  );
};
