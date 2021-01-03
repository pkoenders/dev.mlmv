const fs = require("fs")
const path = require('path')
const i18next = require("i18next")
// const { createFilePath } = require(`gatsby-source-filesystem`)
const nodeFsBackend = require("i18next-fs-backend")

const allLanguages = ["en", "mi"]

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const srcPath = resolveApp("src")

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {

  // Index Page
  const indexTemplate = path.resolve(`src/templates/index.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: "/" + language,
      path: `/${language}`,
      component: indexTemplate,
      context: {},
    }),
    ["common", "index", "contact"],
    createPage
  )

  // Peer Supporters Page
  const peerSupportersTemplate = path.resolve(`src/templates/peerSupporters.js`)
  const peerSupporters = await graphql(`
    {
      allSanityPeerSupporters(sort: {fields: order, order: ASC}) {
        edges {
          node {
            order
            slug {
              current
            }

            
            peerSupporterFullName {
              en
              mi
              sm
              hi
            }
            peerSupporterFriendlyName {
              en
              mi
              sm
              hi
            }
            peerShortDescription {
              en
              mi
              sm
              hi
            }

            peerLongDescription {
              en {
                _rawChildren
              }
              mi {
                _rawChildren
              }
              sm {
                _rawChildren
              }
              hi {
                _rawChildren
              }
            }
            
            coverImage {
              asset {
                fluid {
                  src
                }
              }
            }

            tags {
              tagsTitle {
                en
                mi
                sm
                hi
              }
            }
          }

          previous {
            slug{
              current
            }
            peerSupporterFullName {
              en
              mi
              sm
              hi
            }
          }
          next {
            slug {
              current
            }
            peerSupporterFullName {
              en
              mi
              sm
              hi
            }
          }
        }
      }
    }
  `)

  await buildI18nPages(
    peerSupporters.data.allSanityPeerSupporters.edges,


    ({ node }, language, i18n) => ({
      path: "/" + language, // (1)
      path: `/${language}/peer-supporters`,
      component: peerSupportersTemplate,

      context: {
        peerSupporters: node.id,
        tags: node.tags.tagsTitle,

        // previous: previous.slug.current,
        // next: next.slug.current,
      },
    }),
    ["common", "tags", "previous", "next", "peerSupporters"],
    createPage
  )

  //Peer Supporter Pages (Templates)
  const peerSupporterTemplate = path.resolve(`./src/templates/peerSupporter.js`)
  const peerSupporter = await graphql(`
    {
      allSanityPeerSupporters(sort: {fields: order, order: ASC}) {
        edges {
          node {
            order
            slug {
              current
            }


            peerSupporterFullName {
              en
              mi
              sm
              hi
            }
            peerSupporterFriendlyName {
              en
              mi
              sm
              hi
            }
            peerShortDescription {
              en
              mi
              sm
              hi
            }

            peerLongDescription {
              en {
                _rawChildren
              }
              mi {
                _rawChildren
              }
              sm {
                _rawChildren
              }
              hi {
                _rawChildren
              }
            }
            
            coverImage {
              asset {
                fluid {
                  src
                }
              }
            }
          }

          previous {
            slug{
              current
            }
            peerSupporterFullName {
              en
              mi
              sm
              hi
            }
          }
          next {
            slug {
              current
            }
            peerSupporterFullName {
              en
              mi
              sm
              hi
            }
          }
        }
      }
    }
  `)

  await buildI18nPages(
    peerSupporter.data.allSanityPeerSupporters.edges,

    ({ node, previous, next }, language, i18n) => ({
      path: `/${language}/peer-supporters/${node.slug.current}`,
      component: peerSupporterTemplate,

      context: {
        peerSupporter: node.id,
        slug: node.slug.current,
        previous,
        next
      },
    }),
    ["common", "slug", "previous", "next", "peerSupporter", "supporterFormFields"],
    createPage
  )


  // Support services Page
  const supportServicesTemplate = path.resolve(`src/templates/supportServices.js`)
  const supportServices = await graphql(`
    {
      allSanitySupportServices(sort: {fields: order, order: ASC}) {
        edges {
          node {
            order
            url
            telephone
            email
            active
            title {
              en
              mi
              sm
              hi
            }
            description {
              en
              mi
              sm
              hi
            }
            tags {
              tagsTitle {
                en
                mi
                sm
                hi
              }
            }
          }
        }
      }
    }
  `)

  await buildI18nPages(
    supportServices.data.allSanitySupportServices.edges,

    ({ node }, language, i18n) => ({
      path: "/" + language, // (1)
      path: `/${language}/support-services`,
      component: supportServicesTemplate,

      context: {
        peerSupporters: node.id,
        tags: node.tags.tagsTitle,
      },
    }),
    ["common", "tags", "supportServices"],
    createPage
  )


  // News and events (List)
  const newsEventsTemplate = path.resolve(`src/templates/newsEvents.js`)
  const newsEvents = await graphql(`
    {
      allSanityNewsEvent(sort: {fields: order, order: ASC}) {
        edges {
          node {
            order
            slug {
              current
            }
          
            newsEventName {
              en
              mi
              sm
              hi
            }
            newsEventType {
              newsEventTypeTitle
            }

            addToHomepage
            itemActive
            publishedAt
            expiryDate

            shortDescription {
              en
              mi
              sm
              hi
            }

            longDescription {
              en {
                _rawChildren
              }
              mi {
                _rawChildren
              }
              sm {
                _rawChildren
              }
              hi {
                _rawChildren
              }
            }
            
            coverImage {
              asset {
                id
                fluid {
                  src
                }
              }
            }

          }

          previous {
            slug{
              current
            }
            newsEventName {
              en
              mi
              sm
              hi
            }
          }
          next {
            slug {
              current
            }
            newsEventName {
              en
              mi
              sm
              hi
            }
          }
        }
      }
    }
  `)

  await buildI18nPages(
    newsEvents.data.allSanityNewsEvent.edges,
    ({ node }, language, i18n) => ({
      path: "/" + language, // (1)
      path: `/${language}/news-events`,
      component: newsEventsTemplate,
      context: {
        newsEvents: node.id,
      },
    }),

    ["common", "newsEvents"],
    createPage
  )

  // News Events Page (Templates)
  const newsEventTemplate = path.resolve(`./src/templates/newsEvent.js`)
  const newsEvent = await graphql(`
    {
      allSanityNewsEvent(sort: {fields: order, order: ASC}) {
        edges {
          node {
            order
            slug {
              current
            }
          
            newsEventName {
              en
              mi
              sm
              hi
            }
            newsEventType {
              newsEventTypeTitle
            }

            addToHomepage
            itemActive
            publishedAt
            expiryDate

            shortDescription {
              en
              mi
              sm
              hi
            }

            longDescription {
              en {
                _rawChildren
              }
              mi {
                _rawChildren
              }
              sm {
                _rawChildren
              }
              hi {
                _rawChildren
              }
            }
            
            coverImage {
              asset {
                id
                fluid {
                  src
                }
              }
            }

          }

          previous {
            slug{
              current
            }
            newsEventName {
              en
              mi
              sm
              hi
            }
          }
          next {
            slug {
              current
            }
            newsEventName {
              en
              mi
              sm
              hi
            }
          }
        }
      }
    }
  `)
  await buildI18nPages(
    newsEvent.data.allSanityNewsEvent.edges,

    ({ node, next, previous }, language, i18n) => ({
      path: `/${language}/news-events/${node.slug.current}`,
      component: newsEventTemplate,

      context: {
        newsEvent: node.id,
        slug: node.slug.current,
        itemActive: node.itemActive,
        previous,
        next
      },
    }),
    ["common", "slug", "newsEvents", "previous", "next"],
    createPage,
    console.log("Create a news and event page")
  )



  // Contact page
  const contactTemplate = path.resolve(`src/templates/contact.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/contact`,
      component: contactTemplate,
      context: {},
    }),
    ["common", "contact"],
    createPage
  )

  // About page
  const aboutTemplate = path.resolve(`src/templates/about.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/about`,
      component: aboutTemplate,
      context: {},
    }),
    ["common", "about"],
    createPage
  )

  // Accessibility page
  const accessibilityTemplate = path.resolve(`src/templates/accessibility.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/accessibility`,
      component: accessibilityTemplate,
      context: {},
    }),
    ["common", "accessibility"],
    createPage
  )

  // Terms-and-use page
  const termsTemplate = path.resolve(`src/templates/terms-and-use.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/terms-and-use`,
      component: termsTemplate,
      context: {},
    }),
    ["common", "terms"],
    createPage
  )

  await build404Pages(createPage)

  createRedirect({ fromPath: "/", toPath: "/en", isPermanent: true })

  allLanguages.forEach(language =>
    createRedirect({
      fromPath: `/${language}/*`,
      toPath: `/${language}/404`,
      statusCode: 404,
    })
  )
  createRedirect({ fromPath: "/*", toPath: "/404", statusCode: 404 })
}

/// 

const buildI18nPages = async (
  inputData,
  pageDefinitionCallback,
  namespaces,
  createPage
) => {
  if (!Array.isArray(inputData)) inputData = [inputData]
  await Promise.all(
    inputData.map(async ipt => {
      const definitions = await Promise.all(
        allLanguages.map(async language => {
          const i18n = await createI18nextInstance(language, namespaces) // (1)
          const res = pageDefinitionCallback(ipt, language, i18n) // (2)
          res.context.language = language
          res.context.i18nResources = i18n.services.resourceStore.data // (3)
          return res
        })
      )

      const alternateLinks = definitions.map(d => ({
        // (4)
        language: d.context.language,
        path: d.path,
      }))

      definitions.forEach(d => {
        d.context.alternateLinks = alternateLinks
        createPage(d) // (5)
      })
    })
  )
}

const createI18nextInstance = async (language, namespaces) => {
  const i18n = i18next.createInstance()
  i18n.use(nodeFsBackend)
  await new Promise(resolve =>
    i18n.init(
      {
        lng: language,
        ns: namespaces,
        fallbackLng: language,
        interpolation: { escapeValue: false },
        backend: { loadPath: `${srcPath}/locales/{{lng}}/{{ns}}.json` },
      },
      resolve
    )
  )
  return i18n
}

const build404Pages = async createPage => {
  const errorTemplate = path.resolve(`src/templates/404.js`)
  await Promise.all(
    allLanguages.map(async (language, index) => {
      const i18n = await createI18nextInstance(language, ["common", 404])
      const res = {
        path: "/" + language + "/404",
        component: errorTemplate,
        context: {},
      }
      res.context.language = language
      res.context.i18nResources = i18n.services.resourceStore.data
      createPage(res)
      if (index === 0) {
        res.path = "/404"
        createPage(res)
      }
    })
  )
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    SanityLocaleString: {
      translate: {
        type: `String!`,
        args: { language: { type: "String" } },
        resolve: (source, args) => {
          return source[args.language] || source["en"]
        },
      },
    },

    SanityLocaleText: {
      translate: {
        type: `String!`,
        args: { language: { type: "String" } },
        resolve: (source, args) => {
          return source[args.language] || source["en"]
        },
      },
    },

    SanityLocaleBlockContent: {
      localized: {
        type: `JSON`,
        args: { language: { type: "JSON" } },
        resolve: (source, args, context) => {
          return source[context.language || args.language] || source["en"]
        },
      },
    },

  })
}