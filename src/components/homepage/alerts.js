import React from "react"
import { useTranslation } from "react-i18next"
import BlockContent from "../blockContent"
import alertStyles from '../homepage/alert.module.scss'
import IconClose from "../../images/svg/icon-close-alerts.inline.svg"

const AlertsSection = ({ data, language }) => {
  const { t, i18n } = useTranslation("index")

  const { allSanityHomepageAlert } = data
  const alertDataList = allSanityHomepageAlert
  const alertData = alertDataList.edges
  //const locale = i18n.language



  const closeAlert = event => {
    const alertPanel = event.target.parentNode
    alertPanel.remove()
    //console.log('alertPanel = ' + alertPanel)
  }


  return (
    <>
      {alertData.map((edge, alertID) => {
        var expirayDate = edge.node.homepageAlertExpirey
        var expirayDateParsed = Date.parse(expirayDate)
        var currentTime = Date()
        var currentTimeParsed = Date.parse(currentTime)
        //console.log("expirayDateParsed = " + expirayDateParsed)
        //console.log("currentTimeParsed = " + currentTimeParsed)
        if (expirayDateParsed < currentTimeParsed) {
          return null
        }

        if (
          edge.node.homepageAlertActive === true
        ) {
          return (
            <section
              className={alertStyles.sectionWrapper + ' section-layout-wide' + ' alertLevels level0 ' + `${edge.node.alertLevel.alertLevel}`}
              key={alertID}>
              <div
                className={alertStyles.sectionInner}
                aria-label="Alert panel">
                <div>
                  {edge.node.homepageAlertTitle != null
                    ? <p><strong>{edge.node.homepageAlertTitle.translate}</strong></p>
                    : ''
                  }

                  {edge.node.homepageAlertDescription != null
                    ? <BlockContent blocks={edge.node.homepageAlertDescription.localized} />
                    : ''
                  }
                </div>
              </div>
              {edge.node.homepageAlertDismiss != true
                ? <button
                  type="button"
                  tabIndex="0"
                  aria-label="Closes this alert panel"
                  aria-controls="Alerts"
                  aria-expanded="false"
                  aria-pressed="false"
                  onKeyPress={closeAlert}
                  onClick={closeAlert}
                >
                  <IconClose aria-hidden="true" />
                </button>
                : ''
              }
            </section >
          )
        } else {
          return null
        }
      })}
    </>
  )
}

export default AlertsSection
