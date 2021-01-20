import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/common/blockContent"
import DefaultSection from "../components/common/defaultSection"

export const query = graphql`
  query($language: String, $locale: JSON) {
    
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

    sanityTermsOfUseContent {
      title {
        translate(language: $language)
      }
      description{
        translate(language: $language)
      }
      content {
        localized(language: $locale)
      }
    }
  }
`
const TermsPage = ({ data, location, language }) => {
  return (
    <>
      <SEO
        title={data.sanityTermsOfUseContent.title.translate + ' | ' + data.sanitySiteSettings.title}
        description={data.sanityTermsOfUseContent.description.translate}
      />
      <Layout location={location}>
        <DefaultSection>
          <h1>{data.sanityTermsOfUseContent.title.translate}</h1>
          <BlockContent blocks={data.sanityTermsOfUseContent.content.localized} />
        </DefaultSection>
      </Layout>
    </>
  )
}

export default TermsPage
