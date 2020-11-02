import React from 'react'
import { Link } from "gatsby"
import contactStyles from '../homepage/contact.module.scss'
import IconSuccess from "../../images/svg/icon-contact-success.inline.svg"


const PeerContactFormSucess = () => {

    return (
        <section className={contactStyles.contactFormSectionSuccess + ' section-layout-wide'}>
            <h2>Thanks!</h2>
            <div className={contactStyles.contactSuccessWrapper}>
                <div className={contactStyles.contactSuccess}>
                    <IconSuccess />
                    <p>We have received your message and will reply to you soon.</p>
                </div>
            </div>
            <Link to="/peer-supporters" >Go back to peer supporters</Link>
            <Link to="/" >Go back to the homepage</Link>
        </section>
    )
}

export default PeerContactFormSucess
