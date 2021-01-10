import React from "react"
import { useTranslation } from "react-i18next"
import submitStyles from "../../common/thankYou.module.scss"
import IconSubmitSuccess from "../../../images/svg/icon-contact-success.inline.svg"

const SubmitThankYou = () => {
  const { t } = useTranslation("common")
  return (
    <div className={submitStyles.wrapper}>
      <h3>{t('common:submitHeader')}</h3>
      <IconSubmitSuccess aria-hidden="true" />
      <p>{t('common:submitContent')}</p>
    </div>
  )
}
export default SubmitThankYou