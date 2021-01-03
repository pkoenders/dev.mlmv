import React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../seo/seo'
import Img from 'gatsby-image'
import moment from 'moment'
import 'moment/min/locales'
import BlockContent from '../blockContent'

import newsEvents from './newsEvents.module.scss'
import prevNextStyles from '../common/prevNext.module.scss'
import itemStyles from '../common/resultItem.module.scss'
// import IconNext from "../../images/svg/icon-next.inline.svg"
// import IconPrev from "../../images/svg/icon-prev.inline.svg"
import IconUp from "../../images/svg/icon-up.inline.svg"
import IconEvent from '../../images/svg/icon-event.inline.svg'
import IconLocation from '../../images/svg/icon-location.inline.svg'
import IconTimeLapse from '../../images/svg/icon-timelapse.inline.svg'


const NewsEventTemplate = ({ data, pageContext }) => {
  //Translations - locale, JSON and moment 
  const { t, i18n } = useTranslation("newsEvents")
  const translate = i18n.language
  moment.locale(translate)

  const { sanityNewsEvent } = data
  const newsEventData = sanityNewsEvent

  const { sanityNewsEventsHomepage } = data
  const newsEventDataHome = sanityNewsEventsHomepage

  //const { next, previous } = pageContext
  return (
    <>
      <SEO
        title={newsEventData.newsEventName.translate + ' - ' + newsEventDataHome.newsEventsHomepageTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={newsEventData.shortDescription.translate}
      />

      <style type="text/css">
        {`
        body  {
          background-color: #ffffff;
        }
      `}
      </style>

      <section className={prevNextStyles.prevNext + ' section-layout-wide projects-nav'}>
        <nav aria-label="Navigate to previous page or next page" role="navigation" >
          <div role="menu">
            <Link
              aria-label={t("newsEvents:backToNewsEvents")}
              role="menuitem"
              tabIndex="0"
              className={prevNextStyles.prev}
              to={`/${i18n.language}/news-events/`}
            >
              <IconUp aria-hidden="true" />
              <span>{t("newsEvents:backToNewsEvents")}</span>
            </Link>

            {/* <span>
              {previous &&
                <Link
                  aria-label="Link to previous page"
                  role="menuitem"
                  tabIndex="0"
                  className={prevNextStyles.prev}
                  to={`/${i18n.language}/news-events/${previous.slug.current}`}
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
                  to={`/${i18n.language}/news-events/${next.slug.current}`}
                >
                  <span>{t("common:next")}</span>
                  <IconNext aria-hidden="true" />
                </Link>
              }
            </span> */}
          </div>
        </nav>
      </section>

      <div className={newsEvents.Wrapper}>
        <section className={itemStyles.header}>
          <div className={itemStyles.headerWrapper}>
            <div className={itemStyles.headerTitleWrapper}>
              <div className={itemStyles.headerTitle}>
                <h1>{newsEventData.newsEventName.translate}</h1>
                {newsEventData.newsEventType.newsEventTypeTitle === 'News' && newsEventData.publishedAt !== null
                  ? <p>{moment(newsEventData.publishedAt).local(true).format(`ddd DD MMM YYYY - h:mm a`)}</p>
                  : ''
                }
              </div>

              <div className={itemStyles.contentTags}>

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
          <div className={newsEvents.contentBlock}>
            <BlockContent blocks={newsEventData.longDescription.localized} />
          </div>

          <div className={newsEvents.contentComplementary}>
            {newsEventData.coverImage !== null
              ?
              <Img
                fluid={newsEventData.coverImage.asset.fluid}
                loading="lazy"
              />
              : ''
            }
          </div>
        </section>

      </div>
    </>
  )
}


export default NewsEventTemplate