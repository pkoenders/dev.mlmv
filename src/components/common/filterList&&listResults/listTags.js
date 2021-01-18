import React from "react"
import listTags from './listTags.module.scss'

const ListTags = ({ allTags, allResultsTagList, handleInputFilterReset, handleTagSelect, handleFullReset, tagSelect }) => {
    //const { t } = useTranslation("peerSupporters")
    return (
        <div className={listTags.wrapper + " tagListWrapper"} aria-label="Filter by tags">
            <div className={'tagList'}>
                <span>
                    {allTags.map((allTagsEdge, allTagsID) => {
                        var tagMatchCount = allResultsTagList.filter((x) => (x === allTagsEdge.node.tagsTitle.translate)).length
                        if (
                            tagMatchCount > 0
                        ) {
                            return (

                                <button
                                    key={allTagsID}
                                    id={allTagsEdge.node.tagsTitle.translate}
                                    className={'tagListItem focus-visible'}
                                    aria-label={allTagsEdge.node.tagsTitle.translate + " tag, " + tagMatchCount + " results"}
                                    tabIndex="0"
                                    onClickCapture={handleInputFilterReset}
                                    onClick={handleTagSelect}
                                >
                                    <span aria-hidden="true">
                                        <i className={"material-icons"} aria-hidden="true">done</i>
                                        <i className={"material-icons"} aria-hidden="true">add</i>
                                    </span>
                                    {allTagsEdge.node.tagsTitle.translate}
                                    <span>{tagMatchCount}</span>
                                </button>
                            )
                        }
                        return null;
                    })}
                </span>
            </div>
        </div>
    )
}

export default ListTags