import React from "react"
import { useTranslation } from "react-i18next"

const Name = () => {
  const { t } = useTranslation("common")
  return (
    <label htmlFor="name">
      {t("common:inputName")}
      <input
        type="text"
        name="name"
        placeholder={t("common:inputNamePlaceholder")}
        id="name"
        required
      />
    </label>
  )
}
export default Name