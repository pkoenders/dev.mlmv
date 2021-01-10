import React from "react"
import { useTranslation } from "react-i18next"
import submitStyles from "../../common/thankYou.module.scss"
import IconSuccess from "../../../images/svg/icon-contact-success.inline.svg"

const ThankYou = () => {
  const { t } = useTranslation("common")
  return (
    <div className={submitStyles.wrapper + ' thankYou'} aria-hidden="true">
      <h3>{t('common:submitHeader')}</h3>
      <IconSuccess aria-hidden="true" />
      <p>{t('common:submitContent')}</p>
      {/* <Link to={`/${i18n.language}`} className={'buttonSecondary'} >{t('common:submitCTA')}</Link> */}
    </div>
  )
}
export default ThankYou