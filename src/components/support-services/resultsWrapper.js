import React from "react"
//import { useTranslation } from "react-i18next"
import ListResultsTags from '../common/filterList&&listResults/listResultsTags'
import listResults from '../common/filterList&&listResults/listResults.module.scss'

const ResultsContent = ({ edge }) => {
    //const { t } = useTranslation("peerSupporters")

    return (
        <div className={listResults.itemContent + ' item-content'} >
            <span className={listResults.resultsContentWrapper}>
                <h2>{edge.node.title.translate}</h2>
                <p>{edge.node.description.translate}</p>

                <span className={listResults.info}>

                    {edge.node.location.location.translate !== null
                        ? <p><i className={"material-icons"} aria-hidden="true">location_on</i>{edge.node.location.location.translate}</p>
                        : ''
                    }

                    {edge.node.telephone !== null
                        ? <a href={`tel: ${edge.node.telephone}`}><i className={"material-icons"} aria-hidden="true">local_phone</i>{edge.node.telephone}</a>
                        : ''
                    }

                    {edge.node.url !== null
                        ? <a href={`http://${edge.node.url}`}><i className={"material-icons"} aria-hidden="true">launch</i>{edge.node.url}</a>
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
        </div>
    )
}

export default ResultsContent