/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Input } from 'rsuite';
import classnames from 'classnames';
import React, { useRef, useEffect } from 'react';
// import { navigate } from '@reach/router';

import Utils from '../../utils/pageUtils';

import DocSearch from './lib/DocSearch';
import './algolia.css';
import './styles.css';

// import { useHistory } from "@docusaurus/router";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

/* eslint-disable no-underscore-dangle */

const Search = (props) => {
  const initialized = useRef(false);
  const searchBarRef = useRef(null);
  const initAlgolia = (searchDocs, searchIndex) => {
    // eslint-disable-next-line no-new
    new DocSearch({
      searchDocs,
      searchIndex,
      inputSelector: '#search_input_react',
      // Override algolia's default selection event, allowing us to do client-side
      // navigation and avoiding a full page refresh.
      handleSelected: (_input, _event, suggestion) => {
        const url = Utils.resolvePageUrl(suggestion.url);
        window.location.href = url;
        // navigate(url);
      },
    });
  };

  /*  const getSearchDoc = () => (process.env.NODE_ENV === 'production'
    ? fetch(`${baseUrl}search-doc.json`).then((content) => content.json())
    : Promise.resolve([]));

  const getLunrIndex = () => (process.env.NODE_ENV === 'production'
    ? fetch(`${baseUrl}lunr-index.json`).then((content) => content.json())
    : Promise.resolve([])); */

  const { isSearchBarExpanded } = props;

  const loadAlgolia = () => {
    if (!initialized.current && window.__LUNR__ && window.__LUNR__.en) {
      const { index, store } = window.__LUNR__.en;
      initAlgolia(store, index);
      initialized.current = true;
      if (isSearchBarExpanded) {
        searchBarRef.current.focus();
      }
    }
  };

  // const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (isSearchBarExpanded) {
      loadAlgolia();
      searchBarRef.current.focus();
    }
  });

  const toggleSearchIconClick = () => {
    if (isSearchBarExpanded) {
      props.handleSearchBarToggle();
    }
  };

  // if (isSearchBarExpanded) {
  //   searchBarRef.current.focus();
  // }

  /*  const toggleSearchIconClick = () => {
    if (!searchOpen) {
      searchBarRef.current.focus();
    }
    setSearchOpen(!searchOpen);
  }; */

  const style = {
    position: 'absolute',
    right: '50px',
    top: '70px',
    width: '80%',
  };
  if (!isSearchBarExpanded) {
    style.display = 'none';
  }

  return (
    <div className="navbar__search" key="search-box" style={style}>
      {/* <span
        aria-label="expand searchbar"
        role="button"
        className={classnames('search-icon', {
          'search-icon-hidden': isSearchBarExpanded,
        })}
        onClick={toggleSearchIconClick}
        onKeyDown={toggleSearchIconClick}
        tabIndex={0}
      /> */}
      <Input
        id="search_input_react"
        type="search"
        placeholder="Search"
        aria-label="Search"
        className={classnames(
          'navbar__search-input',
          { 'search-bar-expanded': isSearchBarExpanded },
          { 'search-bar': !isSearchBarExpanded },
        )}
        // onClick={loadAlgolia}
        // onMouseOver={loadAlgolia}
        // onFocus={loadAlgolia}
        onBlur={toggleSearchIconClick}
        ref={searchBarRef}
      />
    </div>
  );
};

export default Search;
