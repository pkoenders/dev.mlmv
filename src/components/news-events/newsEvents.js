import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import moment from 'moment'
import 'moment/min/locales'
import resultsStyles from '../common/listResults.module.scss'
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
            <section className={resultsStyles.listResultsWrapper} style={{ marginTop: '90px' }}>
                <div className={resultsStyles.wrapper}>
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

                                                <span className={resultsStyles.resultsContentWrapper}>

                                                    <h3>
                                                        {edge.node.newsEventType.newsEventTypeTitle === 'Event'
                                                            ? <IconEvent aria-hidden="true" />
                                                            : ''
                                                        }
                                                        {edge.node.newsEventName.translate}

                                                    </h3>


                                                    {edge.node.newsEventType.newsEventTypeTitle === 'News' && edge.node.publishedAt !== null
                                                        ? <p className={resultsStyles.date}>{moment(edge.node.publishedAt).local(true).format(`ddd DD MMM YYYY - h:mm a`)}</p>
                                                        : ''
                                                    }
                                                    <p>{edge.node.shortDescription.translate}</p>

                                                    <span className={resultsStyles.info}>
                                                        {edge.node.startTime !== null
                                                            ? <p><IconTime aria-hidden="true" /><span>{t("common:starts")}: {moment(edge.node.startTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                                                            : ''
                                                        }

                                                        {edge.node.endTime !== null
                                                            ? <p><IconTimeLapse aria-hidden="true" /><span>{t("common:ends")}: {moment(edge.node.endTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</span></p>
                                                            : ''
                                                        }

                                                        {edge.node.location !== null
                                                            ? <p><IconLocation aria-hidden="true" /><span>{edge.node.location.location.translate}</span></p>
                                                            : ''
                                                        }
                                                    </span>

                                                    <span className={resultsStyles.cta + ' buttonSecondary'}>{t("common:findOutMore")}</span>
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