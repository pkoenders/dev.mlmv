import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import NewsEventTemplate from "../components/news-events/newsEvent"

export const query = graphql`
  query($slug: String!, $language: String, $locale: JSON) {

    site {
      siteMetadata {
        title
      }
    }

    sanityNewsEventsHomepage {
      newsEventsHomepageTitle {
        translate(language: $language)
      }
    }

    sanityNewsEvent(slug: { current: { eq: $slug } }) {
     
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
     
      shortDescription {
        translate(language: $language)
      }
      longDescription {
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
          background-color: #0C142A;
        }
      `}
      </style>

      <Layout location={location}>
        <NewsEventTemplate data={data} pageContext={pageContext} />
      </Layout >
    </>
  )
}
export default NewsEvent


