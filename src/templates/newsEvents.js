import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionNewsEvents from "../components/news-events/newsEvents"



export const query = graphql`
  query($language: String) {

    site {
      siteMetadata {
        title
      }
    }

    sanityNewsEventsHomepage {
      newsEventsHomepageDescription {
        translate(language: $language)
      }
      newsEventsHomepageTitle {
        translate(language: $language)
      }
    }

    allSanityNewsEvent(sort: {fields: order, order: ASC}) {
        edges {
            node {
                order
                itemActive
                slug {
                    current
                }
                newsEventName {
                    translate(language: $language)
                }
                newsEventType {
                  newsEventTypeTitle
                }

                publishedAt
                  (
                  locale: $language
                  )
                expiryDate
                startTime
                  (
                  locale: $language
                  )

                endTime
                  

                location {
                  location {
                    translate(language: $language)
                  }
                }

                addToHomepage

                shortDescription {
                    translate(language: $language)
                  }

                coverImage {
                    asset {
                      id
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
          //background-color: #0B132B;
        }
        .section-layout-wide {
          margin-top:60px;
        }
      `}
      </style>
      <SEO
        title={data.sanityNewsEventsHomepage.newsEventsHomepageTitle.translate + ' | ' + data.site.siteMetadata.title}
        description={data.sanityNewsEventsHomepage.newsEventsHomepageDescription.translate}
      />
      <Layout location={location}>
        <SectionNewsEvents data={data} language={language} />
      </Layout >
    </>
  )
}

export default PeerSupportersTemplate
