import React from "react"
import { useTranslation } from "react-i18next"
import IconSend from "../../../images/svg/icon-send.inline.svg"

const Submit = () => {
  const { t } = useTranslation()
  return (
    <button
      type="submit"
      id="submitBtn"
      name="submit"
      className="buttonSecondary"
      disabled
    >
      <IconSend aria-hidden="true" />
      {t("common:inputSubmit")}
    </button>
  )
}
export default Submit