/* Vendor imports */
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { getSrc } from "gatsby-plugin-image"

/* App imports */
import { useSiteMetadata } from '../../utils/hooks';
import Utils from '../../utils/pageUtils.mjs';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    file(name: { eq: "facebook-icon" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 600
        )
      }
    }
  }
`;

function SEO({
  title,
  description,
  path,
  lang,
  keywords,
  contentType,
  imageUrl,
  translations,
  meta,
}) {
  const siteMetadata = useSiteMetadata();
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaKeywords = keywords && keywords.length > 0
          ? { name: 'keywords', content: keywords.join(', ') }
          : [];
        const pageUrl = Utils.resolvePageUrl(
          siteMetadata.siteUrl,
          siteMetadata.pathPrefix,
          path,
        );
        const metaImageUrl = Utils.resolveUrl(
          siteMetadata.siteUrl,
          imageUrl || getSrc(data.file),
        );

        return (
          <Helmet
            title={title} // Page title
            titleTemplate={`%s | ${siteMetadata.title}`}
            meta={
              [
                { name: 'description', content: description }, // Page description
                /* Open Graph */
                { property: 'og:title', content: title },
                { property: 'og:type', content: contentType || 'website' },
                { property: 'og:url', content: pageUrl },
                { property: 'og:description', content: description },
                { property: 'og:image', content: metaImageUrl },
                { property: 'og:image:alt', content: description },
                { property: 'og:site_name', content: siteMetadata.title },
                { property: 'og:locale', content: lang || 'en_US' },
                /* Twitter card */
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: description },
                { name: 'twitter:image', content: metaImageUrl },
                { name: 'twitter:image:alt', content: description },
                { name: 'twitter:site', content: siteMetadata.author },
                { name: 'twitter:creator', content: siteMetadata.author },
                /* HTTP no cache */
                // { 'http-equiv': 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },
                // { 'http-equiv': 'Pragma', content: 'no-cache' },
                // { 'http-equiv': 'Expires', content: '0' },
              ]
                .concat(metaKeywords) // Keywords
                .concat(meta || []) // Other provided metadata
            }
            link={[
              { rel: 'canonical', href: pageUrl }, // Canonical url
            ]
              // Translated versions of page
              .concat(
                translations
                  ? translations.map((obj) => ({
                    rel: 'alternate',
                    hreflang: obj.hreflang,
                    href: Utils.resolvePageUrl(
                      siteMetadata.siteUrl,
                      siteMetadata.pathPrefix,
                      obj.path,
                    ),
                  }))
                  : [],
              )}
          />
        );
      }}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  lang: PropTypes.string,
  contentType: PropTypes.oneOf(['article', 'website']),
  imageUrl: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      hreflang: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

SEO.defaultProps = {
  lang: 'en_US',
  contentType: 'website',
  imageUrl: null,
  keywords: [],
  translations: [],
  meta: [],
};

export default SEO;
