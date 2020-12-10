import React from "react"
import { useTranslation } from "react-i18next"
import userCommentsStyles from '../homepage/userComments.module.scss'

const UserCommentsSection = ({ data, language }) => {
  //const { t, i18n } = useTranslation("peerSupporters")
  const { i18n } = useTranslation("peerSupporters")
  const { allSanityCommunityComments } = data
  const commentsListData = allSanityCommunityComments
  const allComments = commentsListData.edges

  return (
    <section className={userCommentsStyles.sectionWrapper + ' section-layout-wide'}>


      <div className={userCommentsStyles.sectionInner}>
        <h3>What some of our disabled community have to say about us</h3>
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
  )
}

export default UserCommentsSection
