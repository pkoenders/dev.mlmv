import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import NewsEventList from "../components/news-events/list"

export const query = graphql`
  query($language: String) {

    sanitySiteSettings {
      title
      description{
        translate(language: $language)
      }
      coverImage {
        asset {
          url
        }
      }
    }

    sanityNewsEventsHomepage {
      title {
        translate(language: $language)
      }
      description {
        translate(language: $language)
      }
    }

    allSanityNewsEvent(sort: {fields: publishedAt, order: DESC}) {
        edges {
            node {
                order
                active
                slug {
                    current
                }
                title {
                    translate(language: $language)
                }
                type {
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

                description {
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

const NewsEvents = ({ data, pageContext, location, language }) => {

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
        title={data.sanityNewsEventsHomepage.title.translate + ' | ' + data.sanitySiteSettings.title}
        description={data.sanityNewsEventsHomepage.description.translate}
      />
      <Layout location={location}>
        <NewsEventList data={data} language={language} />
      </Layout >
    </>
  )
}

export default NewsEvents
