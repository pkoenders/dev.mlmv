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

    allSanityTags(sort: {fields: tagsTitle___en, order: ASC}) {
      edges {
          node {
              tagsTitle {
                  translate(language: $language)
              }
          }
      }
    }

    allSanityPeerSupporters(sort: {order: ASC, fields: order}) {
        edges {
            node {
                order
                active
                email
                slug {
                    current
                }
                title {
                    translate(language: $language)
                }
                shortName {
                    translate(language: $language)
                }

                description {
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
         background-color:  #d9e6ec;
        }
      `}
      </style>
      <SEO
        title={data.sanityPeerSupportersHomepage.peerSupportersTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityPeerSupportersHomepage.peerSupportersDescription.translate}
      />
      <Layout location={location}>
        <SectionPeerSupporters data={data} location={location} language={language} />
      </Layout >
    </>
  )
}

export default PeerSupportersTemplate
