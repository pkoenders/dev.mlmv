import React, { useState } from "react"
import { useTranslation } from "react-i18next"

const Name = () => {
  const { t } = useTranslation()
  return (
    <label htmlFor="name">
      {t("common:inputName")}
      <input
        type="text"
        name="name"
        placeholder={t("common:inputNamePlaceholder")}
        required
      />
    </label>
  )
}
export default Name