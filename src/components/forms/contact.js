import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import BlockContent from "../blockContent"
import contactStyles from './contact.module.scss'
import IconWave from "../../images/svg/icon-wave.inline.svg"


const ContactForm = ({ data, location, language }) => {
    //const { t, i18n } = useTranslation("contact")
    const { i18n } = useTranslation("contact")

    const { sanityContactContent } = data
    const contentData = sanityContactContent
    // const allComments = commentsListData.edges

    return (
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <div className={contactStyles.contactFormWrapper}>

                <div className={contactStyles.contactForm}>
                    <IconWave />
                    <BlockContent blocks={contentData.contactContent.localized} />
                    <div className={contactStyles.contactFormInput}>
                        <form
                            name="pkoenders-contact"
                            method="post"
                            action="contact-success"
                            netlify-honeypot="bot-field"
                            data-netlify="true"

                        >
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="pkoenders-contact" />
                            <p>
                                <label htmlFor="name">
                                    <span>Name (required)</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        id="name"
                                        required
                                    />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="email">
                                    <span>Email (required)</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                        id="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        required
                                    />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="subject">
                                    <span>Subject</span>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject" />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="message">
                                    <span>Message</span>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5" />
                                </label>
                            </p>
                            <p>
                                <button
                                    type="submit"
                                    className="buttonSecondary">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
