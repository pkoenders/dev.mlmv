import React from "react"
//import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import BlockContent from "../common/blockContent"
import IconWave from "../../images/svg/icon-wave.inline.svg"

//Collect the required form fields
import contactStyles from './contactForm.module.scss'
// import HoneyPot from "./formFields/honeyPot"
import FormName from "./formFields/name"
import FormEmail from "./formFields/email"
import FormSubject from "./formFields/subject"
import FormMessage from "./formFields/message"
import FormCheckTerms from "./formFields/checkBoxTerms"
import FormSubmit from "./formFields/buttonSubmitDisabled"

const ContactForm = ({ data, location, language }) => {
    const { t, i18n } = useTranslation("contact")
    const { sanityContactContent } = data
    const contentData = sanityContactContent

    return (
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>

            {location.pathname !== "/" + i18n.language
                ? <h1>{t("contact:title")}</h1>
                : ''
            }
            <div className={contactStyles.contactFormWrapper}>

                <div className={contactStyles.contactForm}>
                    <IconWave />
                    <BlockContent blocks={contentData.contactContent.localized} />
                    <div className={contactStyles.contactFormInput}>
                        <form
                            name="enquiry-general"
                            method="POST"
                            action={`/${i18n.language}/submit`}
                            netlify-honeypot="hpfield"
                        // data-netlify="true"
                        >
                            {/* <HoneyPot /> */}
                            <FormName />
                            <FormEmail />
                            <FormSubject />
                            <FormMessage />
                            <FormCheckTerms />
                            <FormSubmit />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
