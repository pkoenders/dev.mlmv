import React from "react"
import { useTranslation } from "react-i18next"
import ListResultsTags from '../common/filterList&&listResults/listResultsTags'
import listResults from '../common/filterList&&listResults/listResults.module.scss'

const ResultsContent = ({ edge }) => {
    const { t } = useTranslation("peerSupporters")

    return (
        <span className={listResults.resultsContentWrapper}>
            <h2>{edge.node.title.translate}</h2>
            <p>{edge.node.description.translate}</p>
            <span className={listResults.info}>
                {edge.node.title.translate !== null
                    ? <p> {edge.node.title.translate.split(' ', 1)[0]} {t("peerSupporters:supporterCanHelp")} <i className={listResults.cta + ' material-icons'} aria-hidden="true">arrow_forward</i></p>
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