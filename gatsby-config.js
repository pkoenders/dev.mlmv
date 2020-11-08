module.exports = {

  /* Your site config here */

  siteMetadata: {
    title: `My Life My Voice`,
    description: `Connecting the disables community to Peer Supporters | My Life My Voice`,
    siteUrl: "https://dev-mlmv.netlify.app", // No trailing slash allowed!
    // defaultImage: "/images/svg/logo-pixl.inline.svg", // Path to your image you placed in the 'static' folder
    defaultImage: "/images/pkoenders.png", // Path to your image you placed in the 'static' folder

    author: "Peter Koenders",
    year: "2020",
  },
  plugins: [

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



    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#99dfbe`,
        // Disable the loading spinner.
        showSpinner: false,
        //parent: '.headerNavWrapper',
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

    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variable: true,
            weights: [`300..700`],
          },
          {
            family: `Roboto Slab`,
            variable: true,
            weights: [`300..700`],
          },
          {
            family: `Spectral`,
            variable: true,
            weights: [`400..700`],
          },

        ],
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

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-md`,
        path: `${__dirname}/src/content/projects-md/`,
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
        background_color: `#253240`,
        theme_color: `#253240`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/svg/logo-mlmv-manifest.inline.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      },
    },

    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,


    `gatsby-plugin-netlify`,
    `gatsby-plugin-client-side-redirect` // keep it in last in list

  ],
}
