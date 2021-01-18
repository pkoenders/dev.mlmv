import React, { useState } from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import secondaryNav from '../secondaryNav.module.scss'

const SecondaryNav = ({ handleFullReset, location }) => {
    const { t, i18n } = useTranslation("peerSupporters")
    const [tagListOpen, setTagListOpen] = useState(false);

    function toggleTagListView() {
        const tagList = document.querySelector(".tagList")
        tagList.classList.toggle("open")
        setTagListOpen(!tagListOpen)
        window.scrollTo(0, 0)
    }

    return (
        <section className={secondaryNav.wrapper + ' section-layout-wide secondaryNav'}>
            <nav aria-label="Navigate to previous page or next page" role="navigation" >
                <div role="menu">
                    {location.pathname.includes("peer-supporters") === true &&
                        <>
                            <Link
                                aria-label={t("common:back")}
                                role="menuitem"
                                tabIndex="0"
                                to={`/${i18n.language}/peer-supporters/`}>
                                <i className={"material-icons left"} aria-hidden="true">help_outline</i>
                                Peer supporters info
                            </Link>
                        </>
                    }
                    <span className={secondaryNav.alignRight}>
                        <button className={'tagListMore'} onClick={toggleTagListView}>{!tagListOpen ? <>{t("common:more")}<i className={"material-icons"} aria-hidden="true">unfold_more</i></> : <>{t("common:less")}<i className={"material-icons"} aria-hidden="true">unfold_less</i></>}</button>
                        <button onClick={handleFullReset}>{t("common:reset")}<i className={"material-icons"} aria-hidden="true">autorenew</i></button>
                    </span>
                </div>
            </nav>
        </section >
    )
}

export default SecondaryNav