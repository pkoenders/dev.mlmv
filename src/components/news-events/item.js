import React from "react"
import { useTranslation } from "react-i18next"
import moment from 'moment'
import 'moment/min/locales'
import BlockContent from "../common/blockContent"

import item from '../common/item.module.scss'
import FormEvent from "../forms/formEvent"

const NewsEventItem = ({ data, location }) => {
  const { t, i18n } = useTranslation()
  const translate = i18n.language
  moment.locale(translate)
  const { sanityNewsEvent } = data
  const newsEventData = sanityNewsEvent

  return (
    <>
      <div className={item.wrapper}>
        <div className={item.header}>
          <div className={item.headerWrapper}>
            <div className={item.headerTitle}>
              <span>
                <h1>{newsEventData.title.translate}</h1>
              </span>
              {newsEventData.type.newsEventTypeTitle === 'News' && newsEventData.publishedAt !== null
                ? <p>{moment(newsEventData.publishedAt).local(true).format(`ddd DD MMM YYYY - h:mm a`)}</p>
                : ''
              }
            </div>
            <div className={item.headerInfo}>

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

        <div className={item.content}>
          <div className={item.contentWrapper}>
            <div className={item.contentBlock}>
              <BlockContent blocks={newsEventData.content.localized} />
            </div>

            <div className={item.contentComplementary}>

              {newsEventData.type.newsEventTypeTitle === 'Event'
                ?
                <FormEvent data={data} eventName={newsEventData.title} location={location} />
                : ''
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewsEventItem