import React from "react"
import Img from 'gatsby-image'
import listResults from '../common/filterList&&listResults/listResults.module.scss'

const ResultsCoverImge = ({ edge }) => {

    return (
        <>
            {edge.node.coverImage.asset
                ? <>
                    <Img
                        fluid={edge.node.coverImage.asset.fluid}
                        loading="lazy"
                    />
                    <span className={listResults.resultsContentImgOverlay}></span>
                </>
                : ' '
            }
        </>
    )
}

export default ResultsCoverImge