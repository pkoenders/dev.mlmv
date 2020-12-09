import React from "react"
import { useTranslation } from "react-i18next"
import BlockContent from "../blockContent"
import alertStyles from '../homepage/alert.module.scss'

const UserCommentsSection = ({ data, language }) => {
  const { t, i18n } = useTranslation("index")

  const { allSanityHomepageAlert } = data
  const alertDataList = allSanityHomepageAlert
  const alertData = alertDataList.edges
  //const locale = i18n.language


  return (
    <section className={alertStyles.sectionWrapper + ' section-layout-wide' + ' alrtLevelAmber'}>
      <div className={alertStyles.sectionInner}>
        {alertData.map((edge, postID) => {
          if (
            edge.node.homepageAlertActive === null
          ) {
            return (
              <div
                key={postID}>
                <p><strong>{edge.node.homepageAlertTitle.translate}</strong></p>
                <BlockContent blocks={edge.node.homepageAlertDescription.localized} />
              </div>

            )
          } else {
            return null
          }
        })}
      </div>
    </section >
  )
}

export default UserCommentsSection
