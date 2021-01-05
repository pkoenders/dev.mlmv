import React from "react"
import { useTranslation } from "react-i18next"

const Message = () => {
  const { t } = useTranslation()
  return (
    <label htmlFor="message">
      {t("common:inputMessage")}
      <textarea
        name="message"
        rows="5" />
    </label>
  )
}
export default Message