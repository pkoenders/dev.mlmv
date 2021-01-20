import React from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SecondaryNavWrapper from "../components/common/secondaryNavWrapper"
import SecondaryNav from "../components/news-events/secondaryNav"
import NewsEventItem from "../components/news-events/item"
import Error from "../components/news-events/error"

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
      description {
        translate(language: $language)
      }
      content {
        localized(language: $locale)
      }
      location {
        location {
          translate(language: $language)
        }
      }
      type {
        newsEventTypeTitle
      }

      active
      startTime
      endTime
      publishedAt
      expiryDate
     
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
`
const NewsEvent = ({ data, pageContext, location }) => {
  const newsEventData = data.sanityNewsEvent

  const isActive = checkIsCurrent(newsEventData)
  function checkIsCurrent(isCurrent) {
    var currentTime = Date.parse(Date())
    var expiryDate = Date.parse(isCurrent.expiryDate)
    var endTime = Date.parse(isCurrent.endTime)

    if (isCurrent.active === true) {
      if (Number.isNaN(expiryDate) || expiryDate === "" || expiryDate === null) {
        expiryDate = currentTime
      }
      if (Number.isNaN(endTime) || endTime === "" || endTime === null) {
        endTime = currentTime
      }
      if ((currentTime <= expiryDate) && (currentTime <= endTime)) {
        return (true)
      }
    } else {
      return (false)
    }
  }

  return (
    <>
      <Layout location={location}>
        <style type="text/css">
          {`
                body  {
                 background-color: #ffffff !important;
                 }
             `}
        </style>
        <SEO
          title={newsEventData.title.translate + ' - ' + data.sanityNewsEventsHomepage.title.translate + ' | ' + data.sanitySiteSettings.title}
          description={newsEventData.description.translate}
        />
        <SecondaryNavWrapper>
          <SecondaryNav data={data} pageContext={pageContext} />
        </SecondaryNavWrapper>
        {isActive
          ? <>
            <NewsEventItem data={data} location={location} />
          </>
          : <>
            <style type="text/css">
              {`
                body  {
                 background-color: #d9e6ec !important;
                 }
             `}
            </style>
            <Error />
          </>
        }
      </Layout >
    </>
  )
}
export default NewsEvent