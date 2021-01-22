import React from "react"
import { useTranslation } from "react-i18next"
import BlockContent from "../common/blockContent"
import alertStyles from './alert.module.scss'

const Alerts = ({ data }) => {
  const { t } = useTranslation()

  const { sanityHomepageSettings } = data
  const homepageAlertsActive = sanityHomepageSettings.homepageAlertsActive

  const { allSanityHomepageAlert } = data
  const alertDataList = allSanityHomepageAlert
  const alertData = alertDataList.edges


  function closeAlert(event) {
    const alertPanel = event.target.parentNode
    sessionStorage.setItem(event.target.parentNode.id, "True")
    alertPanel.remove()
    //console.log('alertPanel = ' + alertPanel)
  }

  if (homepageAlertsActive === true) {
    return (
      <>
        {alertData.map((edge, alertID) => {
          var expirayDate = edge.node.expirey
          var expirayDateParsed = Date.parse(expirayDate)
          var currentTime = Date()
          var currentTimeParsed = Date.parse(currentTime)
          var alertLevel = edge.node.level.alertLevel
          var sessionActive = null

          //When you're rendering on the server, you do not have a browser and thus we do not have access to all the APIs that the browser provides, including localStorage. We need to check if the window is defined.
          if (typeof window !== 'undefined') {
            sessionActive = sessionStorage.getItem(edge.node.title.translate)
          }
          //console.log("sessionActive = " + sessionActive)
          //console.log("expirayDateParsed = " + expirayDateParsed)
          //console.log("currentTimeParsed = " + currentTimeParsed)

          if (expirayDateParsed < currentTimeParsed) {
            return null
          }

          if ((edge.node.active === true) && (sessionActive === null)) {
            return (
              <section
                className={alertStyles.sectionWrapper + ` section-layout-wide alertLevels ${alertLevel}`}
                key={alertID}
                id={edge.node.title.translate}
              >
                <div
                  className={alertStyles.sectionInner}
                  aria-label={t("common:alertPanel")}>
                  <div>
                    {edge.node.title.translate !== null
                      ? <p><strong>{edge.node.title.translate}</strong></p>
                      : ''
                    }

                    {edge.node.description.localized !== null
                      ? <BlockContent blocks={edge.node.description.localized} />
                      : ''
                    }
                  </div>
                </div>
                {edge.node.dismiss === true
                  ? <button
                    type="button"
                    aria-label={t("common:closeAlertPanel")}
                    onClick={closeAlert}
                  >
                    <i className={"material-icons"} aria-hidden="true">clear</i>
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
}

export default Alerts
