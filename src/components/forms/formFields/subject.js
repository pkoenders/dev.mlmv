import React from "react"
import { useTranslation } from "react-i18next"

const Subject = () => {
  const { t } = useTranslation("common")
  return (
    <label htmlFor="subject">
      {t("common:inputSubject")}
      <input
        type="text"
        name="subject"
        id="subject" />
    </label>
  )
}
export default Subject