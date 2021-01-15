import React from "react"
import { useTranslation } from "react-i18next"

const Subject = ({ inputSubject, onSubjectChange }) => {
  const { t } = useTranslation("common")
  return (
    <label htmlFor="subject">
      {t("common:inputSubject")}
      <input
        type="text"
        name="subject"
        value={inputSubject}
        onChange={onSubjectChange}
      />
    </label>
  )
}
export default Subject