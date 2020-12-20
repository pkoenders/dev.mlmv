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
import IconNext from "../../images/svg/icon-next.inline.svg"
import IconPrev from "../../images/svg/icon-prev.inline.svg"
import IconUp from "../../images/svg/icon-up.inline.svg"
import IconEvent from '../../images/svg/icon-event.inline.svg'
import IconLocation from '../../images/svg/icon-location.inline.svg'
import IconTime from '../../images/svg/icon-time.inline.svg'
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

  const { next, previous } = pageContext


  return (
    <>
      <SEO
        title={newsEventData.newsEventName.translate + ' - ' + newsEventDataHome.newsEventsHomepageTitle.translate + ' | ' + data.site.siteMetadata.title}
        description={newsEventData.shortDescription.translate}
      />

      <style type="text/css">
        {`
        body  {
          background-color: #ffffff;
        }
      `}
      </style>

      <section className={newsEvents.prevNext + ' section-layout-wide projects-nav'}>
        <nav aria-label="Navigate to previous page or next page" role="navigation" >
          <div role="menu">
            <Link
              aria-label={t("newsEvents:backToNewsEvents")}
              role="menuitem"
              tabIndex="0"
              className={newsEvents}
              to={`/${i18n.language}/news-events/`}
            >
              <IconUp aria-hidden="true" />
              <span>{t("newsEvents:backToNewsEvents")}</span>
            </Link>

            <span>
              {previous &&
                <Link
                  aria-label="Link to previous page"
                  role="menuitem"
                  tabIndex="0"
                  className={newsEvents.prev}
                  to={`/${i18n.language}/news-events/${previous.slug.current}`}
                >
                  <IconPrev aria-hidden="true" />
                  <span>{t("newsEvents:previous")}</span>
                </Link>
              }

              {next &&
                <Link
                  aria-label="Link to next page"
                  role="menuitem"
                  tabIndex="0"
                  className={newsEvents.next}
                  to={`/${i18n.language}/news-events/${next.slug.current}`}
                >
                  <span>{t("newsEvents:next")}</span>
                  <IconNext aria-hidden="true" />
                </Link>
              }
            </span>
          </div>
        </nav>
      </section>

      <div className={newsEvents.Wrapper}>
        <section className={newsEvents.header}>
          <div className={newsEvents.headerWrapper}>

            <div className={newsEvents.headerTitleWrapper}>
              <div className={newsEvents.headerTitle}>
                <h1>{newsEventData.newsEventName.translate}</h1>
                {newsEventData.newsEventType.newsEventTypeTitle === 'News' && newsEventData.publishedAt !== null
                  ? <p>{moment(newsEventData.publishedAt).local(true).format(`ddd DD MMM YYYY - h:mm a`)}</p>
                  : ''
                }
              </div>

              <div className={newsEvents.contentTags}>

                {newsEventData.newsEventType.newsEventTypeTitle === 'Event'
                  ? <p><IconEvent aria-hidden="true" /><span>{t("newsEvents:starts")}: {moment(newsEventData.startTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                  : ''
                }

                {/* {newsEventData.newsEventType.newsEventTypeTitle != 'News' && newsEventData.startTime !== null
                  ? <p><IconTime aria-hidden="true" /><span>Starts: {moment(newsEventData.startTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                  : ''
                } */}

                {newsEventData.newsEventType.newsEventTypeTitle != 'News' && newsEventData.endTime !== null
                  ? <p><IconTimeLapse aria-hidden="true" /><span>{t("newsEvents:ends")}: {moment(newsEventData.endTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                  : ''
                }

                {newsEventData.location !== null
                  ? <p><IconLocation aria-hidden="true" /><span>{t("newsEvents:location")}: {newsEventData.location.location.translate}</span></p>
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

            <p>Some possible aside content here?</p>
            <p>Possibly associations/alignments, links, video or images?</p>
          </div>
        </section>

      </div>
    </>
  )
}

export default NewsEventTemplate