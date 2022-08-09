/* eslint-disable global-require */
module.exports = ({
  contentPath = 'content',
  author = '',
  googleAnalyticTrackingId = 'UA-XXXXXXXXX-X',
  defaultLanguage = 'en',
  pages = {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  icon = '',
  tagColors = [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'],
}) => {
  return {
    plugins: [
      {
        resolve: 'gatsby-plugin-alias-imports',
        options: {
          alias: {
            '@': require('path').resolve(__dirname, 'src'),
          },
          extensions: [
            'js', 'jsx', 'less', 'css',
          ],
        },
      },
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-plugin-less',
        options: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
      'gatsby-plugin-offline',
      'gatsby-plugin-lodash',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: `${__dirname}/src/images`,
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: author,
          short_name: author,
          start_url: '/',
          background_color: '#304CFD',
          theme_color: '#304CFD',
          display: 'standalone',
          icon, // This path is relative to the root of the site.
          legacy: true, // this will add apple-touch-icon links to <head>. Required for
          // versions prior to iOS 11.3.
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'markdown-pages',
          path: contentPath,
        },
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          remarkPlugins: [
            require('remark-math'),
            require('remark-gfm'),
            require('remark-abbr'),
            [
              require('remark-external-links'),
              {
                target: '_blank',
                rel: 'nofollow',
              },
            ],
          ],
          rehypePlugins: [
            require('rehype-katex'),
            require('rehype-slug'),
            require('rehype-autolink-headings'),
          ],
          gatsbyRemarkPlugins: [
            'gatsby-remark-embed-gist',
            'gatsby-remark-responsive-iframe',
            {
              resolve: 'gatsby-remark-copy-linked-files',
              options: {
                destinationDir: 'files',
                ignoreFileExtensions: ['md'],
              },
            },
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 1000,
                quality: 80,
                showCaptions: true,
                linkImagesToOriginal: true,
              },
            },
            {
              resolve: 'gatsby-remark-embed-snippet',
              options: {},
            },
            {
              resolve: 'gatsby-remark-prismjs',
              options: {
                aliases: {
                  sh: 'bash',
                },
              },
            },
          ],
        },
      },
      {
        resolve: 'gatsby-plugin-i18n',
        options: {
          langKeyDefault: defaultLanguage,
          useLangKeyLayout: false,
        },
      },
      'gatsby-plugin-sitemap',
      'gatsby-plugin-robots-txt',
      {
        resolve: 'gatsby-plugin-eslint',
        options: {
          extensions: ['js', 'jsx', 'ts', 'tsx'],
          exclude: ['node_modules', '.cache', 'public'],
          stages: ['develop'],
          emitWarning: true,
          failOnError: false,
        },
      },
      {
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: googleAnalyticTrackingId,
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
        },
      },
      {
        resolve: 'gatsby-plugin-nprogress',
        options: {
          // Setting a color is optional.
          color: 'black',
          // Disable the loading spinner.
          showSpinner: true,
        },
      },
      {
        resolve: 'gatsby-plugin-lunr',
        options: {
          languages: [
            {
              // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
              name: 'en',
              // A function for filtering nodes. () => true by default
              // filterNodes: (node) => node.frontmatter.lang === 'en',
              // Add to index custom entries, that are not actually extracted from gatsby nodes
              // customEntries: [{ title: 'Pictures'
              // , content: 'awesome pictures', url: '/pictures' }],
              plugins: [
                // eslint-disable-next-line no-unused-vars
                (lunr) => (builder) => {
                  // eslint-disable-next-line no-param-reassign
                  builder.metadataWhitelist = ['position'];
                },
              ],
            },
            // {
            //   name: 'fr',
            //   filterNodes: (node) => node.frontmatter.lang === 'fr',
            // },
          ],
          // Fields to index. If store === true value will be stored in index file.
          // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
          fields: [
            {
              name: 'title',
              store: true,
              attributes: { boost: 20 },
            },
            {
              name: 'abstract',
              store: true,
            },
            {
              name: 'content',
              store: true,
            },
            {
              name: 'url',
              store: true,
            },
          ],
          // How to resolve each field's value for a supported node type
          resolvers: {
            // For any node of type Mdx, list how to resolve the fields' values
            Mdx: {
              title: (node) => node.frontmatter.title,
              abstract: (node) => node.frontmatter.abstract,
              content: (node) => node.rawMarkdownBody,
              url: (node) => node.frontmatter.path,
            },
          },
          // custom index file name, default is search_index.json
          filename: 'search_index.json',
          // custom options on fetch api call for search_index.json
          fetchOptions: {
            credentials: 'same-origin',
          },
        },
      },
      {
        resolve: 'gatsby-plugin-build-date',
        options: {
          formatAsDateString: false,
        },
      },
    ],
    siteMetadata: {
      pathPrefix: '/',
      siteUrl: '',
      title: 'Gatsby Theme Academic',
      description: 'Greatest Gatsby Personal Website Template for Academic Usage',
      author,
      authorAlternative: '',
      introduction: [],
      avatar: '',
      professions: [],
      tocMaxDepth: 2,
      excerptMaxLength: 500,
      birthday: '',
      location: '',
      email: '',
      postsForArchivePage: 3,
      defaultLanguage,
      disqusScript: '',
      pages,
      social: [],
      wakatime: {
        username: '',
        activity: '',
        language: '',
        editor: '',
        os: '',
      },
      contactFormUrl: '',
      googleAnalyticTrackingId,
      education: [],
      interests: [],
      experience: [
        {
          title: '',
          position: 'left',
          data: [
            {
              date: '',
              title: '',
              location: '',
              description: '',
            },
          ],
        },
      ],
      awards: [
        {
          date: '',
          title: '',
        },
      ],
      tagColors,
      tags: [
        {
          id: 'default',
          name: 'default',
          description: '',
          color: '#f0da50',
        },
      ],
    },
  };
};
