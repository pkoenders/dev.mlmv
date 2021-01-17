import React from "react"
//import { useTranslation } from "react-i18next"
import ListResultsTags from '../common/listResultsTags'

import resultsStyles from '../common/listResults.module.scss'
import IconLocation from '../../images/svg/icon-location.inline.svg'
import IconPhone from '../../images/svg/icon-phone.inline.svg'
import IconExternal from '../../images/svg/icon-open-external.inline.svg'

const ResultsContent = ({ edge }) => {
    //const { t } = useTranslation("peerSupporters")

    return (
        <div className={resultsStyles.itemContent + ' item-content'} >
            <span className={resultsStyles.resultsContentWrapper}>
                <h2>{edge.node.title.translate}</h2>
                <p>{edge.node.description.translate}</p>

                <span className={resultsStyles.info}>

                    {edge.node.location.location.translate !== null
                        ? <p><IconLocation aria-hidden="true" /><span>{edge.node.location.location.translate}</span></p>
                        : ''
                    }

                    {edge.node.telephone !== null
                        ? <a href={`tel: ${edge.node.telephone}`}><IconPhone aria-hidden="true" /><span>{edge.node.telephone}</span></a>
                        : ''
                    }

                    {edge.node.url !== null
                        ? <a href={`http://${edge.node.url}`}><IconExternal aria-hidden="true" /><span>{edge.node.url}</span></a>
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