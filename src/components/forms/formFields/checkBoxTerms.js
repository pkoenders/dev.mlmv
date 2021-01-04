import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"

const CheckBoxTerms = () => {
  const { t, i18n } = useTranslation("common")

  const handleInputTerms = () => {
    const submitBtn = document.getElementById('submitBtn')
    submitBtn.disabled = !submitBtn.disabled;
  }

  return (

    <label htmlFor="terms" className={"checkbox"}>
      <span>{t("common:inputReadPolicies1")}
        <Link
          aria-label="Link to the terms of use"
          tabIndex="0"
          to={`/${i18n.language}/terms-and-use`}
        >
          {t("common:inputReadPolicies2")}
        </Link>

        {t("common:inputReadPolicies3")}</span>
      <input
        type="checkbox"
        name="terms"
        id="terms"
        onChange={handleInputTerms}
      />
    </label>
  )
}
export default CheckBoxTerms