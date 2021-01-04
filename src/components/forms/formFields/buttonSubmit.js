import React from "react"
import { useTranslation } from "react-i18next"

const Submit = () => {
  const { t } = useTranslation("contact")
  return (
    <button
      type="submit"
      id="submitBtn"
      className="buttonSecondary"
    >{t("contact:submit")}</button>
  )
}
export default Submit