import React from "react"
import { useTranslation } from "react-i18next"

const SecondaryNav = ({ toggleModal }) => {
    const { t } = useTranslation()

    return (
        <button onClickCapture={toggleModal}> <i className={"material-icons"} aria-hidden="true">arrow_back</i>{t('common:back')}</button>
    )
}

export default SecondaryNav