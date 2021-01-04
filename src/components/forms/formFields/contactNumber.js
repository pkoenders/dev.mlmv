import React from "react"
import { useTranslation } from "react-i18next"

const ContactNum = () => {
  const { t } = useTranslation("common")
  return (
    <label htmlFor="contactNumber">
      <span>{t("common:inputContactNumber")}</span>
      <input
        type="text"
        name="contactNumber"
        id="contactNumber"
      />
    </label>
  )
}
export default ContactNum