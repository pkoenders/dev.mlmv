import React from "react"
import { useTranslation } from "react-i18next"

import secondaryNav from '../common/secondaryNav.module.scss'


const SecondaryNav = ({ toggleModal }) => {
    const { t } = useTranslation()

    return (
        <div className={secondaryNav.wrapper + ' section-layout-wide secondaryNav'}>
            <nav aria-label="Navigate to previous page or next page" role="navigation" >
                <div role="menu">
                    <button onClickCapture={toggleModal}> <i className={"material-icons"} aria-hidden="true">arrow_back</i>{t('common:back')}</button>
                </div>
            </nav>
        </div >
    )
}

export default SecondaryNav