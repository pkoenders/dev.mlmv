import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/common/blockContent"
import IconWave from "../images/svg/icon-wave.inline.svg"
import FormContact from "../components/forms/formContact"

import contactStyles from '../components/forms/contactForm.module.scss'

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
  const { t, i18n } = useTranslation()
  return (
    <>
      <SEO
        title={data.sanityContactContent.contactTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityContactContent.contactDescription.translate}
      />
      <Layout location={location}>
        <div style={{ marginTop: '60px' }} >

          <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <div className={contactStyles.contactFormWrapper}>
              <div className={contactStyles.contactForm}>
                {location.pathname !== "/" + i18n.language
                  ? <h1>{t("contact:title")}</h1>
                  : ''
                }
                <IconWave />
                <BlockContent blocks={data.sanityContactContent.contactContent.localized} />
                <FormContact data={data} language={language} location={location} />
              </div>
            </div>
          </section>
        </div>

      </Layout>
    </>
  )
}

export default ContactPage