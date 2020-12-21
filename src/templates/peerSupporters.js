import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionPeerSupporters from "../components/peer-supporters/peer-supporters"



export const query = graphql`
  query($language: String) {

    sanitySiteSettings {
      siteTitle
      siteDescription
      coverImage {
        asset {
          url
        }
      }
    }

    sanityPeerSupportersHomepage {
      peerSupportersDescription {
        translate(language: $language)
      }
      peerSupportersTitle {
        translate(language: $language)
      }
    }

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
                        fluid(maxWidth: 545) {
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

  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #0B132B;
        }
        .section-layout-wide {
          margin-top:60px;
        }
      `}
      </style>
      <SEO
        title={data.sanityPeerSupportersHomepage.peerSupportersTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityPeerSupportersHomepage.peerSupportersDescription.translate}
      />
      <Layout location={location}>
        <SectionPeerSupporters data={data} language={language} />
      </Layout >
    </>
  )
}

export default PeerSupportersTemplate
