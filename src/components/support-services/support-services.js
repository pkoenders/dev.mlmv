import React, { useState } from "react"
//import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
//import Img from 'gatsby-image'

import filterStyles from '../common/filterList.module.scss'
import resultsStyles from '../common/listResults.module.scss'
import IconTagSelected from "../../images/svg/icon-tick.inline.svg"
import IconTagUnSelected from "../../images/svg/icon-add.inline.svg"
import IconReset from "../../images/svg/icon-clear.inline.svg"
import IconSearch from "../../images/svg/icon-search.inline.svg"
import EmojiNoResult from "../../images/svg/emoji-rolling-eyes.inline.svg"
import IconLocation from '../../images/svg/icon-location.inline.svg'
import IconPhone from '../../images/svg/icon-phone.inline.svg'
import IconExternal from '../../images/svg/icon-open-external.inline.svg'

let allResultsTagList = []

const ListSupportServices = ({ data, location, language }) => {

    const { t } = useTranslation("peerSupporters")

    // Since we are creating a Template for language support, get Support Services data from node gatsby Node
    const { allSanitySupportServices } = data
    const servicesListData = allSanitySupportServices
    const allPosts = servicesListData.edges

    // Check if the tags filtering list has matching tags in the results. 
    // It is possible to create a tag in Sanity and not attached to a Peer supporter.
    // We don't want return an empty result
    const { allSanityTags } = data
    const listSanityTags = allSanityTags
    const allTags = listSanityTags.edges

    checkForEmptyTags()
    function checkForEmptyTags() {

        // Get the Tag list
        var allTagList = []
        allTags.forEach((allTagsEdge) => {
            allTagList.push(allTagsEdge.node.tagsTitle.translate)
        })

        // Get the results Tag list if they are in active posts
        allResultsTagList = []
        allPosts.forEach((allResults) => {
            if (
                allResults.node.active === true
            ) {
                allResults.node.tags.forEach((tagList) => {
                    allResultsTagList.push(tagList.tagsTitle.translate)
                })
            }
        })
        //console.log("allTagList = " + allTagList)
    }

    // Set up some variables...
    const emptyQuery = ""
    var filterValue = ""
    var tagItemValue = ""
    var tagSelectList = ""

    // State for our query
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery
    })

    // First deal with the tag select, When user click on tag list to filter the results query
    const handleTagSelect = event => {
        //Reset any (input) filter values 
        filterValue = ""

        //Get the tag data passed from the event click etc
        const tagItem = event.target
        tagItemValue = event.target.id
        //console.log("tagItemValue = " + tagItemValue)

        // Get our Peer Results Tags
        const resultsTags = document.querySelectorAll(".resultsTags li")
        if ((document.getElementById("filterInput").value) !== "") {
            // If the input fiels still has data in it, lets clear that
            handleInputFilterReset()
        } else {
            // Toggle our tag so it looks selected!
            tagItem.classList.toggle("selected")

            if (tagItem.classList.contains("selected")) {
                // If we toggle on tag, then add item from list 
                tagSelectList = tagSelectList.concat(tagItemValue + ' ')
            } else {
                // If we toggle off tag, then remove item from list 
                tagSelectList = tagSelectList.replace(tagItemValue + ' ', '')
            }
            //console.log("tagSelectList = " + tagSelectList)

            //Then update the Peer results tags
            updateResultsTagList(resultsTags, event)

        }
        // And update our Peer results 
        filterListByTag()
    }

    // Filter input 
    const handleInputFilter = event => {
        filterValue = event.target.value
        filterListByInput()
        handleTagResultsReset()
        handleResetTagList()
        handleResetResultsTagList()
        handleSearchIcon()
    }

    // Add a filter input focus
    function handleInputFilterPreSet() {
        const inputValue = document.getElementById("filterInput")
        //console.log("inputValue = " + inputValue.value)
        if (inputValue.value !== "") {
            inputValue.classList.add('focus')
        } else {
            inputValue.classList.remove('focus')
        }
    }

    // Reset filter input value and tags to none
    function handleInputFilterReset() {
        document.getElementById("filterInput").value = ""
        filterValue = ""
        tagSelectList = ""
        filterListByInput()
        handleResetTagList()
        handleTagResultsReset()
        handleResetResultsTagList()
        handleInputStatusBlur()
        handleSearchIcon()
    }

    function handleInputStatusFocus() {
        handleSearchIcon()
        document.querySelector(".filterLabel").classList.add('active', 'focus')

        document.getElementById("filterInput").value = ""
        filterValue = ""
        tagSelectList = ""

        filterListByInput()
        //handleResetTagList()
    }
    function handleInputStatusBlur() {
        const inputValue = document.getElementById("filterInput")
        const inputLabel = document.querySelector(".filterLabel")

        if (inputValue.value === "") {
            inputLabel.classList.remove('active', 'focus')
        }

        if (inputValue.value !== "") {
            inputLabel.classList.remove('focus')
        }
    }

    function handleSearchIcon() {
        if (filterValue === "") {
            document.querySelector(".filterSearchIcon").classList.remove('hide')
            document.querySelector(".filterReset").classList.add('hide')
        }
        if (filterValue !== "") {
            document.querySelector(".filterSearchIcon").classList.add('hide')
            document.querySelector(".filterReset").classList.remove('hide')
        }
    }

    function handleTagResultsReset() {
        tagSelectList = ""
        var peerResults = document.querySelectorAll(".listResults li")
        for (var i = 0; i < peerResults.length; i++) {
            peerResults[i].classList.remove("hide")
        }
    }

    function handleResetTagList() {
        var tagList = document.querySelectorAll(".tagList  button")
        for (var i = 0; i < tagList.length; i++) {
            tagList[i].classList.remove("selected")
        }
    }

    function handleResetResultsTagList() {
        var tagList = document.querySelectorAll(".resultsTags li")
        for (var i = 0; i < tagList.length; i++) {
            tagList[i].classList.remove("selected")
        }
    }

    const updateResultsTagList = (resultsTags, event) => {
        for (var i = 0; i < resultsTags.length; i++) {
            resultsTags[i].innerText === event.target.id && resultsTags[i].classList.toggle("selected")
        }
    }

    function filterListByTag() {
        //console.log("query = " + query)
        //console.log("tagSelectList = " + tagSelectList)
        var tagListParent = document.querySelectorAll(".resultsTags")
        for (var i = 0; i < tagListParent.length; i++) {
            var currentTag = String(tagItemValue.toLowerCase().replace(/\s+/g, ''))

            if (tagListParent[i].innerHTML.indexOf(tagItemValue) !== -1) {
                tagListParent[i].parentNode.parentNode.parentNode.classList.toggle(currentTag)
                if ((tagListParent[i].parentNode.parentNode.parentNode.className) !== 'item') {
                    tagListParent[i].parentNode.parentNode.parentNode.classList.remove("hide")
                }
            }

            if ((tagListParent[i].parentNode.parentNode.parentNode.className) === 'item') {
                tagListParent[i].parentNode.parentNode.parentNode.classList.add("hide")
            }

            if (tagSelectList === '') {
                tagListParent[i].parentNode.parentNode.parentNode.classList.remove("hide")
            }
        }
    }

    //const handleInputFilter = event => {
    function filterListByInput() {
        const query = filterValue
        //console.log("query = " + query)
        const posts = servicesListData.edges || []
        const filteredData = posts.filter(post => {

            const description = post.node.description.translate
            const title = post.node.title.translate
            //console.log("title = " + title)

            var tagList = ''
            if (post.node.tags) {
                post.node.tags.map((thisEdge, i) => (
                    tagList += thisEdge.tagsTitle.translate + ' '
                ))
            }

            const tags = tagList
            // console.log("query = " + query)

            //console.log("query(input) = " + query)
            return (
                description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) ||
                tags.toLowerCase().includes(query.toLowerCase())

                // (tags &&
                //     tags
                //         .join("")
                //         .toLowerCase()
                //         .includes(query.toLowerCase()))

            )

        })
        setState({
            query,
            filteredData,
        })
        updateLayout(filteredData)
    }

    function updateLayout(filteredData) {

        if (filteredData.length === 0) {
            // peerResultsShow = false
            document.querySelector(".presentPeerResultsShow").style.display = "block"
            document.querySelector(".presentPeerTitleShow").style.display = "none"

        } else {
            //peerResultsShow = true
            document.querySelector(".presentPeerResultsShow").style.display = "none"
            document.querySelector(".presentPeerTitleShow").style.display = "block"
        }
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : allPosts


    return (
        <>
            <section className={filterStyles.listFilter + ' section-layout-wide'}>

                <div className={filterStyles.wrapper}>

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
                                            onMouseDown={handleInputFilterPreSet}
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



                    <div className={filterStyles.filterInput} >
                        <form role="search">
                            <label className={filterStyles.filterLabel + ' filterLabel'} htmlFor="filterInput">{t("supportServices:filterPlaceholder")} </label>
                            <input
                                tabIndex="0"
                                id="filterInput"
                                type="search"
                                name="FilterSupporters"
                                placeholder={t("supportServices:filterPlaceholder")}
                                onChange={handleInputFilter}
                                onFocus={handleInputStatusFocus}
                                onBlur={handleInputStatusBlur}
                            />
                            <button
                                className={filterStyles.filterReset + ' filterReset hide'}
                                aria-label="Clear keyword input field"
                                type="reset"
                                value="reset"
                                tabIndex="0"
                                onClick={handleInputFilterReset}
                            >
                                <IconReset aria-hidden="true" />
                            </button>
                            <IconSearch className={filterStyles.filterSearchIcon + ' filterSearchIcon'} aria-hidden="true" />
                        </form>
                    </div>
                </div>
            </section>

            <section className={resultsStyles.listResultsWrapper}>
                <div className={resultsStyles.wrapper}>
                    <h1 className={'presentPeerTitleShow'} style={{ display: 'block' }}>{t("supportServices:title")}</h1>

                    <span className={'presentPeerResultsShow'} style={{ display: 'none' }}>
                        {t("supportServices:filterNoResultsPart1")} '<strong> {query}</strong>'. {t("supportServices:filterNoResultsPart2")}
                        <br /><EmojiNoResult aria-hidden="true" />
                    </span>
                    <ul className={"grid listResults"}>
                        {posts.map((edge, postID) => {
                            if (
                                edge.node.active === true
                            ) {
                                return (
                                    <li
                                        key={postID}
                                        className={"item"}
                                    >
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

                                                <ul className={"resultsTags"}>
                                                    {edge.node.tags.map((thisEdge, tagID) => (
                                                        <li
                                                            className={""}
                                                            key={tagID}
                                                        >
                                                            {thisEdge.tagsTitle.translate}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </span>
                                        </div>
                                    </li>
                                )
                            } else {
                                return null
                            }
                        })}
                    </ul>
                </div>
            </section>

        </>
    );
}

export default ListSupportServices