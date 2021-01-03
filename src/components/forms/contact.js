import React from "react"
//import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import BlockContent from "../blockContent"
import contactStyles from './contact.module.scss'
import IconWave from "../../images/svg/icon-wave.inline.svg"


const ContactForm = ({ data, location, language }) => {
    const { t, i18n } = useTranslation("contact")
    const { sanityContactContent } = data
    const contentData = sanityContactContent

    //const pathArray = location.pathname.split('/')
    // var newPathName = ""
    // for (var i = 2; i < pathArray.length; i++) {
    //     newPathName += "/";
    //     newPathName += pathArray[i];
    // }

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
                                    <span>{t("contact:name")}</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={t("contact:namePlaceholder")}
                                        id="name"
                                        required
                                    />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="email">
                                    <span>{t("contact:email")}</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={t("contact:emailPlaceholder")}
                                        id="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        required
                                    />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="subject">
                                    <span>{t("contact:subject")}</span>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject" />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="message">
                                    <span>{t("contact:message")}</span>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5" />
                                </label>
                            </p>
                            <p>
                                <button
                                    type="submit"
                                    className="buttonSecondary">{t("contact:submit")}</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
