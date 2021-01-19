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
import secondaryNav from '../common/secondaryNav.module.scss'

import FormEvent from "../forms/formEvent"

import Emoji from "../../images/svg/emoji-rolling-eyes.inline.svg"

//import { func } from "prop-types"


const NewsEventTemplate = ({ data, location, pageContext }) => {
  const { t, i18n } = useTranslation()
  const translate = i18n.language
  moment.locale(translate)
  const { sanityNewsEvent } = data
  const newsEventData = sanityNewsEvent

  const { sanityNewsEventsHomepage } = data
  const newsEventDataHome = sanityNewsEventsHomepage

  const { next, previous } = pageContext



  var currentItem = checkNextPrevIsCurrent(newsEventData)
  //console.log("currentItem = " + currentItem)

  function checkNextPrevIsCurrent(NextPrev) {

    var expiryDate = NextPrev.expiryDate
    var expiryDateParsed = Date.parse(expiryDate)
    //console.log("expiryDateParsed P1 = " + expiryDateParsed)

    var endTime = NextPrev.endTime
    var endTimeParsed = Date.parse(endTime)
    //console.log("endTimeParsed P1 = " + endTimeParsed)

    var currentTime = Date()
    var currentTimeParsed = Date.parse(currentTime)

    if (Number.isNaN(expiryDateParsed) || expiryDateParsed === "" || expiryDateParsed === null) {
      expiryDateParsed = currentTimeParsed
    }
    //console.log("expiryDateParsed = " + expiryDateParsed)

    if (Number.isNaN(endTimeParsed) || endTimeParsed === "" || endTimeParsed === null) {
      endTimeParsed = currentTimeParsed
    }
    //console.log("endTimeParsed = " + endTimeParsed)

    if ((NextPrev.active === false) || (expiryDateParsed < currentTimeParsed) || (endTimeParsed < currentTimeParsed)) {
      return (false)
    }

    if ((NextPrev.active === true) || (expiryDateParsed >= currentTimeParsed) || (endTimeParsed >= currentTimeParsed)) {
      return (true)
    }
  }

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
        title={newsEventData.title.translate + ' - ' + newsEventDataHome.title.translate + ' | ' + data.sanitySiteSettings.title}
        description={newsEventData.description.translate}
      />

      <section className={secondaryNav.wrapper + ' section-layout-wide secondaryNav'}>
        <nav aria-label="Navigate to previous page or next page" role="navigation" >
          <div role="menu">
            <Link
              aria-label={t("common:back")}
              role="menuitem"
              tabIndex="0"
              to={`/${i18n.language}/news-events/`}
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
                  to={`/${i18n.language}/news-events/${previous.slug.current}`}
                >
                  <i className={"material-icons left"} aria-hidden="true">chevron_left</i>
                  {t("common:previous")}
                </Link>
              }

              {next &&
                <Link
                  aria-label="Link to next page"
                  role="menuitem"
                  tabIndex="0"
                  to={`/${i18n.language}/news-events/${next.slug.current}`}
                >
                  {t("common:next")}
                  <i className={"material-icons"} aria-hidden="true">chevron_right</i>
                </Link>
              }
            </span>
          </div>
        </nav>
      </section>



      <div className={newsEvents.wrapper}>
        {currentItem === true
          ? ''
          :
          <div className={newsEvents.notCurrent}>
            <span>
              <p>{t("newsEvents:errorTitle")}</p>
              <Emoji />
              <p>{t("newsEvents:errorPara")}</p>
              <Link to={`/${i18n.language}/news-events`} className={'buttonSecondary'} >{t("newsEvents:errorCta")}</Link>
            </span>
          </div>
        }
        <section className={newsEvents.header}>
          <div className={newsEvents.headerWrapper}>
            <div className={newsEvents.headerTitleWrapper}>
              <div className={newsEvents.headerTitle}>
                <span>

                  <h1>{newsEventData.title.translate}</h1>
                  {newsEventData.type.newsEventTypeTitle === 'News' && newsEventData.publishedAt !== null
                    ? <p>{moment(newsEventData.publishedAt).local(true).format(`ddd DD MMM YYYY - h:mm a`)}</p>
                    : ''
                  }
                </span>
              </div>

              <div className={newsEvents.headerInfo}>

                {newsEventData.type.newsEventTypeTitle === 'Event'
                  ? <p><i className={"material-icons"} aria-hidden="true">event</i>{t("common:starts")}: {moment(newsEventData.startTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</p>
                  : ''
                }

                {newsEventData.type.newsEventTypeTitle !== 'News' && newsEventData.endTime !== null
                  ? <p><i className={"material-icons"} aria-hidden="true">timelapse</i>{t("common:ends")}: {moment(newsEventData.endTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</p>
                  : ''
                }

                {newsEventData.location !== null
                  ? <p><i className={"material-icons"} aria-hidden="true">location_on</i>{newsEventData.location.location.translate}</p>
                  : ''
                }

              </div>
            </div>
          </div>
        </section>

        <section className={newsEvents.content}>
          <div className={newsEvents.contentWrapper}>
            <div className={newsEvents.contentBlock}>
              <BlockContent blocks={newsEventData.content.localized} />
            </div>

            <div className={newsEvents.contentComplementary}>

              {newsEventData.type.newsEventTypeTitle === 'Event'
                ?
                <FormEvent data={data} eventName={newsEventData.title} location={location} />
                : ''
              }

              {newsEventData.coverImage.asset !== null
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