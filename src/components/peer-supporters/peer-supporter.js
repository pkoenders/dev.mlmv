import React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../seo/seo'
import Img from 'gatsby-image'
import BlockContent from '../blockContent'
import peerSupporterStyles from './peer-supporter.module.scss'
import prevNextStyles from '../common/prevNext.module.scss'
import formStyles from '../forms/footer-form.module.scss'
import IconNext from "../../images/svg/icon-next.inline.svg"
import IconPrev from "../../images/svg/icon-prev.inline.svg"
import IconUp from "../../images/svg/icon-up.inline.svg"

const PeerSupporterTemplate = ({ data, pageContext }) => {
  const { t, i18n } = useTranslation()

  const { sanityPeerSupporters } = data
  const peerData = sanityPeerSupporters

  const { sanityPeerSupportersHomepage } = data
  const peerDataHome = sanityPeerSupportersHomepage

  const { next, previous } = pageContext

  const handleInputTerms = event => {
    //console.log("Checkbox change")
    const submitBtn = document.getElementById('submitBtn')
    submitBtn.disabled = !submitBtn.disabled;
  }
  return (
    <>
      <SEO
        title={peerData.peerSupporterFullName.translate + ' - ' + peerDataHome.peerSupportersTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={peerData.peerShortDescription.translate}
      />


      <section className={prevNextStyles.prevNext + ' section-layout-wide projects-nav'}>
        <nav aria-label="Navigate to previous page or next page" role="navigation" >
          <div role="menu">
            <Link
              aria-label={t("peerSupporter:backToPeerSupporters")}
              role="menuitem"
              tabIndex="0"
              className={prevNextStyles.prev}
              to={`/${i18n.language}/peer-supporters/`}
            >
              <IconUp aria-hidden="true" />
              <span>{t("peerSupporter:backToPeerSupporters")}</span>
            </Link>


            <span>{previous &&
              <Link
                aria-label="Link to previous page"
                role="menuitem"
                tabIndex="0"
                className={prevNextStyles.prev}
                to={`/${i18n.language}/peer-supporters/${previous.slug.current}`}
              >
                <IconPrev aria-hidden="true" />
                <span>{t("common:previous")}</span>
              </Link>
            }
              {next &&
                <Link
                  aria-label="Link to next page"
                  role="menuitem"
                  tabIndex="0"
                  className={prevNextStyles.next}
                  to={`/${i18n.language}/peer-supporters/${next.slug.current}`}
                >
                  <span>{t("common:next")}</span>
                  <IconNext aria-hidden="true" />
                </Link>
              }
            </span>
          </div>
        </nav>
      </section>

      <div className={peerSupporterStyles.peerSupporterWrapper}>
        <section className={peerSupporterStyles.header}>
          <div className={peerSupporterStyles.headerWrapper}>

            <div className={peerSupporterStyles.headerTitleWrapper}>
              <div className={peerSupporterStyles.headerTitle}>
                <span><h1>{peerData.peerSupporterFullName.translate}</h1>
                  <div className={peerSupporterStyles.headerProfileImg}>
                    <Img
                      fluid={peerData.coverImage.asset.fluid}
                      loading="lazy"
                    />
                  </div>
                </span>
                <div className={peerSupporterStyles.headerDesciption}>
                  <p>{peerData.peerShortDescription.translate}</p>
                </div>
              </div>

              <div className={peerSupporterStyles.contentTags}>
                <ul>
                  {peerData.tags.map((edge, tagid) => (
                    <li key={tagid}>
                      <span>{edge.tagsTitle.translate}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>



          </div>
        </section>

        <section className={peerSupporterStyles.content}>
          <div className={peerSupporterStyles.contentBlock}>
            <BlockContent blocks={peerData.peerLongDescription.localized} />
          </div>

          <div className={peerSupporterStyles.contentComplementary}>

            <div className={peerSupporterStyles.peerUpdateInfo}>
              {peerData.gender.genderTitle &&
                <p><span>{t("common:gender")}:</span> {peerData.gender.genderTitle}</p>
              }
              {peerData.location.location.translate &&
                <p><span>{t("common:location")}:</span> {peerData.location.location.translate}</p>
              }
              {peerData.publishedAt &&
                <p><span>{t("peerSupporter:updated")}:</span> {peerData.publishedAt}</p>
              }
            </div>
          </div>
        </section>

        <section className={formStyles.form}>
          <div className={formStyles.formWrapper}>
            <h3>{t("supporterFormFields:contact")} {peerData.peerSupporterFullName.translate.split(' ', 1)[0]}</h3>
            <div className={formStyles.contactFormInput}>
              <form
                name="peer-supporter-contact-form"
                method="post"
                action="../peer-contact-success"
                netlify-honeypot="bot-field"
                data-netlify="true"

              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="peer-supporter-contact-form" />
                <input type="hidden" name="message-for" value={peerData.peerSupporterFullName.en} />
                <input type="hidden" name="peer-email" value={peerData.peerSupporterEmail} />
                <p>
                  <label htmlFor="name">
                    <span>{t("supporterFormFields:name")}</span>
                    <input
                      type="text"
                      name="name"
                      placeholder={t("supporterFormFields:namePlaceholder")}
                      id="name"
                      required
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="email">
                    <span>{t("supporterFormFields:email")}</span>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("supporterFormFields:emailPlaceholder")}
                      id="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="contactNumber">
                    <span>{t("supporterFormFields:contactNumber")}</span>
                    <input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                    />
                  </label>
                </p>

                <p>
                  <label htmlFor="subject">
                    <span>{t("supporterFormFields:subject")}</span>
                    <input
                      type="text"
                      name="subject"
                      id="subject" />
                  </label>
                </p>
                <p>
                  <label htmlFor="message">
                    <span>{t("supporterFormFields:message")}</span>
                    <textarea
                      name="message"
                      id="message"
                      rows="5" />
                  </label>
                </p>

                <p className={formStyles.checkbox}>
                  <label htmlFor="terms">
                    <span>I have read, understood and agree to the <Link
                      aria-label="Link to the terms of use"
                      //tabIndex="0"
                      className={formStyles.prev}
                      to={`../../terms-and-use`}
                    >
                      terms and conditions</Link> for My Life My Voice before submitting this form.</span>
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      onChange={handleInputTerms}
                    />
                  </label>
                </p>

                <p>
                  <button
                    type="submit"
                    id="submitBtn"
                    className="buttonSecondary"
                    disabled
                  >
                    Submit form</button>
                </p>
              </form>
            </div>

          </div>
        </section>
      </div >
    </>
  )
}

export default PeerSupporterTemplate