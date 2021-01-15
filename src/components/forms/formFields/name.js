import React from "react"
import { useTranslation } from "react-i18next"

const Name = ({ inputName, onNameChange }) => {
  const { t } = useTranslation()
  return (
    <label htmlFor="name">
      {t("common:inputName")}
      <input
        type="text"
        name="name"
        value={inputName}
        placeholder={t("common:inputNamePlaceholder")}
        required
        onChange={onNameChange}
      />
    </label>
  )
}
export default Name