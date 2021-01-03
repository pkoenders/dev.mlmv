import React from "react"
import { Link, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/blockContent"
import DefaultSection from "../components/defaultSection"
import footerForm from '../components/forms/footer-form.module.scss'

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
  const { t } = useTranslation("accessibility")
  const handleInputTerms = () => {
    const submitBtn = document.getElementById('submitBtn')
    submitBtn.disabled = !submitBtn.disabled;
  }

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
            <h3>Contact us about accessibility</h3>
            <div className={footerForm.contactFormInput}>
              <form
                name="peer-supporter-contact-form"
                method="post"
                action="../peer-contact-success"
                netlify-honeypot="bot-field"
                data-netlify="true"

              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="accessibility-form" />
                <p>
                  <label htmlFor="name">
                    <span>{t("supporterFormFields:name")}</span>
                    <input
                      type="text"
                      name="name"
                      placeholder={t("supporterFormFields:namePlaceholder")}
                      id="name"
                      required
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="email">
                    <span>{t("supporterFormFields:email")}</span>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("supporterFormFields:emailPlaceholder")}
                      id="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="contactNumber">
                    <span>{t("supporterFormFields:contactNumber")}</span>
                    <input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                    />
                  </label>
                </p>

                <p>
                  <label htmlFor="subject">
                    <span>{t("supporterFormFields:subject")}</span>
                    <input
                      type="text"
                      name="subject"
                      id="subject" />
                  </label>
                </p>
                <p>
                  <label htmlFor="message">
                    <span>{t("supporterFormFields:message")}</span>
                    <textarea
                      name="message"
                      id="message"
                      rows="5" />
                  </label>
                </p>

                <p className={footerForm.checkbox}>
                  <label htmlFor="terms">
                    <span>I have read, understood and agree to the <Link
                      aria-label="Link to the terms of use"
                      //tabIndex="0"
                      className={footerForm.prev}
                      to={`../../terms-and-use`}
                    >
                      Privacy &amp; Legal policies.</Link> for My Life My Voice before submitting this form.</span>
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      onChange={handleInputTerms}
                    />
                  </label>
                </p>

                <p>
                  <button
                    type="submit"
                    id="submitBtn"
                    className="buttonSecondary"
                    disabled
                  >
                    Submit form</button>
                </p>
              </form>
            </div>

          </div>
        </section>

      </Layout>
    </>
  )
}

export default AccessibilityPage