import React from "react"
import { useTranslation } from "react-i18next"
import userCommentsStyles from '../homepage/userComments.module.scss'

const UserCommentsSection = ({ data, language }) => {
  const { t, i18n } = useTranslation("peerSupporters")
  const tagsTranslate = i18n.language

  const { allSanityCommunityComments } = data
  const commentsListData = allSanityCommunityComments
  const allComments = commentsListData.edges


  return (
    <section className={userCommentsStyles.sectionWrapper + ' section-layout-wide'}>


      <div className={userCommentsStyles.sectionInner}>
        <h3>What some of our disabled community have to say about us</h3>
        <ul>

          {allComments.map((edge, postID) => {
            if (
              edge.node.communityCommentAddToHomepage === true
            ) {
              return (
                <li key={postID} >

                  <p>{edge.node.communityCommentFriendlyName.translate}</p>
                  <p>{edge.node.communityComment.translate}</p>
                </li>
                // <li>
                //   <p>Rachel</p>
                //   <p>User feedback, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                // </li>

                // <li>
                //   <p>Jack</p>
                //   <p>User feedback, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                // </li>

                // <li>
                //   <p>Paul</p>
                //   <p>User feedback, Proin id urna aliquet velit ornare fermentum quis eu magna.</p>
                // </li>

                // <li>
                //   <p>MDA</p>
                //   <p>User feedback, . Duis nec ultricies velit. In vitae vestibulum ante..</p>
                // </li>
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
