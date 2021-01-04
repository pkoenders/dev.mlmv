import React from "react"
import { useTranslation } from "react-i18next"

const Subject = () => {
  const { t } = useTranslation("common")
  return (
    <label htmlFor="subject">
      <span>{t("common:inputSubject")}</span>
      <input
        type="text"
        name="subject"
        id="subject" />
    </label>
  )
}
export default Subject