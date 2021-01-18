import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import listTags from './listTags.module.scss'

const ListTags = ({ allTags, allResultsTagList, handleInputFilterReset, handleTagSelect, handleFullReset, tagSelect }) => {
    const { t } = useTranslation()

    const [tagListOpen, setTagListOpen] = useState(false);

    function toggleTagListView() {
        const tagList = document.querySelector(".tagList")
        tagList.classList.toggle("open")
        setTagListOpen(!tagListOpen)
    }

    return (
        <div className={listTags.wrapper + " tagListWrapper"} aria-label="Filter by tags">
            <div className={'tagList'}>
                {/* <span className={listTags.more}>
                    <button className={'tagListMore'} onClick={toggleTagListView}>{!tagListOpen ? <>{t("common:moreTags")}<i className={"material-icons"} aria-hidden="true">unfold_more</i></> : <>{t("common:lessTags")}<i className={"material-icons"} aria-hidden="true">unfold_less</i></>}</button>
                </span> */}
                <span>
                    <button className={listTags.more + ' tagListMore'} onClick={toggleTagListView}>{!tagListOpen ? <>{t("common:moreTags")}<i className={"material-icons"} aria-hidden="true">unfold_more</i></> : <>{t("common:lessTags")}<i className={"material-icons"} aria-hidden="true">unfold_less</i></>}</button>

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