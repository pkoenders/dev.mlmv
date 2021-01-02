import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import moment from 'moment'
import 'moment/min/locales'
import newsEventsResults from './newsEventsResults.module.scss'
import IconEvent from '../../images/svg/icon-event.inline.svg'
import IconLocation from '../../images/svg/icon-location.inline.svg'
import IconTime from '../../images/svg/icon-time.inline.svg'
import IconTimeLapse from '../../images/svg/icon-timelapse.inline.svg'


const ListNewsEvents = ({ data, language }) => {
    const { t, i18n } = useTranslation("newsEvents")
    const translate = i18n.language
    moment.locale(translate)

    // console.log('language + ' + translate)
    // console.log('moment + ' + moment.locale(translate))

    const { allSanityNewsEvent } = data // data.markdownRemark holds your post data
    const newsEventListData = allSanityNewsEvent
    const allPosts = newsEventListData.edges

    return (
        <>
            <section className={newsEventsResults.peerResults}>
                <div className={newsEventsResults.wrapper}>
                    <div>
                        <h1>{t("newsEvents:title")}</h1>
                        <ul className={"grid"}>
                            {allPosts.map((edge, postID) => {
                                var expiryDate = edge.node.expiryDate
                                var expiryDateParsed = Date.parse(expiryDate)
                                var endTime = edge.node.endTime
                                var endTimeParsed = Date.parse(endTime)
                                //console.log("endTimeParsed = " + endTimeParsed)
                                var currentTime = Date()
                                var currentTimeParsed = Date.parse(currentTime)

                                if (expiryDate === null) {
                                    expiryDateParsed = currentTimeParsed
                                }

                                if (endTime === null) {
                                    endTimeParsed = currentTimeParsed
                                }

                                if ((edge.node.itemActive === true) && (expiryDateParsed >= currentTimeParsed) && (endTimeParsed >= currentTimeParsed)) {
                                    return (
                                        <li
                                            key={postID}
                                            //data-sal="fade"
                                            data-sal-duration="300"
                                            data-sal-easing="ease"
                                            className={"item"}
                                        >
                                            <Link className={"item-content"} to={`/${i18n.language}/news-events/${edge.node.slug.current}`}>
                                                {edge.node.coverImage !== null
                                                    ?
                                                    <Img
                                                        fluid={edge.node.coverImage.asset.fluid}
                                                        loading="lazy"
                                                    />
                                                    : ''
                                                }

                                                <span className={newsEventsResults.resultsContentWrapper}>
                                                    <span>
                                                        <h3>{edge.node.newsEventName.translate}</h3>
                                                        {edge.node.newsEventType.newsEventTypeTitle === 'Event'
                                                            ? <IconEvent />
                                                            : ''
                                                        }
                                                    </span>

                                                    {edge.node.newsEventType.newsEventTypeTitle === 'News' && edge.node.publishedAt !== null
                                                        ? <p className={newsEventsResults.date}>{moment(edge.node.publishedAt).local(true).format(`ddd DD MMM YYYY - h:mm a`)}</p>
                                                        : ''
                                                    }
                                                    <p>{edge.node.shortDescription.translate}</p>

                                                    <span className={newsEventsResults.info}>
                                                        {edge.node.startTime !== null
                                                            ? <p><IconTime aria-hidden="true" /><span>{t("newsEvents:starts")}: {moment(edge.node.startTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                                                            : ''
                                                        }

                                                        {edge.node.endTime !== null
                                                            ? <p><IconTimeLapse aria-hidden="true" /><span>{t("newsEvents:ends")}: {moment(edge.node.endTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                                                            : ''
                                                        }

                                                        {edge.node.location !== null
                                                            ? <p><IconLocation aria-hidden="true" /><span>{edge.node.location.location.translate}</span></p>
                                                            : ''
                                                        }
                                                    </span>

                                                    <span className={newsEventsResults.cta + ' buttonSecondary'}>{t("newsEvents:findOutMore")}</span>
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                } else {
                                    return null
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </section>


        </>
    );
}


export default ListNewsEvents