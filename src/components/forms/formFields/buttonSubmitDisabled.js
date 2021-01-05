import React from "react"
import { useTranslation } from "react-i18next"

const Submit = () => {
  const { t } = useTranslation()
  return (
    <button
      type="submit"
      id="submitBtn"
      name="submit"
      className="buttonSecondary"
      disabled
    >{t("common:inputSubmit")}</button>
  )
}
export default Submit