import React from "react"
import { useTranslation } from "react-i18next"
import IconSend from "../../../images/svg/icon-send.inline.svg"

const Submit = () => {
  const { t } = useTranslation()


  const handleThankYou = () => {
    // console.log("Thank You")
    //const thankYou = document.querySelector('.thankYou').classList.add('active')
    //thankYou.setAttribute("aria-hidden", "false")
  }

  return (
    <button
      type="submit"
      id="submitBtn"
      name="submit"
      className="buttonSecondary"
      disabled
    //onClick={handleThankYou}
    >
      <IconSend aria-hidden="true" />
      {t("common:inputSubmit")}
    </button>
  )
}
export default Submit