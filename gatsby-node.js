const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions


  return new Promise((resolve, reject) => {
    graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {posttype: {eq: "project"}}}) {
        edges {
          previous {
            frontmatter {
              slug
              title
              coverimage {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
          }
          next {
            frontmatter {
              title
              slug
              coverimage {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
          }
          node {
            frontmatter {
              category
              date
              intro
              posttype
              slug
              title
              url
              coverimage {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
              addtohomepage
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

      const portfolioItems = results.data.allMarkdownRemark.edges
      portfolioItems.forEach((portfolioItem, index) => {
        const next = index === portfolioItems.length - 1 ? null : portfolioItems[index + 1].node
        const previous = index === 0 ? null : portfolioItems[index - 1].node


        const thisPortfolioItem = portfolioItem

        createPage({
          thisPortfolioItem,
          path: `/projects/${portfolioItem.node.frontmatter.slug}`,

          component: path.resolve(`./src/templates/projectsMD.js`),
          context: {
            slug: portfolioItem.node.frontmatter.slug,
            pathItem: thisPortfolioItem,

            previous,
            next,
          },
        })

      })
    }).then(resolve)
  })
}



// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it


// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const projectsMD = require.resolve(`./src/templates/projectsMD.js`)
//   const projectsNetlifyCMS = require.resolve(`./src/templates/projectsNetlifyCMS.js`)

//   const result = await graphql(`
//       {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] }
//           filter: {frontmatter: {category: {}, posttype: {eq: "project"}}}
//         ) {
//           edges {
//             node {
//               frontmatter {
//                 posttype
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `)

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }


//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     if (node.frontmatter.posttype === 'project') {
//       createPage({
//         path: node.frontmatter.slug,
//         component: projectsMD,
//         context: {
//           // additional data can be passed via context
//           slug: node.frontmatter.slug,
//         },
//       })
//     }
//   })
// }