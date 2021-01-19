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

    sanityContactContent {
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

const ContactPage = ({ data, location, language }) => {
  const { i18n } = useTranslation()
  return (
    <>
      <SEO
        title={data.sanityContactContent.title.translate + ' | ' + data.sanitySiteSettings.title}
        description={data.sanityContactContent.description.translate}
      />
      <Layout location={location}>
        <div style={{ marginTop: '60px' }} >

          <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <div className={contactStyles.contactFormWrapper}>
              <div className={contactStyles.contactForm}>
                {location.pathname !== "/" + i18n.language
                  ? <h1>{data.sanityContactContent.title.translate}</h1>
                  : ''
                }
                <IconWave />
                <BlockContent blocks={data.sanityContactContent.content.localized} />
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