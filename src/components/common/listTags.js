import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import IconTagSelected from "../../images/svg/icon-tick.inline.svg"
import IconTagUnSelected from "../../images/svg/icon-add.inline.svg"
import IconExpandMore from "../../images/svg/icon-expand-more.inline.svg"
import IconExpandLess from "../../images/svg/icon-expand-less.inline.svg"
import IconReplay from "../../images/svg/icon-replay.inline.svg"
import filterStyles from '../common/filterList.module.scss'

const ListTags = ({ allTags, allResultsTagList, handleInputFilterReset, handleTagSelect, handleFullReset, tagSelect }) => {
    const { t } = useTranslation("peerSupporters")
    const [tagListOpen, setTagListOpen] = useState(false);

    function toggleTagListView() {
        const tagList = document.querySelector(".tagList")
        tagList.classList.toggle("open")
        setTagListOpen(!tagListOpen);
    }

    return (
        <div className={filterStyles.filterTags + " tagListWrapper"} aria-label="Filter by tags">
            <span>
                <button className={"tagListMore"} onClick={toggleTagListView}>{t("common:more")} {!tagListOpen ? <IconExpandMore aria-hidden="true" /> : <IconExpandLess aria-hidden="true" />}</button>
                {/* <button>Find out more about Peer supporters <IconForward aria-hidden="true" /></button> */}
                <button onClick={handleFullReset}>{t("common:reset")}<IconReplay aria-hidden="true" /></button>
            </span>
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
                                        <IconTagSelected aria-hidden="true" />
                                        <IconTagUnSelected aria-hidden="true" />
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