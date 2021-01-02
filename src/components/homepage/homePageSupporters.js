import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"

import peerResultsStyles from '../peer-supporters/peer-results.module.scss'


const HomepageSupports = ({ data, language }) => {
  const { t, i18n } = useTranslation("index")
  const tagsTranslate = i18n.language

  const { sanityHomepageSettings } = data
  const homepageSettings = sanityHomepageSettings


  const { allSanityPeerSupporters } = data // data.markdownRemark holds your post data
  const peerListData = allSanityPeerSupporters
  const allPosts = peerListData.edges

  if (homepageSettings.homepageSupportsActive === true) {
    return (
      <>
        <section className={peerResultsStyles.peerResults}>
          <div className={peerResultsStyles.wrapper}>
            {/* <h1 className={'presentPeerTitleShow'} style={{ display: 'block' }}>{t("peerSupporters:title")}</h1> */}

            <h2>{t("index:newSupportersTitle")}</h2>
            <ul className={"grid peerResults"}>
              {allPosts.map((edge, postID) => {
                if (
                  edge.node.peerSupporterAddToHomepage === true
                ) {
                  return (
                    <li
                      key={postID}
                      //data-sal="fade"
                      data-sal-duration="300"
                      data-sal-easing="ease"
                      className={"item"}
                    >
                      <Link to={`/${i18n.language}/peer-supporters/${edge.node.slug.current}`} className={"item-content"}>
                        <Img
                          fluid={edge.node.coverImage.asset.fluid}
                          loading="lazy"
                        />
                        <span className={peerResultsStyles.resultsContentImgOverlay}></span>
                        <span className={peerResultsStyles.resultsContentWrapper}>
                          <h3>{edge.node.peerSupporterFullName.translate}</h3>
                          <p>{edge.node.peerShortDescription.translate}</p>
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
        </section>


      </>
    )
  } else {
    return null
  }
}

export default HomepageSupports