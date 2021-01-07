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
            <ul>
              {allComments.map((edge, commentsID) => {
                if (
                  edge.node.communityCommentAddToHomepage === true
                ) {
                  return (
                    <li key={commentsID} >
                      <p>{edge.node.communityCommentFriendlyName.translate}</p>
                      <p>{edge.node.communityComment.translate}</p>
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
