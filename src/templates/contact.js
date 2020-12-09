import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/blockContent"
import DefaultSection from "../components/defaultSection"
import SectionContact from "../components/forms/contact"


export const query = graphql`
query($language: String, $locale: JSON) {
    site {
      siteMetadata {
        title
      }
    }

    sanityContactContent {
      contactTitle {
        translate(language: $language)
      }
      contactDescription {
        translate(language: $language)
      }
      contactContent {
        localized(language: $locale)
      }
      contactContentActive
    }
}
`

const ContactPage = ({ data, location, language }) => {
  const { t, i18n } = useTranslation("contact")

  return (
    <>
      <SEO
        title={data.sanityContactContent.contactTitle.translate + ' - ' + data.site.siteMetadata.title}
        description={data.sanityContactContent.contactDescription.translate}
      />
      <Layout location={location}>
        <DefaultSection>
          <div className={'contentWrapper'}>
            {/* <BlockContent blocks={data.sanityContactContent.contactContent.localized} /> */}
          </div>
          <SectionContact data={data} language={language} />
        </DefaultSection>

      </Layout>
    </>
  )
}

export default ContactPage