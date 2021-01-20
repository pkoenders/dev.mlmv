import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import moment from 'moment'
import secondaryNav from '../common/secondaryNav.module.scss'

const SecondaryNav = ({ pageContext }) => {
    const { t, i18n } = useTranslation()
    const translate = i18n.language
    moment.locale(translate)
    const { next, previous } = pageContext

    return (
        <>
            <Link
                aria-label={t("common:back")}
                role="menuitem"
                tabIndex="0"
                to={`/${i18n.language}/peer-supporters/`}
            >
                <i className={"material-icons"} aria-hidden="true">arrow_back</i>
                {t("common:back")}
            </Link>


            <span className={secondaryNav.alignRight}>
                {previous &&
                    <Link
                        aria-label="Link to previous page"
                        role="menuitem"
                        tabIndex="0"
                        to={`/${i18n.language}/peer-supporters/${previous.slug.current}`}
                    >
                        <i className={"material-icons left"} aria-hidden="true">chevron_left</i>
                        {t("common:previous")}
                    </Link>
                }
                {next &&
                    <Link
                        aria-label="Link to next page"
                        role="menuitem"
                        tabIndex="0"
                        to={`/${i18n.language}/peer-supporters/${next.slug.current}`}
                    >
                        {t("common:next")}
                        <i className={"material-icons"} aria-hidden="true">chevron_right</i>
                    </Link>
                }
            </span>
        </>
    )
}

export default SecondaryNav