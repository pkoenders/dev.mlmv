import React from "react"
import { useTranslation } from "react-i18next"
import ListResultsTags from '../common/listResultsTags'
import resultsStyles from '../common/listResults.module.scss'
import IconForward from "../../images/svg/icon-forward.inline.svg"

const ResultsContent = ({ edge }) => {
    const { t } = useTranslation("peerSupporters")

    return (
        <span className={resultsStyles.resultsContentWrapper}>
            <h2>{edge.node.title.translate}</h2>
            <p>{edge.node.description.translate}</p>
            <span className={resultsStyles.info}>
                {edge.node.title.translate !== null
                    ? <p> {edge.node.title.translate.split(' ', 1)[0]} {t("peerSupporters:supporterCanHelp")} <IconForward aria-hidden="true" className={resultsStyles.cta} /></p>
                    : ''
                }
            </span>

            {edge.node.tags !== null
                ? <ul className={"resultsTags"}>
                    <ListResultsTags edge={edge} />
                </ul>
                : ''
            }
        </span>
    )
}

export default ResultsContent