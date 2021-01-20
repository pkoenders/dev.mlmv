import React from "react"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import moment from 'moment'
import 'moment/min/locales'
import BlockContent from "../common/blockContent"

import newsEvents from './newsEvents.module.scss'
import FormEvent from "../forms/formEvent"

const NewsEventItem = ({ data, location }) => {
  const { t, i18n } = useTranslation()
  const translate = i18n.language
  moment.locale(translate)
  const { sanityNewsEvent } = data
  const newsEventData = sanityNewsEvent

  return (
    <>
      <div className={newsEvents.wrapper}>
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
export default NewsEventItem