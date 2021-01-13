import React, { useState } from "react"
//import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"

//Collect the required form fields
import contactStyles from './contactForm.module.scss'
import SubmitThankYou from "./formFields/submitThankYou"
import SubmitError from "./formFields/submitError"
import FormCheckTerms from "./formFields/checkBoxTerms"
import FormSubmit from "./formFields/buttonSubmitDisabled"

const encode = data => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}


const FormContact = ({ data, location, language }) => {
    const { t } = useTranslation()

    const [inputName, setInputName] = useState(null)
    const [inputEmail, setInputEmail] = useState(null)
    // const [inputNumber, setInputNumber] = useState(null)
    const [inputSubject, setInputSubject] = useState(null)
    const [inputMessage, setInputMessage] = useState(null)
    const [errorMessage, setErrorMsg] = useState(null)
    const [successMessage, setSuccessMsg] = useState(null)
    const onNameChange = e => {
        setInputName(e.target.value)
    }
    const onEmailChange = e => {
        setInputEmail(e.target.value)
    }
    // const onNumberChange = e => {
    //     setInputNumber(e.target.value)
    // }
    const onSubjectChange = e => {
        setInputSubject(e.target.value)
    }
    const onMessageChange = e => {
        setInputMessage(e.target.value)
    }
    const handleSubmit = (e) => {
        fetch(location.pathname, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": e.target.getAttribute("name"),
                "location": location.pathname,
                name: inputName,
                email: inputEmail,
                subject: inputSubject,
                message: inputMessage
            })
        }).then(res => {
            if (res.ok) {
                setSuccessMsg(` `)
                document.querySelector('.inputfields').classList.add('hide')
            }
        }).catch(error =>
            setErrorMsg(` `)
        )
        e.preventDefault()
    }

    return (
        <div className={contactStyles.contactFormInput}>
            <form
                name="ContactForm"
                method="post"
                data-netlify="true"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="ContactForm" />
                <input type="hidden" name="location" value="Contact form" />
                <span className={'inputfields'}>
                    <label htmlFor="name">
                        {t("common:inputName")}
                        <input
                            type="text"
                            name="name"
                            value={inputName}
                            placeholder={t("common:inputNamePlaceholder")}
                            required
                            onChange={onNameChange}
                        />
                    </label>
                    <label htmlFor="email">
                        {t("common:inputEmail")}
                        <input
                            type="email"
                            name="email"
                            placeholder={t("common:inputEmailPlaceholder")}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            required
                            onChange={onEmailChange}
                        />
                    </label>
                    <label htmlFor="subject">
                        {t("common:inputSubject")}
                        <input
                            type="text"
                            name="subject"
                            onChange={onSubjectChange}
                        />
                    </label>
                    <label htmlFor="message">
                        {t("common:inputMessage")}
                        <textarea
                            name="message"
                            rows="5"
                            onChange={onMessageChange}
                        />
                    </label>
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
    )
}

export default FormContact
