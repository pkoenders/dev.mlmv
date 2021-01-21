import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import ResultsCoverImge from './resultsCoverImg'
import ResultsContent from './resultsContent'

const ResultsWrapper = ({ edge }) => {
    const { i18n } = useTranslation("peerSupporters")

    return (
        <Link to={`/${i18n.language}/peer-supporters/${edge.node.slug.current}`} className={"item-content"} >
            <ResultsCoverImge edge={edge} />
            <ResultsContent edge={edge} />
        </Link>
    )
}

export default ResultsWrapper