import React from 'react'
import contactStyles from './contact.module.scss'
import IconSuccess from "../../images/svg/icon-contact-success.inline.svg"


const contactFormSucess = () => {

    return (
        <section className={contactStyles.contactFormSectionSuccess + ' section-layout-wide'}>
            <h2>Thanks!</h2>
            <div className={contactStyles.contactSuccessWrapper}>
                <div className={contactStyles.contactSuccess}>
                    <IconSuccess />
                    <p>We have received your message and will reply to you soon.</p>
                </div>
            </div>
        </section>
    )
}

export default contactFormSucess
