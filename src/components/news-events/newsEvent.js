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


const NewsEventTemplate = ({ data, location, pageContext }) => {
  const { t, i18n } = useTranslation()
  const translate = i18n.language
  moment.locale(translate)
  const { sanityNewsEvent } = data
  const newsEventData = sanityNewsEvent
  const { sanityNewsEventsHomepage } = data
  const newsEventDataHome = sanityNewsEventsHomepage


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
                  ? <p><i className={"material-icons"} aria-hidden="true">event</i>{t("common:starts")}: {moment(newsEventData.startTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</p>
                  : ''
                }

                {newsEventData.newsEventType.newsEventTypeTitle !== 'News' && newsEventData.endTime !== null
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
              <BlockContent blocks={newsEventData.longDescription.localized} />
            </div>

            <div className={newsEvents.contentComplementary}>

              {newsEventData.newsEventType.newsEventTypeTitle === 'Event'
                ?
                <FormEvent data={data} eventName={newsEventData.newsEventName} location={location} />
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