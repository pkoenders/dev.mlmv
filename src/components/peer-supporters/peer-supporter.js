import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../seo/seo'
import Img from 'gatsby-image'
import BlockContent from "../common/blockContent"
import peerSupporterStyles from './peer-supporter.module.scss'
import secondaryNav from '../common/secondaryNav.module.scss'


import FormPeerSupporter from "../forms/formPeerSupporter"

const PeerSupporterTemplate = ({ data, pageContext, location }) => {
  const { t, i18n } = useTranslation()
  const { sanityPeerSupporters } = data
  const peerData = sanityPeerSupporters
  const { sanityPeerSupportersHomepage } = data
  const peerDataHome = sanityPeerSupportersHomepage
  const { next, previous } = pageContext

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
        title={peerData.title.translate + ' - ' + peerDataHome.peerSupportersTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={peerData.description.translate}
      />
      <section className={secondaryNav.wrapper + ' section-layout-wide secondaryNav'}>
        <nav aria-label="Navigate to previous page or next page" role="navigation" >
          <div role="menu">
            <Link
              aria-label={t("common:back")}
              role="menuitem"
              tabIndex="0"
              to={`/${i18n.language}/peer-supporters/`}
            >
              <i className={"material-icons"} aria-hidden="true">arrow_back</i>
              {t("common:back")}
            </Link>


            <span className={secondaryNav.alignRight}>
              {previous &&
                <Link
                  aria-label="Link to previous page"
                  role="menuitem"
                  tabIndex="0"
                  to={`/${i18n.language}/peer-supporters/${previous.slug.current}`}
                >
                  <i className={"material-icons"} aria-hidden="true">chevron_left</i>
                  {t("common:previous")}
                </Link>
              }
              {next &&
                <Link
                  aria-label="Link to next page"
                  role="menuitem"
                  tabIndex="0"
                  to={`/${i18n.language}/peer-supporters/${next.slug.current}`}
                >
                  {t("common:next")}
                  <i className={"material-icons"} aria-hidden="true">chevron_right</i>
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
                <span><h1>{peerData.title.translate}</h1>
                  <div className={peerSupporterStyles.headerProfileImg}>
                    <Img
                      fluid={peerData.coverImage.asset.fluid}
                      loading="lazy"
                    />
                  </div>
                </span>
                <div className={peerSupporterStyles.headerDesciption}>
                  <p>{peerData.description.translate}</p>
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
              <BlockContent blocks={peerData.longDescription.localized} />
            </div>

            <div className={peerSupporterStyles.contentComplementary}>

              <div className={peerSupporterStyles.supporterInfo}>
                {peerData.gender.genderTitle &&
                  <span><i className={"material-icons"}>face</i>{peerData.gender.genderTitle.translate}</span>
                }
                {peerData.location.location.translate &&
                  <span><i className={"material-icons"}>location_on</i>{peerData.location.location.translate}</span>
                }
              </div>
              <FormPeerSupporter data={data} location={location} peerEmail={peerData.email} peerName={peerData.title.translate.split(' ', 1)[0]} />
            </div>
          </div>
        </section>
      </div >
    </>
  )
}

export default PeerSupporterTemplate