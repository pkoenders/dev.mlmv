import React from "react"
import IconTagSelected from "../../images/svg/icon-tick.inline.svg"
import IconTagUnSelected from "../../images/svg/icon-add.inline.svg"
import filterStyles from '../common/filterList.module.scss'


const ListTags = ({ allTags, allResultsTagList, handleInputFilterReset, handleTagSelect }) => {
    //const { t } = useTranslation("peerSupporters")

    return (
        <div className={filterStyles.filterTags} aria-label="Filter by tags">
            <div className={'tagList'}>
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
                                    <IconTagSelected />
                                    <IconTagUnSelected />
                                </span>
                                {allTagsEdge.node.tagsTitle.translate}
                                <span>{tagMatchCount}</span>
                            </button>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default ListTags