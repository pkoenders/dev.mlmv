import React from "react"
import { useTranslation } from "react-i18next"
import submitStyles from "./thankYou.module.scss"
import IconSubmitError from "../../../images/svg/icon-contact-success.inline.svg"

const SubmitError = () => {
  const { t } = useTranslation("common")
  return (
    <div className={submitStyles.wrapper}>
      <h3>{t('common:submitHeaderError')}</h3>
      <IconSubmitError aria-hidden="true" />
      <p>{t('common:submitContentError')}</p>
    </div>
  )
}
export default SubmitError