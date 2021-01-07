module.exports = {

  /* Your site config here */

  siteMetadata: {
    title: `My Life My Voice`,
    description: `Connecting the disables community to Peer Supporters | My Life My Voice`,
    siteUrl: `https://dev-mlmv.netlify.app`, // No trailing slash allowed!
    // defaultImage: "/images/svg/logo-pixl.inline.svg", // Path to your image you placed in the 'static' folder
    defaultImage: "/images/svg/logo-mlmv-manifest.inline.svg", // Path to your image you placed in the 'static' folder

    author: "Peter Koenders - pkoenders@gmail.com",
    year: "2021",
  },
  plugins: [

    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },

    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `97psedqm`,
        dataset: `mlmv-dev`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },



    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // replace "UA-XXXXXXXXX-X" with your own Tracking ID
    //     trackingId: "UA-7623107-7",
    //   },
    // },


    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: .33, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },

    `gatsby-plugin-preload-fonts`,

    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500", "700"],
              fontDisplay: 'swap'
            },
            {
              family: "Noto Serif",
              variants: ["700"],
              fontDisplay: 'swap',
              text: "“ ”"
            },
            {
              family: "Merriweather",
              variants: ["400", "700", "900"],
              fontDisplay: 'swap'
            },
          ],
        },
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    //Yes, we want A11y
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        // Number of milliseconds to wait for component updates to cease before
        // performing an analysis of all the changes. This defaults to 1000ms (1 second).
        debounce: 1000,

        // Integrate react-axe in production. This defaults to false.
        showInProduction: false,

        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.

        },

        // Context to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
        axeContext: undefined,
      },
    },



    //`gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1440,
              quality: 100,
              withWebp: true,
              loading: `lazy`,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {
              background: `#ffffff`,
              zIndex: 100000,
              //container: '.zoom-container',
              // template: {
              //   border: `1px solid #ffffff`,
              // },
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Life My Voice`,
        short_name: `MLMV`,
        start_url: `/`,
        background_color: `#121923`,
        theme_color: `#121923`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/svg/logo-mlmv-manifest.inline.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
        crossOrigin: `anonymous`,
        cache_busting_mode: `none`, // `query`(default), `name`, or `none`
        localize: [
          {
            start_url: `/en`,
            lang: `en`,
            name: `My Life My Voice`,
            short_name: `MLMV`,
          },
          {
            start_url: `/mi`,
            lang: `mi`,
            name: `Taku Ao Taku Reo`,
            short_name: `MLMV`,
          },
        ],
      },
    },




    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,


    //`gatsby-plugin-netlify`,

    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        //transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },


    // `gatsby-plugin-client-side-redirect` // keep it in last in list

  ],
}
