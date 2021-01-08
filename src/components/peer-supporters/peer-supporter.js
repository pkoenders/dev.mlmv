import React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../seo/seo'
import Img from 'gatsby-image'
import BlockContent from "../common/blockContent"
import peerSupporterStyles from './peer-supporter.module.scss'
import prevNextStyles from '../common/prevNext.module.scss'
import IconNext from "../../images/svg/icon-next.inline.svg"
import IconPrev from "../../images/svg/icon-prev.inline.svg"
import IconBack from "../../images/svg/icon-back.inline.svg"

//Collect the required form fields
import formStyles from '../forms/asideForm.module.scss'
import FormName from "../forms/formFields/name"
import FormEmail from "../forms/formFields/email"
import FormContactNum from "../forms/formFields/contactNumber"
import FormMessage from "../forms/formFields/message"
import FormCheckTerms from "../forms/formFields/checkBoxTerms"
import FormSubmit from "../forms/formFields/buttonSubmitDisabled"

import IconGender from '../../images/svg/icon-gender.inline.svg'
import IconLocation from '../../images/svg/icon-location.inline.svg'
//import IconTime from '../../images/svg/icon-time.inline.svg'

const PeerSupporterTemplate = ({ data, pageContext }) => {
  const { t, i18n } = useTranslation()

  const { sanityPeerSupporters } = data
  const peerData = sanityPeerSupporters

  const { sanityPeerSupportersHomepage } = data
  const peerDataHome = sanityPeerSupportersHomepage
  const { next, previous } = pageContext

  const submitUrl = "../../" + i18n.language + "/submit"

  return (
    <>
      <style type="text/css">
        {`
        body  {
         background-color:  #d9e6ec;
        }
      `}
      </style>
      <SEO
        title={peerData.peerSupporterFullName.translate + ' - ' + peerDataHome.peerSupportersTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={peerData.peerShortDescription.translate}
      />
      <section className={prevNextStyles.prevNext + ' section-layout-wide prevNext'}>
        <nav aria-label="Navigate to previous page or next page" role="navigation" >
          <div role="menu">
            <Link
              aria-label={t("common:back")}
              role="menuitem"
              tabIndex="0"
              className={prevNextStyles.prev}
              to={`/${i18n.language}/peer-supporters/`}
            >
              <IconBack aria-hidden="true" />
              <span>{t("common:back")}</span>
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

          <div className={peerSupporterStyles.contentWrapper}>
            <div className={peerSupporterStyles.contentBlock}>
              <BlockContent blocks={peerData.peerLongDescription.localized} />
            </div>

            <div className={peerSupporterStyles.contentComplementary}>

              <div className={peerSupporterStyles.supporterInfo}>
                {peerData.gender.genderTitle &&
                  <span><IconGender aria-hidden="true" />{peerData.gender.genderTitle.translate}</span>
                }
                {peerData.location.location.translate &&
                  <span><IconLocation aria-hidden="true" />{peerData.location.location.translate}</span>
                }
              </div>

              <div className={formStyles.form}>
                <p>{t("peerSupporter:contactFormTitle")} {peerData.peerSupporterFullName.translate.split(' ', 1)[0]}</p>
                <form
                  name="PeerSupporters"
                  method="post"
                  action={`${submitUrl}`}
                  //action="/en/submit"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="PeerSupporters" />
                  <input type="hidden" name="Source" value={`Peer Supporter - ${peerData.peerSupporterFullName.translate}`} />
                  {/* <input type="hidden" name="Email" value={peerData.peerSupporterEmail} /> */}
                  <FormName />
                  <FormEmail />
                  <FormContactNum />
                  <FormMessage />
                  <FormCheckTerms />
                  <FormSubmit />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  )
}

export default PeerSupporterTemplate