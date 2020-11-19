import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../seo/seo'
import Img from 'gatsby-image'
import BlockContent from '../blockContent'
import peerSupporterStyles from './peer-supporter.module.scss'
import contactStyles from '../homepage/contact.module.scss'
// import IconOpenExternal from "../../images/svg/icon-open-external.inline.svg"
import IconNext from "../../images/svg/icon-next.inline.svg"
import IconPrev from "../../images/svg/icon-prev.inline.svg"
import IconUp from "../../images/svg/icon-up.inline.svg"

//export default function ProjectTemplate({ data }) {
const PeerSupporterTemplate = ({ data, pageContext }) => {

  const { t, i18n } = useTranslation("peerSupporter")
  const Metadata = useStaticQuery(graphql`
      query peerSupportersData {
        site {
          siteMetadata {
            title
          }
        }
      }
  `)
  // console.log(pageContext)
  const { sanityPeerSupporters } = data // data.markdownRemark holds your post data
  const peerData = sanityPeerSupporters
  //const { next, previous } = data
  const { next, previous } = data
  console.log(peerData.next)
  // const next = peerData.next
  // const previous = peerData.previous

  //const next = pageContext.next
  //const previous = pageContext.previous

  console.log("previous = " + previous)
  console.log("next = " + next)
  return (
    <>
      <style type="text/css">
        {`
        body  {
           //background: rgb(151, 219, 246);
           //background: linear-gradient(180deg, rgba(151, 219, 246, 1) 0%, rgba(135, 200, 226, 1) 67%);
          //background-color: #291361;
          background-color: #ffffff;
         // background-color: #0C142A;
          //background-color: #eeeeee;

          

        }
      `}
      </style>
      <SEO
        title={peerData.peerSupporterFullName.en + ' - Peer Supporter | ' + Metadata.site.siteMetadata.title}
      //description={frontmatter.intro}
      //image={frontmatter.coverimage.childImageSharp.fluid.src}
      />
      <section className={peerSupporterStyles.prevNext + ' section-layout-wide projects-nav'}>
        <nav aria-label="Navigate to previous page or nexxt page" role="menu">
          {previous &&
            <Link
              role="menuitem"
              tabIndex="0"
              className={peerSupporterStyles.prev}
              to={`/${i18n.language}/peer-supporters/${previous.slug.current}`}
            >
              <IconPrev aria-hidden="true" />
              <span>Previous</span>
            </Link>
          }

          <Link
            role="menuitem"
            tabIndex="0"
            className={peerSupporterStyles.prev}
            to={`/${i18n.language}/peer-supporters/`}
          >
            <IconUp aria-hidden="true" />
            <span>{t("peerSupporter:backToPeerSupporters")}</span>
          </Link>

          {next &&
            <Link
              role="menuitem"
              tabIndex="0"
              className={peerSupporterStyles.next}
              to={`/${i18n.language}/peer-supporters/${next.slug.current}`}
            >
              <span>Next</span>
              <IconNext aria-hidden="true" />
            </Link>
          }
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ante est, cursus quis risus at, blandit porttitor est. Suspendisse potenti. </p>
                </div>

              </div>


              {/* <div className={peerSupporterStyles.headerInfo}>
                <p><span>{t("peerSupporter:gender")}:</span>{peerData.gender.genderTitle} (Do we need this field?)</p>
                <p><span>{t("peerSupporter:location")}:</span> {peerData.location.location.translate}</p>
                {peerData.publishedAt &&
                  <p><span>{t("peerSupporter:updated")}:</span>{peerData.publishedAt}</p>
                }
              </div> */}

              <aside className={peerSupporterStyles.contentTags}>
                {/* <p>{peerData.peerSupporterFullName.translate.split(' ', 1)[0]} {t("peerSupporter:canHelpWith")} </p> */}
                <ul>
                  {peerData.tags.map((edge, tagid) => (
                    <li key={tagid}>
                      <span>{edge.tagsTitle.translate}</span>
                    </li>
                  ))}
                </ul>
              </aside>

            </div>



          </div>
        </section>

        <section className={peerSupporterStyles.content}>
          <div className={peerSupporterStyles.contentBlock}>
            <BlockContent blocks={peerData.peerLongDescription.localized} />
            {/* <BlockContent blocks={peerData.peerLongDescription.translate._rawChildren(resolveReferences: {maxDepth: 10}) } /> */}



          </div>

          <aside className={peerSupporterStyles.contentAside}>

            <div className={peerSupporterStyles.peerUpdateInfo}>
              <p><span>{t("peerSupporter:gender")}:</span>{peerData.gender.genderTitle} (Do we need this field?)</p>
              <p><span>{t("peerSupporter:location")}:</span> {peerData.location.location.translate}</p>
              {peerData.publishedAt &&
                <p><span>{t("peerSupporter:updated")}:</span>{peerData.publishedAt}</p>
              }
            </div>

            <p>Some possible aside content here?</p>
            <p>Possibly associations/alignments, links, video or images?</p>

            {/* <p>{peerData.peerSupporterFullName.translate.split(' ', 1)[0]} {t("peerSupporter:canHelpWith")} </p> */}
            {/* <ul>
              {peerData.tags.map((edge, tagid) => (
                <li key={tagid}>
                  <span>{edge.tagsTitle.translate}</span>
                </li>
              ))}
            </ul> */}

          </aside>
        </section>

        <section className={peerSupporterStyles.form}>
          <div className={peerSupporterStyles.formWrapper}>
            <h4>{t("supporterFormFields:contact")} {peerData.peerSupporterFullName.translate.split(' ', 1)[0]}</h4>
            <div className={contactStyles.contactFormInput}>
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
                <p>
                  <button
                    type="submit"
                    className="buttonPrimary">Submit form</button>
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