import React from "react"
import { useTranslation } from "react-i18next"


const ContactNum = ({ inputNumber, onNumberChange }) => {
  const { t } = useTranslation()

  return (
    <label htmlFor="number">
      {t("common:inputContactNumber")}
      <input
        type="text"
        name="number"
        value={inputNumber}
        onChange={onNumberChange}
      />
    </label>
  )
}
export default ContactNum