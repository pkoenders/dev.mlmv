import React, { useState } from "react"
//import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"

//Collect the required form fields
import contactStyles from './asideForm.module.scss'
import InputName from "./formFields/name"
import InputEmail from "./formFields/email"
import InputNumber from "./formFields/contactNumber"
import InputMessage from "./formFields/message"
import SubmitThankYou from "./formFields/submitThankYou"
import SubmitError from "./formFields/submitError"
import FormCheckTerms from "./formFields/checkBoxTerms"
import FormSubmit from "./formFields/buttonSubmitDisabled"

const encode = data => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}


const FormContact = ({ location, peerName }) => {
    const { t } = useTranslation()

    //console.log("peerEmail = " + peerEmail)

    const [inputName, setInputName] = useState(null)
    const [inputEmail, setInputEmail] = useState(null)
    const [inputNumber, setInputNumber] = useState(null)
    const [inputMessage, setInputMessage] = useState(null)
    const [errorMessage, setErrorMsg] = useState(null)
    const [successMessage, setSuccessMsg] = useState(null)

    const onNameChange = e => {
        setInputName(e.target.value)
    }
    const onEmailChange = e => {
        setInputEmail(e.target.value)
    }
    const onNumberChange = e => {
        setInputNumber(e.target.value)
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
                // "emailFor": peerEmail,
                "location": location.pathname,
                name: inputName,
                email: inputEmail,
                number: inputNumber,
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
        <div className={contactStyles.form}>
            <form
                name="PeerSupporters"
                method="post"
                data-netlify="true"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="PeerSupporters" />
                {/* <input type="hidden" name="emailFor" value={peerEmail} /> */}
                <input type="hidden" name="location" value={location.pathname} />
                <span className={'inputfields'}>
                    <p>{t("peerSupporter:contactFormTitle")} {peerName}</p>
                    <InputName inputName={inputName} onNameChange={onNameChange} />
                    <InputEmail inputEmail={inputEmail} onEmailChange={onEmailChange} />
                    <InputNumber inputNumber={inputNumber} onNumberChange={onNumberChange} />
                    <InputMessage inputMessage={inputMessage} onMessageChange={onMessageChange} />
                    <FormCheckTerms />
                    <FormSubmit />
                </span>
                {
                    errorMessage &&
                    <SubmitError />
                }
                {
                    successMessage &&
                    <SubmitThankYou />
                }
            </form>
        </div>
    )
}

export default FormContact
