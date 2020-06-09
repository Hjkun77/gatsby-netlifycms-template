module.exports = {
  siteMetadata: {
    // edit below
    title: `Gatsby Netlifycms Template`,
    author: `Harvey Jay Sison`,
    description: `A starter personal blog with styled components, dark mode, and Netlify CMS.`,
    siteUrl: `https://gatsby-netlifycms-template.netlify.com/`,
    social: {
      twitter: `harvey_sison77`,
    },
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Gatsby Netlifycms Template`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // edit below
    //     icon: `src/assets/images/gatsby-icon.png`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        publicPath: `admin`,
        manualInit: true,
        // enableIdentityWidget: false,
        // customizeWebpackConfig: (config, { plugins }) => {
        //   config.plugins.push(
        //     plugins.define({
        //       __MANIFEST_PLUGIN_HAS_LOCALISATION__: JSON.stringify('false'),
        //     }),
        //   );
        // },
      },
    },
    // `gatsby-plugin-feed-mdx`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/assets`,
    //     name: `assets`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [".mdx", ".md"],
    //     gatsbyRemarkPlugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //         options: {
    //           wrapperStyle: `margin-bottom: 1.0725rem`,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-vscode`,
    //       },
    //       {
    //         resolve: `gatsby-remark-copy-linked-files`,
    //       },
    //       {
    //         resolve: `gatsby-remark-smartypants`,
    //       },
    //     ],
    //   },
    // },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    /*{
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: ALLOW_FROM https://www.youtube-nocookie.com',
            'X-XSS-Protection: 1; mode=block',
            'Referrer-Policy: no-referrer',
            'X-Content-Type-Options: nosniff',
          ],
        },
      },
    },*/
    /*{
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          'default-src':
            'self https://www.google-analytics.com https://www.facebook.com https://stats.g.doubleclick.net https://www.youtube.com',
          'object-src': "'self' blob",
          'style-src-elem':
            "'self' 'unsafe-inline' blob: blob https://stats.g.doubleclick.net",
          'media-src': "'self' https://stats.g.doubleclick.net",
          'script-src':
            "'self' 'unsafe-inline' https://connect.facebook.net https://www.google-analytics.com https://stats.g.doubleclick.net https://www.facebook.com",
          'style-src': "'self' 'unsafe-inline' blob blob:",
          'img-src':
            "'self' https://www.google-analytics.com www.google-analytics.com data: https://www.google.com.ph https://www.google.com https://www.facebook.com https://stats.g.doubleclick.net https://www.youtube.com",
          // you can add your directives or override defaults
          'frame-src': "'self' https://www.youtube-nocookie.com",
        },
      },
    },*/
  ],
}
