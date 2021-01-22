import React from "react"
// import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import secondaryNav from '../secondaryNav.module.scss'
const SecondaryNav = ({ handleFullReset, location, toggleModal }) => {
    const { t } = useTranslation()

    return (
        <>
            {location.pathname.includes("peer-supporters") === true &&
                <>
                    <button className={'closeModal'} onClickCapture={toggleModal}><i className={"material-icons"} aria-hidden="true">help_center</i>&nbsp;{t('peerSupporters:about')}</button>
                </>
            }
            <span className={secondaryNav.alignRight}>
                <button onClick={handleFullReset} className={"rotateBtn"}>{t("common:reset")}<i className={"material-icons"} aria-hidden="true">sync</i></button>
            </span>
        </>
    )
}

export default SecondaryNav