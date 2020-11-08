import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
                        en
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

const PeerSupportersTemplate = ({ data, pageContext, location }) => {
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
          background-color: #efeff0;
        }
        .section-layout-wide {
          margin-top:60px !important;
        }
      `}
      </style>

      {/* <SEO
        title={'Projects | ' + peerSupportersData.site.siteMetadata.title}
      // description={'MLMV Description.'}
      /> */}

      <Layout location={location}>
        <SectionPeerSupporters data={data} />
      </Layout >
    </>
  )
}

export default PeerSupportersTemplate
