import React from "react"
import { useTranslation } from "react-i18next"

const Submit = () => {
  const { t } = useTranslation("common")
  return (
    <button
      type="submit"
      id="submitBtn"
      className="buttonSecondary"
    >{t("common:inputSubmit")}</button>
  )
}
export default Submit