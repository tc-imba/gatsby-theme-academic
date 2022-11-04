/* eslint-disable import/prefer-default-export */
import { graphql, useStaticQuery } from 'gatsby';
import { useState, useEffect } from 'react';

const THEME_MODE = 'theme-mode';
const getThemeMode = () => {
  const savedThemeMode = window.localStorage.getItem(THEME_MODE);
  if (savedThemeMode === 'dark' || savedThemeMode === 'light') return savedThemeMode;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState(getThemeMode());
  const themeClassName = `rs-theme-${themeMode}`;
  window.document.body.classList.add(themeClassName);

  useEffect(() => {
    const initialMode = getThemeMode();
    if (initialMode !== themeMode) {
      const initialThemeClassName = `rs-theme-${initialMode}`;
      window.localStorage.setItem(THEME_MODE, themeMode);
      window.document.body.classList.remove(initialThemeClassName);
      window.document.body.classList.add(themeClassName);
      // window.location.reload();
    }
  }, [themeMode]);

  return [themeMode, setThemeMode];
};

/**
 * custom hook to detect the window size of a browser
 * @return {Array} [height, width ].
 */
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          pathPrefix
          siteUrl
          title
          description
          author
          authorAlternative
          introduction
          avatar
          professions
          tocMaxDepth
          excerptMaxLength
          birthday
          location
          email
          postsForArchivePage
          social {
            url
            icon
          }
          disqusScript
          contactFormUrl
          pages {
            home
            posts
            contact
            resume
            tags
            research
          }
          wakatime {
            username
            activity
            language
            editor
            os
          }
          interests {
            icon
            title
          }
          education {
            date
            icon
            title
            location
          }
          experience {
            title
            position
            data {
              date
              title
              location
              description
            }
          }
          awards {
            date
            title
          }
          tags {
            id
            name
            description
            color
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
