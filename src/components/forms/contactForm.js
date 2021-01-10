import React, { useState } from "react"
//import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import BlockContent from "../common/blockContent"
import IconWave from "../../images/svg/icon-wave.inline.svg"

//Collect the required form fields
import contactStyles from './contactForm.module.scss'
import SubmitThankYou from "./formFields/submitThankYou"
import SubmitError from "./formFields/submitError"
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

    const [errorMessage, setError] = useState(null)
    const [successMessage, setSuccess] = useState(null)


    //const formtUrl = "/" + i18n.language + "/" + location

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/en/contact", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": e.target.getAttribute("name"),
                name: setValue,
            })
        }).then(res => {
            if (res.ok) {
                setSuccess(` `)
                document.querySelector('.inputfields').classList.add('hide')
            }
        }).catch(error =>
            setError(` `)
        )
    }

    const [value, setValue] = useState(null)
    const onChange = e => {
        setValue(e.input.value)
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
                            name="ContactForm"
                            method="post"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="ContactForm" />
                            <input type="hidden" name="source" value="Contact form" />
                            <span className={'inputfields'}>
                                {/* <FormName onChange={onChange} /> */}
                                <label htmlFor="name">
                                    {t("common:inputName")}
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={t("common:inputNamePlaceholder")}
                                        required
                                        onChange={onChange}
                                    />
                                </label>
                                <FormEmail />
                                <FormSubject />
                                <FormMessage />
                                <FormCheckTerms />
                                <FormSubmit />
                            </span>

                            {errorMessage &&
                                <SubmitError />
                            }
                            {successMessage &&
                                <SubmitThankYou />
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
