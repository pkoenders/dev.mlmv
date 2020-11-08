import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PeerSupporterPage from "../components/peer-supporters/peer-supporter"

export const query = graphql`
  query($slug: String!, $language: String, $locale: JSON) {
    sanityPeerSupporters(slug: { current: { eq: $slug } }) {
     
      peerSupporterFullName {
        translate(language: $language)
      }
      peerSupporterFriendlyName {
        translate(language: $language)
      }
      peerSupporterEmail
      coverImage {
        asset {
            fluid(maxWidth: 600) {
                ...GatsbySanityImageFluid
              }
          }
      }
      publishedAt(formatString: "DD MMMM YYYY")
      gender{
        genderTitle
      }
      location {
        location{
          en
        }
      }
      categories{
        categoriesTitle{
          en
        }
      }
      tags{
        tagsTitle{
          en
        }
      }
      peerShortDescription {
        translate(language: $language)
      }
      peerLongDescription {
        localized(language: $locale)
      }
    }
  }
`
const PeerSupporterTemplate = ({ data, pageContext, location }) => {
  return (
    <>
      <Layout location={location}>
        <PeerSupporterPage data={data} pageContext={pageContext} />
      </Layout >
    </>
  )
}
export default PeerSupporterTemplate


