import React, { useState } from "react"
//Collect the required form fields
import contactStyles from './contactForm.module.scss'
import InputName from "./formFields/name"
import InputEmail from "./formFields/email"
import InputSubject from "./formFields/subject"
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


const FormContact = ({ location }) => {

    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputSubject, setInputSubject] = useState('')
    const [inputMessage, setInputMessage] = useState('')
    const [errorMessage, setErrorMsg] = useState('')
    const [successMessage, setSuccessMsg] = useState('')

    const onNameChange = e => {
        setInputName(e.target.value)
    }
    const onEmailChange = e => {
        setInputEmail(e.target.value)
    }
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
                //"location": location.pathname,
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
                <input type="hidden" name="location" value={location.pathname} />
                <span className={'inputfields'}>
                    <InputName inputName={inputName} onNameChange={onNameChange} />
                    <InputEmail inputEmail={inputEmail} onEmailChange={onEmailChange} />
                    <InputSubject inputSubject={inputSubject} onSubjectChange={onSubjectChange} />
                    <InputMessage inputMessage={inputMessage} onMessageChange={onMessageChange} />
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
