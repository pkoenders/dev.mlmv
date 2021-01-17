import React from "react"
import Img from 'gatsby-image'
import resultsStyles from '../common/listResults.module.scss'

const ResultsCoverImge = ({ edge }) => {

    return (
        <>
            {
                edge.node.coverImage.asset.fluid !== null
                    ? <>
                        <Img
                            fluid={edge.node.coverImage.asset.fluid}
                            loading="lazy"
                        />
                        <span className={resultsStyles.resultsContentImgOverlay}></span>
                    </>
                    : ''
            }
        </>
    )
}

export default ResultsCoverImge