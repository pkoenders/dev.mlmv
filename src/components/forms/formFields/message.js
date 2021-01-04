import React from "react"
import { useTranslation } from "react-i18next"

const Message = () => {
  const { t } = useTranslation("common")
  return (
    <label htmlFor="message">
      <span>{t("common:inputMessage")}</span>
      <textarea
        name="message"
        id="message"
        rows="5" />
    </label>
  )
}
export default Message