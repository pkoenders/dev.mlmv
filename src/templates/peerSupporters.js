import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionPeerSupporters from "../components/peer-supporters/peer-supporters"



export const query = graphql`
  query($language: String) {
    allSanityPeerSupporters(sort: {fields: order, order: ASC}) {
        edges {
            node {
                order
                peerSupporterActive
                peerSupporterEmail
                slug {
                    current
                }
                peerSupporterFullName {
                    translate(language: $language)
                }
                peerSupporterFriendlyName {
                    translate(language: $language)
                }

                peerShortDescription {
                    translate(language: $language)
                  }

                tags {

                    tagsTitle {
                      translate(language: $language)
                    }
                }


                coverImage {
                    asset {
                        fluid(maxWidth: 600) {
                            ...GatsbySanityImageFluid
                          }
                    }
                }
            }
        }
    }
}
`

const PeerSupportersTemplate = ({ data, pageContext, location, language }) => {
  // const peerSupportersData = useStaticQuery(graphql`
  //   query peerSupportersData {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <style type="text/css">
        {`
        body  {
          background: rgb(151, 219, 246);
          background: linear-gradient(180deg, rgba(151, 219, 246, 1) 0%, rgba(135, 200, 226, 1) 67%);
          background: #eaeef1;
          background-color: #1e0e48;
          ;
        }
        .section-layout-wide {
          margin-top:60px;
        }
      `}
      </style>

      {/* <SEO
        title={'Projects | ' + peerSupportersData.site.siteMetadata.title}
      // description={'MLMV Description.'}
      /> */}

      <Layout location={location}>
        <SectionPeerSupporters data={data} language={language} />
      </Layout >
    </>
  )
}

export default PeerSupportersTemplate
