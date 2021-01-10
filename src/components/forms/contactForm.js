import React, { useState } from "react"
//import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import BlockContent from "../common/blockContent"
import IconWave from "../../images/svg/icon-wave.inline.svg"

//Collect the required form fields
import contactStyles from './contactForm.module.scss'
import ThankYou from "./formFields/thankYou"
import FormName from "./formFields/name"
import FormEmail from "./formFields/email"
import FormSubject from "./formFields/subject"
import FormMessage from "./formFields/message"
import FormCheckTerms from "./formFields/checkBoxTerms"
import FormSubmit from "./formFields/buttonSubmitDisabled"

const encode = data => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}


const ContactForm = ({ data, location, language }) => {
    const { t, i18n } = useTranslation()
    const { sanityContactContent } = data
    const contentData = sanityContactContent

    //const redirectUrl = "/" + i18n.language + "/thank-you"

    const [errorMessage, setError] = useState(null)
    const [successMessage, setSuccess] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": e.target.getAttribute("name"),
            }),
        }).then(res => {
            if (res.ok) {
                setSuccess(` `)
                const thankYou = document.querySelector('.inputfields').classList.add('hide')
            }

        }).catch(error =>
            setError(` `)
        )
    }


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
                    <div className={contactStyles.contactFormInput}>
                        <form
                            onSubmit={handleSubmit}
                            name="ContactForm"
                            method="POST"
                            data-netlify="true"
                        >
                            <span className={'inputfields'}>
                                <input type="hidden" name="form-name" value="ContactForm" />
                                <input type="hidden" name="source" value="Contact form" />
                                <FormName />
                                <FormEmail />
                                <FormSubject />
                                <FormMessage />
                                <FormCheckTerms />
                                <FormSubmit />
                            </span>

                            {errorMessage &&
                                <span>
                                    <h3>Sorry!</h3>
                                    <p>Looks like there was a problem receiving the form on our end.</p>
                                </span>
                            }
                            {successMessage &&
                                <ThankYou />
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
