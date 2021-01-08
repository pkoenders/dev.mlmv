import React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../seo/seo'
import Img from 'gatsby-image'
import moment from 'moment'
import 'moment/min/locales'
import BlockContent from "../common/blockContent"

import newsEvents from './newsEvents.module.scss'
import prevNextStyles from '../common/prevNext.module.scss'
// import IconNext from "../../images/svg/icon-next.inline.svg"
// import IconPrev from "../../images/svg/icon-prev.inline.svg"
import IconBack from "../../images/svg/icon-back.inline.svg"
import IconEvent from '../../images/svg/icon-event.inline.svg'
import IconLocation from '../../images/svg/icon-location.inline.svg'
import IconTimeLapse from '../../images/svg/icon-timelapse.inline.svg'

//Collect the required form fields
import formStyles from '../forms/asideForm.module.scss'
// import HoneyPot from "../forms/formFields/honeyPot"
import FormName from "../forms/formFields/name"
import FormEmail from "../forms/formFields/email"
import FormContactNum from "../forms/formFields/contactNumber"
import FormMessage from "../forms/formFields/message"
import FormCheckTerms from "../forms/formFields/checkBoxTerms"
import FormSubmit from "../forms/formFields/buttonSubmitDisabled"


const NewsEventTemplate = ({ data, pageContext }) => {
  const { t, i18n } = useTranslation()
  const translate = i18n.language
  moment.locale(translate)

  const { sanityNewsEvent } = data
  const newsEventData = sanityNewsEvent

  const { sanityNewsEventsHomepage } = data
  const newsEventDataHome = sanityNewsEventsHomepage


  //const submitUrl = "/" + i18n.language + "/thank-you?t=" + Math.floor(Date.now() / 1000)
  const submitUrl = "/" + i18n.language + "/thank-you"


  //const { next, previous } = pageContext
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
        title={newsEventData.newsEventName.translate + ' - ' + newsEventDataHome.newsEventsHomepageTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={newsEventData.shortDescription.translate}
      />
      <section className={prevNextStyles.prevNext + ' section-layout-wide prevNext'}>
        <nav aria-label="Navigate to previous page or next page" role="navigation" >
          <div role="menu">
            <Link
              aria-label={t("common:back")}
              role="menuitem"
              tabIndex="0"
              className={prevNextStyles.prev}
              to={`/${i18n.language}/news-events/`}
            >
              <IconBack aria-hidden="true" />
              <span>{t("common:back")}</span>
            </Link>

          </div>
        </nav>
      </section>

      <div className={newsEvents.wrapper}>
        <section className={newsEvents.header}>
          <div className={newsEvents.headerWrapper}>
            <div className={newsEvents.headerTitleWrapper}>
              <div className={newsEvents.headerTitle}>
                <span>
                  <h1>{newsEventData.newsEventName.translate}</h1>
                  {newsEventData.newsEventType.newsEventTypeTitle === 'News' && newsEventData.publishedAt !== null
                    ? <p>{moment(newsEventData.publishedAt).local(true).format(`ddd DD MMM YYYY - h:mm a`)}</p>
                    : ''
                  }
                </span>
              </div>

              <div className={newsEvents.headerInfo}>

                {newsEventData.newsEventType.newsEventTypeTitle === 'Event'
                  ? <p><IconEvent aria-hidden="true" /><span>{t("common:starts")}: {moment(newsEventData.startTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                  : ''
                }

                {newsEventData.newsEventType.newsEventTypeTitle !== 'News' && newsEventData.endTime !== null
                  ? <p><IconTimeLapse aria-hidden="true" /><span>{t("common:ends")}: {moment(newsEventData.endTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                  : ''
                }

                {newsEventData.location !== null
                  ? <p><IconLocation aria-hidden="true" /><span>{newsEventData.location.location.translate}</span></p>
                  : ''
                }

              </div>
            </div>
          </div>
        </section>

        <section className={newsEvents.content}>
          <div className={newsEvents.contentWrapper}>
            <div className={newsEvents.contentBlock}>
              <BlockContent blocks={newsEventData.longDescription.localized} />
            </div>

            <div className={newsEvents.contentComplementary}>

              {newsEventData.newsEventType.newsEventTypeTitle === 'Event'
                ?
                <div className={formStyles.form}>
                  <p>{t("newsEvents:attendingEvent")}</p>
                  <form
                    name="Events"
                    method="POST"
                    enctype="application/x-www-form-urlencoded"
                    action={submitUrl}
                    data-netlify="true"
                  // netlify-honeypot="hpfield"     
                  >
                    {/* <HoneyPot /> */}
                    <input type="hidden" name="form-name" value="Events" />
                    <input type="hidden" name="Source" value={`Event - ${newsEventData.newsEventName.translate}`} />
                    <FormName />
                    <FormEmail />
                    <FormContactNum />
                    <FormMessage />
                    <FormCheckTerms />
                    <FormSubmit />
                  </form>
                </div>
                : ''
              }

              {newsEventData.coverImage !== null
                ?
                <Img
                  fluid={newsEventData.coverImage.asset.fluid}
                  loading="lazy"
                />
                : ''
              }
            </div>
          </div>
        </section>

      </div>
    </>
  )
}


export default NewsEventTemplate