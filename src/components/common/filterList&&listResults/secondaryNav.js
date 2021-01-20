import React from "react"
// import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import secondaryNav from '../secondaryNav.module.scss'
const SecondaryNav = ({ handleFullReset, location, toggleModal }) => {
    const { t } = useTranslation()

    return (
        <section className={secondaryNav.wrapper + ' section-layout-wide secondaryNav'}>
            <nav aria-label="Navigate to previous page or next page" role="navigation" >
                <div role="menu">
                    {location.pathname.includes("peer-supporters") === true &&
                        <>
                            <button className={'closeModal'} onClickCapture={toggleModal}><i className={"material-icons"} aria-hidden="true">arrow_forward</i>{t('peerSupporters:about')}</button>

                        </>
                    }
                    <span className={secondaryNav.alignRight}>
                        {/* <button className={'tagListMore'} onClick={toggleTagListView}>{!tagListOpen ? <>{t("common:moreTags")}<i className={"material-icons"} aria-hidden="true">unfold_more</i></> : <>{t("common:lessTags")}<i className={"material-icons"} aria-hidden="true">unfold_less</i></>}</button> */}
                        <button onClick={handleFullReset} className={"rotateBtn"}>{t("common:reset")}<i className={"material-icons"} aria-hidden="true">sync</i></button>
                    </span>
                </div>
            </nav>
        </section >
    )
}

export default SecondaryNav