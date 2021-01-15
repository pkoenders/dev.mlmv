import React from "react"
import { useTranslation } from "react-i18next"

const Email = ({ inputEmail, onEmailChange }) => {
  const { t } = useTranslation()
  return (
    <label htmlFor="email">
      {t("common:inputEmail")}
      <input
        type="email"
        name="email"
        value={inputEmail}
        placeholder={t("common:inputEmailPlaceholder")}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
        onChange={onEmailChange}
      />
    </label>
  )
}
export default Email