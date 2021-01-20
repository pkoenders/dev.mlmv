import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from '../components/seo/seo'
import SecondaryNavWrapper from "../components/common/secondaryNavWrapper"
import SecondaryNavItem from "../components/peer-supporters/secondaryNavItem"
import PeerSupporterItem from "../components/peer-supporters/item"

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
    
    sanityPeerSupportersHomepage {
      title {
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
const PeerSupporter = ({ data, pageContext, location }) => {
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
          title={data.sanityPeerSupporters.title.translate + ' - ' + data.sanityPeerSupportersHomepage.title.translate + ' | ' + data.sanitySiteSettings.title}
          description={data.sanityPeerSupporters.description.translate}
        />
        <SecondaryNavWrapper>
          <SecondaryNavItem data={data} pageContext={pageContext} />
        </SecondaryNavWrapper>

        <PeerSupporterItem data={data} pageContext={pageContext} location={location} />
      </Layout >
    </>
  )
}
export default PeerSupporter


