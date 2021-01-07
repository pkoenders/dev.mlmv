import React from "react"
import { graphql } from "gatsby"
//import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionContactForm from "../components/forms/contactForm"


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
  //const { t, i18n } = useTranslation("contact")
  return (
    <>
      <SEO
        title={data.sanityContactContent.contactTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityContactContent.contactDescription.translate}
      />
      <Layout location={location}>
        <div style={{ marginTop: '60px' }} >
          <SectionContactForm data={data} language={language} location={location} />
        </div>

      </Layout>
    </>
  )
}

export default ContactPage