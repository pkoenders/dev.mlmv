import React from "react"
import { useTranslation } from "react-i18next"
import BlockContent from "../common/blockContent"
import alertStyles from '../homepage/alert.module.scss'

const Alerts = ({ data }) => {
  const { t } = useTranslation()

  const { sanityHomepageSettings } = data
  const homepageAlertsActive = sanityHomepageSettings.homepageAlertsActive

  const { allSanityHomepageAlert } = data
  const alertDataList = allSanityHomepageAlert
  const alertData = alertDataList.edges


  const closeAlert = event => {
    const alertPanel = event.target.parentNode
    alertPanel.remove()
    sessionStorage.setItem(event.target.parentNode.id, "True");
    console.log('alertPanel = ' + alertPanel)
  }

  if (homepageAlertsActive === true) {
    return (
      <>
        {alertData.map((edge, alertID) => {
          var expirayDate = edge.node.expirey
          var expirayDateParsed = Date.parse(expirayDate)
          var currentTime = Date()
          var currentTimeParsed = Date.parse(currentTime)
          var sessionActive
          const alertLevel = edge.node.level.alertLevel;

          //When you're rendering on the server, you do not have a browser and thus we do not have access to all the APIs that the browser provides, including localStorage. We need to check if the window is defined.
          if (typeof window !== 'undefined') {
            sessionActive = sessionStorage.getItem(edge.node.title.translate)


            //console.log("expirayDateParsed = " + expirayDateParsed)
            //console.log("currentTimeParsed = " + currentTimeParsed)

            if (expirayDateParsed < currentTimeParsed) {
              return null
            }

            if ((edge.node.active === true) && (sessionActive !== "True")) {
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
                      {edge.node.title != null
                        ? <p><strong>{edge.node.title.translate}</strong></p>
                        : ''
                      }

                      {edge.node.description != null
                        ? <BlockContent blocks={edge.node.description.localized} />
                        : ''
                      }
                    </div>
                  </div>
                  {edge.node.dismiss === true
                    ? <button
                      type="button"
                      tabIndex="0"
                      aria-label={t("common:closeAlertPanel")}
                      aria-controls="Alerts"
                      aria-expanded="false"
                      aria-pressed="false"
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
          }
        })}
      </>
    )
  } else {
    return null
  }
}

export default Alerts
