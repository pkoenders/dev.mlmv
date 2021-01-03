import React from "react"
import { graphql } from "gatsby"
//import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/blockContent"
import DefaultSection from "../components/defaultSection"

export const query = graphql`
  query($language: String, $locale: JSON) {

    sanitySiteSettings {
      siteTitle
      siteDescription
      coverImage {
        asset {
          url
        }
      }
    }

    sanityAboutContent {
      aboutTitle {
        translate(language: $language)
      }
      aboutDescription {
        translate(language: $language)
      }
      aboutContent {
        localized(language: $locale)
      }
      aboutContentActive
    }
}
`

const AboutPage = ({ data, location, language }) => {
  //const { t, i18n } = useTranslation("aboutus")

  return (
    <>
      <SEO
        title={data.sanityAboutContent.aboutTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityAboutContent.aboutDescription.translate}
      />
      <Layout location={location}>
        <DefaultSection>
          <div className={'contentWrapper'}>
            <BlockContent blocks={data.sanityAboutContent.aboutContent.localized} />
          </div>
        </DefaultSection>
      </Layout>
    </>
  )
}

export default AboutPage