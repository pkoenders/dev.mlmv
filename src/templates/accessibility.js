import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/common/blockContent"
import DefaultSection from "../components/common/defaultSection"

//Collect the required form fields
import footerStyles from '../components/forms/footerForm.module.scss'
// import HoneyPot from "../components/forms/formFields/honeyPot"
import FormName from "../components/forms/formFields/name"
import FormEmail from "../components/forms/formFields/email"
import FormContactNum from "../components/forms/formFields/contactNumber"
import FormSubject from "../components/forms/formFields/subject"
import FormMessage from "../components/forms/formFields/message"
import FormCheckTerms from "../components/forms/formFields/checkBoxTerms"
import FormSubmit from "../components/forms/formFields/buttonSubmitDisabled"

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
  const { t, i18n } = useTranslation()


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

        <section className={footerStyles.form}>
          <div className={footerStyles.formWrapper}>
            <div>
              <h3>{t("accessibility:formTitle")}</h3>
              <div>
                <form
                  name="enquiry-accessibility"
                  method="POST"
                  action={`/${i18n.language}/submit`}
                  data-netlify="true"
                // netlify-honeypot="hpfield"     
                >
                  {/* <HoneyPot /> */}
                  <input type="hidden" name="form-name" value="enquiry-accessibility" />
                  <input type="hidden" name="Source" value="Accessibility page" />
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