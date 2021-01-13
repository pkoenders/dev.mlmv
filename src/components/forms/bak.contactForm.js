import React, { useState } from "react"
//import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import BlockContent from "../common/blockContent"
import IconWave from "../../images/svg/icon-wave.inline.svg"

//Collect the required form fields
import contactStyles from './contactForm.module.scss'
import FormFieldsContact from './formFields/formContact'


const ContactForm = ({ data, location, language }) => {

    const { t, i18n } = useTranslation()
    const { sanityContactContent } = data
    const contentData = sanityContactContent



    return (
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <div className={contactStyles.contactFormWrapper}>
                <div className={contactStyles.contactForm}>
                    {location.pathname !== "/" + i18n.language
                        ? <h1>{t("contact:title")}</h1>
                        : ''
                    }
                    <IconWave />
                    <BlockContent blocks={contentData.contactContent.localized} />
                    <FormFieldsContact data={data} language={language} location={location} />

                </div>
            </div>
        </section>
    )
}

export default ContactForm
