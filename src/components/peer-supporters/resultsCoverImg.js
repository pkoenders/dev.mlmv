import React from "react"
import Img from 'gatsby-image'
import listResults from '../common/filterList&&listResults/listResults.module.scss'

const ResultsCoverImge = ({ edge }) => {

    //console.log("edge.node.coverImage.asset = " + edge.node.coverImage.asset)
    return (
        <>
            {edge.node.coverImage.asset !== null
                ? <i>
                    <Img
                        fluid={edge.node.coverImage.asset.fluid}
                        loading="lazy"
                    />
                    <span className={listResults.resultsContentImgOverlay}></span>
                </i>
                : ''
            }
        </>
    )
}

export default ResultsCoverImge