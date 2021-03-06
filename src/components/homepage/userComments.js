import React from "react"
import { useTranslation } from "react-i18next"
import userCommentsStyles from '../homepage/userComments.module.scss'

const UserCommentsSection = ({ data, language }) => {
  const { t } = useTranslation("index")

  const { sanityHomepageSettings } = data
  const homepageCommentsActive = sanityHomepageSettings.homepageCommentsActive

  const { allSanityCommunityComments } = data
  const commentsListData = allSanityCommunityComments
  const allComments = commentsListData.edges

  if (homepageCommentsActive === true) {
    return (
      <>
        <section className={userCommentsStyles.sectionWrapper + ' section-layout-wide'}>
          <div className={userCommentsStyles.sectionInner}>
            <h3>{t("index:communityCommentsTitle")}</h3>
            <ul className={'grid'}>
              {allComments.map((edge, commentsID) => {
                if (
                  edge.node.addToHomepage === true
                ) {
                  return (
                    <li key={commentsID} className={'item'}>
                      <p>{edge.node.shortName.translate}</p>
                      <p>{edge.node.content.translate}</p>
                    </li>
                  )
                } else {
                  return null
                }
              })}
            </ul>

          </div>
        </section >
      </>
    )
  } else {
    return null
  }
}

export default UserCommentsSection
