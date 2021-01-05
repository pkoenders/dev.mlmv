import React from "react"
import { useTranslation } from "react-i18next"

const Email = () => {
  const { t } = useTranslation()
  return (
    <label htmlFor="email">
      {t("common:inputEmail")}
      <input
        type="email"
        name="email"
        placeholder={t("common:inputEmailPlaceholder")}
        id="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
      />
    </label>
  )
}
export default Email