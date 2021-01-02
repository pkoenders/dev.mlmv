import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionNewsEvents from "../components/news-events/newsEvents"



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

    sanityNewsEventsHomepage {
      newsEventsHomepageDescription {
        translate(language: $language)
      }
      newsEventsHomepageTitle {
        translate(language: $language)
      }
    }

    allSanityNewsEvent(sort: {fields: publishedAt, order: DESC}) {
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
          background-color: #c3c8d6;
        }
        .section-layout-wide {
          margin-top:60px;
        }
      `}
      </style>
      <SEO
        title={data.sanityNewsEventsHomepage.newsEventsHomepageTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityNewsEventsHomepage.newsEventsHomepageDescription.translate}
      />
      <Layout location={location}>
        <SectionNewsEvents data={data} language={language} />
      </Layout >
    </>
  )
}

export default PeerSupportersTemplate
