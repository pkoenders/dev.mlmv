import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/common/blockContent"
import DefaultSection from "../components/common/defaultSection"

//Collect the required form fields
import HideBot from "../components/forms/formFields/hideBot"
import FormName from "../components/forms/formFields/name"
import FormEmail from "../components/forms/formFields/email"
import FormContactNum from "../components/forms/formFields/contactNumber"
import FormSubject from "../components/forms/formFields/subject"
import FormMessage from "../components/forms/formFields/message"
import FormCheckTerms from "../components/forms/formFields/checkBoxTerms"
import FormSubmit from "../components/forms/formFields/buttonSubmitDisabled"
import footerForm from '../components/forms/footerForm.module.scss'

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

    sanityAccessibilityContent {
      accessibilityContent {
        localized(language: $locale)
      }
      accessibilityTitle {
        translate(language: $language)
      }
      accessibilityDescription {
        translate(language: $language)
      }
      accessibilityContentActive
    }
}
`

const AccessibilityPage = ({ data, location, language }) => {
  const { t, i18n } = useTranslation("accessibility", "contact")


  return (
    <>
      <SEO
        title={data.sanityAccessibilityContent.accessibilityTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityAccessibilityContent.accessibilityDescription.translate}
      />
      <Layout location={location}>
        <DefaultSection>
          <div className={'contentWrapper'}>
            <BlockContent blocks={data.sanityAccessibilityContent.accessibilityContent.localized} />
          </div>
        </DefaultSection>

        <section className={footerForm.form}>
          <div className={footerForm.formWrapper}>
            <div>
              <h3>{t("accessibility:formTitle")}</h3>
              <div>
                <form
                  name="enquiry-accessibility"
                  method="POST"
                  action={`/${i18n.language}/submit`}
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <HideBot />
                  <FormName />
                  <FormEmail />
                  <FormContactNum />
                  <FormSubject />
                  <FormMessage />
                  <FormCheckTerms />
                  <FormSubmit />
                </form>
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}

export default AccessibilityPage