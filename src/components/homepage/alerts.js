import React from "react"
//import { useTranslation } from "react-i18next"
import BlockContent from "../blockContent"
import alertStyles from '../homepage/alert.module.scss'
import IconClose from "../../images/svg/icon-close-alerts.inline.svg"

const AlertsSection = ({ data, language }) => {
  //const { t, i18n } = useTranslation("index")

  const { sanityHomepageSettings } = data
  const homepageAlerts = sanityHomepageSettings

  const { allSanityHomepageAlert } = data
  const alertDataList = allSanityHomepageAlert
  const alertData = alertDataList.edges

  const closeAlert = event => {
    const alertPanel = event.target.parentNode
    alertPanel.remove()
    sessionStorage.setItem(event.target.parentNode.id, "True");
    return false;
    //console.log('alertPanel = ' + alertPanel)
  }


  //When you're rendering on the server, you do not have a browser and thus we do not have access to all the APIs that the browser provides, including localStorage. We need to check if the window is defined.
  if ((homepageAlerts.homepageAlertsActive === true) && (typeof window !== 'undefined')) {
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

          if ((edge.node.homepageAlertActive === true) && (sessionStorage.getItem(edge.node.homepageAlertName) !== "True")) {
            return (
              <section
                className={alertStyles.sectionWrapper + `${' section-layout-wide alertLevels level0 '} ${edge.node.alertLevel.alertLevel}`}
                key={alertID}
                id={edge.node.homepageAlertName}
              >
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
                {edge.node.homepageAlertDismiss === true
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
  } else {
    return null
  }
}

export default AlertsSection
