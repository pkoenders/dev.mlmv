import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import NewsEventTemplate from "../components/news-events/newsEvent"

export const query = graphql`
  query($slug: String!, $language: String, $locale: JSON) {

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
    }

    sanityNewsEvent(slug: { current: { eq: $slug } }) {
     
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
      (formatString: ""
      locale: $language)

    location {
      location {
        translate(language: $language)
      }
    }


      coverImage {
        asset {
          id
            fluid(maxWidth: 545) {
                ...GatsbySanityImageFluid
              }
          }
      }
     
      description {
        translate(language: $language)
      }
      content {
        localized(language: $locale)
      }
    }
  }
`
const NewsEvent = ({ data, pageContext, location }) => {
  return (
    <>

      <style type="text/css">
        {`
        body  {
         background-color:  #ffffff !important;
        }
      `}
      </style>

      <Layout location={location}>
        <NewsEventTemplate data={data} pageContext={pageContext} location={location} />
      </Layout >
    </>
  )
}
export default NewsEvent


