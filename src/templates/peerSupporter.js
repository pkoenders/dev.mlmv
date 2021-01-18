import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PeerSupporterPage from "../components/peer-supporters/peer-supporter"

export const query = graphql`
  query($slug: String!, $language: String, $locale: JSON) {

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
      peerSupportersTitle {
        translate(language: $language)
      }
    }

    sanityPeerSupporters(slug: { current: { eq: $slug } }) {
     
      title {
        translate(language: $language)
      }
      shortName {
        translate(language: $language)
      }
      email
      coverImage {
        asset {
            fluid(maxWidth: 600) {
                ...GatsbySanityImageFluid
              }
          }
      }
      publishedAt(formatString: "DD/MM/YYYY")
      gender{
        genderTitle {
          translate(language: $language)
        }
      }
      location {
        location{
          translate(language: $language)
        }
      }
     
      tags{
        tagsTitle{
          translate(language: $language)
        }
      }
      description {
        translate(language: $language)
      }
      longDescription {
        localized(language: $locale)
      }
    }
  }
`
const PeerSupporterTemplate = ({ data, pageContext, location }) => {
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
        <PeerSupporterPage data={data} pageContext={pageContext} location={location} />
      </Layout >
    </>
  )
}
export default PeerSupporterTemplate


