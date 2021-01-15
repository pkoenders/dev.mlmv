import React from "react"
import { useTranslation } from "react-i18next"
import EmojiNoResult from "../../images/svg/emoji-rolling-eyes.inline.svg"


const NoResults = ({ query }) => {
    const { t } = useTranslation("peerSupporters")

    return (
        <>
            <span className={'presentPeerResultsShow'} style={{ display: 'none' }}>
                {t("common:filterNoResultsPart1")} '<strong> {query}</strong>'. {t("common:filterNoResultsPart2")}
                <br /><EmojiNoResult aria-hidden="true" />
            </span>
        </>
    )
}

export default NoResults