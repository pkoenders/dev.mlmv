import React, { useState } from "react"
import { useTranslation } from "react-i18next"

import listTags from './listTags.module.scss'

const ListTags = ({ allTags, allResultsTagList, handleInputFilterReset, handleTagSelect, handleTagResultsReset }) => {
    const { t } = useTranslation()

    const [tagListOpen, setTagListOpen] = useState(false);

    function toggleTagListView() {
        const tagList = document.querySelector(".tagList")
        tagList.classList.toggle("open")
        setTagListOpen(!tagListOpen)
    }

    function clearInput(e) {
        const filterInput = document.querySelector("#filterInput")
        if (filterInput.value !== "") {
            handleInputFilterReset(e)
            handleTagResultsReset()
        }
    }

    function handleSelct(e) {
        handleTagSelect(e)
    }

    return (
        <div className={listTags.wrapper + " tagListWrapper"} aria-label="Filter by tags">
            <div className={'tagList'}>
                <span>
                    <button className={listTags.more + ' tagListMore'} onClick={toggleTagListView}>{!tagListOpen ? <>{t("common:moreTags")}<i className={"material-icons"} aria-hidden="true">arrow_drop_down</i></> : <>{t("common:lessTags")}<i className={"material-icons"} aria-hidden="true">arrow_drop_up</i></>}</button>
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
                                    onMouseDown={clearInput}
                                    onKeyDown={clearInput}
                                    onClick={handleSelct}
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