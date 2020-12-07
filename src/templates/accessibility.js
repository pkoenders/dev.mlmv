import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"
import footerForm from '../components/forms/footer-form.module.scss'



const AccessibilityPage = ({ location }) => {
  const { t, i18n } = useTranslation("accessibility")
  //const { i18n } = useTranslation("accessibility")
  const AccessibilityData = useStaticQuery(graphql`
    query AccessibilityPage {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleInputTerms = event => {
    //console.log("Checkbox change")
    const submitBtn = document.getElementById('submitBtn')
    submitBtn.disabled = !submitBtn.disabled;
  }

  return (
    <>
      <SEO
        title={'Accessibility at My Life My Voice - ' + AccessibilityData.site.siteMetadata.title}
        description={'the about page.'}
      />
      <Layout location={location}>
        <DefaultSection>
          <div className={'contentWrapper'}>
            <h1>Digital accessibility</h1>

            <p className={'introParapgraph'}>We want everyone who uses My Life My Voice to feel welcome and find the experience rewarding: this includes our website sites, documents, and resources.</p>

            <p><strong>What we are doing?</strong><br />
               This page was created to collect accessibility information about the My Life My Voice website in one place and provide communication channels for people with disabilities to get help with our website.</p>

            <p>While we strive to make our website as accessible as possible. Our goal is to meet <a href="https://www.w3.org/TR/WCAG21/">WCAG 2.1 AA</a>, with which we are partially compliant. We’ll be the first to admit our websie is a work in progress, and we are open to all feedback to make things better.</p>

            <p>We have implemented keyboard accessibility, compliant colour contrast, landmarks and aria-label where suitable. The website can be zoomed using keyboard commands.</p>

            <p><strong>Browser support</strong><br />
             The My Life My Voice website has been cross-platform and cross-browser tested. It is optimised for modern browsers including Microsoft Internet Explorer 11, Microsoft Edge, Mozilla Firefox, Apple Safari, Google Chrome. Older browsers may offer limited functionality.</p>

            <p>The My Life My Voice website website is responsive, it re-organises itself depending on the screen size and orientation of the device being used to view it. We test the experience on various devices including most popular IOS, Android and MS Windows phones and tablets.</p>

            <p><strong>User feedback</strong><br />
            It is important to us that our users fell included and we welcome your input. To contact us with your accessibility feedback or challenges, we welcome you to reach out to us via email at My Life My Voice: <a href="mailto:accessibility@mlmv.org.nz">accessibility@mlmv.org.nz</a></p>

            <p>Alternatively, you can complete the following form.</p>
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