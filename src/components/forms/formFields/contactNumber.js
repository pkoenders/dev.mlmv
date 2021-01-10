import React from "react"
import { useTranslation } from "react-i18next"


const ContactNum = () => {
  const { t } = useTranslation()

  const handleContactNum = (e) => {
    let contactNumber = e.target.value
  }

  return (
    <label htmlFor="contactNumber">
      {t("common:inputContactNumber")}
      <input
        type="text"
        name="contactNumber"
        onChange={handleContactNum}
      />
    </label>
  )
}
export default ContactNum