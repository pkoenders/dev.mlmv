import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import moment from 'moment'
import 'moment/min/locales'
import listResults from '../common/filterList&&listResults/listResults.module.scss'

const NewsEventsList = ({ data, language }) => {
    const { t, i18n } = useTranslation("newsEvents")
    const translate = i18n.language
    moment.locale(translate)

    const { allSanityNewsEvent } = data // data.markdownRemark holds your post data
    const newsEventListData = allSanityNewsEvent
    const allPosts = newsEventListData.edges
    return (
        <>
            <section className={listResults.listResultsWrapper} style={{ marginTop: '90px' }}>
                <div className={listResults.wrapper}>
                    <div>
                        <h1>{data.sanityNewsEventsHomepage.title.translate}</h1>
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

                                if ((edge.node.active === true) && (expiryDateParsed >= currentTimeParsed) && (endTimeParsed >= currentTimeParsed)) {
                                    return (
                                        <li
                                            key={postID}
                                            className={"item"}
                                        >
                                            <Link className={"item-content"} to={`/${i18n.language}/news-events/${edge.node.slug.current}`}>
                                                {edge.node.coverImage.asset !== null
                                                    ?
                                                    <Img
                                                        fluid={edge.node.coverImage.asset.fluid}
                                                        loading="lazy"
                                                    />
                                                    : ''
                                                }

                                                <span className={listResults.resultsContentWrapper}>

                                                    <h2>
                                                        {edge.node.title.translate}
                                                        {edge.node.type.newsEventType === 'Event'
                                                            ? <i className={"material-icons"} aria-hidden="true">event</i>
                                                            : ''
                                                        }
                                                    </h2>


                                                    {edge.node.type.newsEventType === 'News' && edge.node.publishedAt !== null
                                                        ? <p className={listResults.date}>{moment(edge.node.publishedAt).local(true).format(`ddd DD MMM YYYY - h:mm a`)}</p>
                                                        : ''
                                                    }
                                                    <p>{edge.node.description.translate}</p>

                                                    <span className={listResults.info}>
                                                        {edge.node.startTime !== null
                                                            ? <p><i className={"material-icons"} aria-hidden="true">schedule</i>{t("common:starts")}: {moment(edge.node.startTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</p>
                                                            : ''
                                                        }

                                                        {edge.node.endTime !== null
                                                            ? <p><i className={"material-icons"} aria-hidden="true">timelapse</i>{t("common:ends")}: {moment(edge.node.endTime).local(true).format(`ddd DD MMM, YYYY - h:mm a`)}</p>
                                                            : ''
                                                        }

                                                        {edge.node.location !== null
                                                            ? <p><i className={"material-icons"} aria-hidden="true">location_on</i>{edge.node.location.location.translate}</p>
                                                            : ''
                                                        }
                                                    </span>
                                                    <button className={listResults.cta + ' buttonTertiary'}>{t("common:findOutMore")}</button>
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

export default NewsEventsList