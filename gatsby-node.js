const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions


  return new Promise((resolve, reject) => {
    graphql(`
    {
      allSanityPeerSupporters(sort: {fields: order, order: ASC}) {
        edges {
          node {
            order
            slug {
              current
            }
            peerSupporterFullName {
              mi
              hi
              en
              sm
            }
            peerSupporterFriendlyName {
              mi
              hi
              en
              sm
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
            }
          }

          next {
            slug {
              current
            }
            peerSupporterFullName {
              en
            }
          }
        }
      }
    }

      `).then(results => {
      console.log(results)
      if (results.error) {
        reject(results.error)
      }

      const peerSupportersItems = results.data.allSanityPeerSupporters.edges
      peerSupportersItems.forEach((peerSupportersItem, index) => {
        const next = index === peerSupportersItems.length - 1 ? null : peerSupportersItems[index + 1].node
        const previous = index === 0 ? null : peerSupportersItems[index - 1].node


        const thisPeerSupportersItem = peerSupportersItem

        createPage({
          thisPeerSupportersItem,
          path: `/peer-supporters/${peerSupportersItem.node.slug.current}`,

          component: path.resolve(`./src/templates/peerSupporter.js`),
          context: {
            slug: peerSupportersItem.node.slug.current,
            pathItem: thisPeerSupportersItem,

            previous,
            next,
          },
        })

      })
    }).then(resolve)
  })
}