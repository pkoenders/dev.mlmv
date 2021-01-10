import React from "react"
import { useTranslation } from "react-i18next"

const Name = () => {
  const { t } = useTranslation()
  const handleInputName = (e) => {
    let inputName = e.target.value
  }
  return (
    <label htmlFor="name">
      {t("common:inputName")}
      <input
        type="text"
        name="name"
        placeholder={t("common:inputNamePlaceholder")}
        required
        onChange={handleInputName}
      />
    </label>
  )
}
export default Name