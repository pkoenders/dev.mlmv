import React from "react"
import { useTranslation } from "react-i18next"

const ContactNum = () => {
  const { t } = useTranslation()
  return (
    <label htmlFor="contactNumber">
      {t("common:inputContactNumber")}
      <input
        type="text"
        name="contactNumber"
        id="contactNumber"
      />
    </label>
  )
}
export default ContactNum