import 'rsuite/dist/rsuite.min.css';
import '@/styles/global.less';
import '@/styles/github-markdown.less';
// import '@/styles/github-gist.less';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/command-line/prism-command-line.css';
import '@/styles/prismjs.less';
import 'typeface-jetbrains-mono';
import 'katex/dist/katex.min.css';

import { useLocation } from '@gatsbyjs/reach-router';
import { Link, withPrefix } from 'gatsby';
import { startsWith } from 'lodash';
import React, { useRef, useState } from 'react';
import {
  IconButton, Button, Tooltip, Container, Header, Whisper,
} from 'rsuite';

import { useWindowSize, useTheme } from '@/utils/hooks';
import Affix from '../../Affix';
import Icon from '../../Icon';
import LoadableSearch from '../../SearchBar/loadable';

import * as style from './header.module.less';

const ThemeModeSwitch = () => {
  const [themeMode, setThemeMode] = useTheme();
  const nextThemeMode = themeMode === 'light' ? 'dark' : 'light';

  const toggleTheme = () => {
    setThemeMode(nextThemeMode);
  };

  const tooltip = (
    <Tooltip>
      {`Switch to ${nextThemeMode} mode`}
    </Tooltip>
  );

  return (
    <Whisper placement="bottom" controlId="control-id-hover" trigger="hover" speaker={tooltip}>
      <IconButton
        size="sm"
        appearance="subtle"
        icon={<Icon size="lg" icon={themeMode === 'light' ? 'sun' : 'moon'} fixedWidth />}
        onClick={toggleTheme}
      />
    </Whisper>
  );
};

const NavButton = (props) => {
  const {
    onClick,
    to,
    children,
    partiallyActive,
  } = props;

  const location = useLocation();
  const prefixedTo = withPrefix(to);
  const encodedHref = encodeURI(prefixedTo);
  const isCurrent = location.pathname === encodedHref;
  const isPartiallyCurrent = startsWith(location.pathname, encodedHref);
  const showPrimary = partiallyActive ? isPartiallyCurrent : isCurrent;
  const appearance = showPrimary ? 'primary' : 'subtle';

  return (
    <li className={style.navItem}>
      <Link
        className={`rs-btn rs-btn-lg rs-btn-${appearance}`}
        to={to}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default () => {
  const [menu, setMenu] = useState(false);
  const [isSearchBarExpanded, setSearchBarExpanded] = useState(false);
  // const searchBarRef = useRef(null);

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
    <Affix top={0}>
      <Header>
        <div
          className={style.circleMenu}
          role="button"
          tabIndex="0"
          onKeyDown={toggleMenu}
          onClick={toggleMenu}
        >
          <div className={`${style.hamburger} ${menu ? style.menuIcon : null}`}>
            <div className={style.line} />
            <div className={style.line} />
            <div className={style.hamburgerText}>MENU</div>
          </div>
        </div>
        <Container className={`${style.navWrap} ${menu ? null : style.hidden} ${menu ?
          style.openMenu :
          null}`}
        >
          <div className={style.backgroundDiv}>
            <ul className={style.nav}>
              <NavButton to="/" onClick={toggleMenu}>About</NavButton>
              <NavButton to="/experience/" onClick={toggleMenu} partiallyActive>Experience</NavButton>
              <NavButton to="/research/" onClick={toggleMenu} partiallyActive>Research</NavButton>
              <NavButton to="/posts/" onClick={toggleMenu} partiallyActive>Posts</NavButton>
              <li className={style.navItem}>
                <ThemeModeSwitch />
              </li>
              <li className={style.navItem} style={{ marginLeft: '1rem' }}>
                <LoadableSearch
                  isSearchBarExpanded={isSearchBarExpanded}
                  handleSearchBarToggle={collapseSearch}
                />
                {isSearchBarExpanded
                  ? <Icon icon="times" fixedWidth />
                  : <Icon icon="search" fixedWidth onMouseDown={expandSearch} />}
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
        </Container>
      </Header>
    </Affix>
  );
};
