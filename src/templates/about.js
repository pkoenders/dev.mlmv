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

    sanityAboutContent {
      title {
        translate(language: $language)
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

const AboutPage = ({ data, location, language }) => {
  return (
    <>
      <SEO
        title={data.sanityAboutContent.title.translate + ' | ' + data.sanitySiteSettings.title}
        description={data.sanityAboutContent.description.translate}
      />
      <Layout location={location}>
        <DefaultSection>
          <div className={'contentWrapper'}>
            <h1>{data.sanityAboutContent.title.translate}</h1>
            <BlockContent blocks={data.sanityAboutContent.content.localized} />
          </div>
        </DefaultSection>
      </Layout>
    </>
  )
}

export default AboutPage