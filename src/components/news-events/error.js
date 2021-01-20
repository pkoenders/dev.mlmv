import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import newsEvents from './newsEvents.module.scss'
import Emoji from "../../images/svg/emoji-rolling-eyes.inline.svg"

const Error = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className={newsEvents.error}>
      <p>{t("newsEvents:errorTitle")}</p>
      <Emoji />
      <p>{t("newsEvents:errorPara")}</p>
      <Link to={`/${i18n.language}/news-events`} className={'buttonSecondary'} >{t("newsEvents:errorCta")}</Link>
    </div>
  )
}

export default Error