import React from "react"
import { useTranslation } from "react-i18next"

const Message = ({ inputMessage, onMessageChange }) => {
  const { t } = useTranslation()
  return (
    <label htmlFor="message">
      {t("common:inputMessage")}
      <textarea
        name="message"
        value={inputMessage}
        rows="5"
        onChange={onMessageChange}
      />
    </label>
  )
}
export default Message