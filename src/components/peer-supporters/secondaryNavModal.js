import React from "react"
import { useTranslation } from "react-i18next"
import secondaryNav from '../common/secondaryNav.module.scss'

const SecondaryNav = ({ toggleModal }) => {
    const { t } = useTranslation()

    return (
        <>
            <button onClickCapture={toggleModal}> <i className={"material-icons"} aria-hidden="true">arrow_back</i>{t('common:back')}</button>
            <span className={secondaryNav.alignRight}>
                <button onClickCapture={toggleModal}>{t('common:close')}<i className={"material-icons"} aria-hidden="true">clear</i></button>
            </span>
        </>
    )
}

export default SecondaryNav