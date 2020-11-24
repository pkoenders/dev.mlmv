import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import peerListStyles from './peer-list.module.scss'
import IconTagSelected from "../../images/svg/icon-tick-tag.inline.svg"
import IconTagUnSelected from "../../images/svg/icon-add-tag.inline.svg"
import IconReset from "../../images/svg/icon-reset-filter.inline.svg"
import IconSearch from "../../images/svg/icon-search.inline.svg"
import IconSearchAlt from "../../images/svg/icon-search-alt.inline.svg"
import EmojiNoResult from "../../images/svg/emoji-rolling-eyes.inline.svg"
//import { node } from "prop-types"

//var peerResultsShow = true
var tagSelectList = ''
var emptyTags = []

const ListPeerSupporters = ({ data, language }) => {
    const { t, i18n } = useTranslation("peerSupporters")
    const tagsTranslate = i18n.language
    //const translate = i18n.language

    //console.log("translate = " + i18n.language)

    // Query all the tags. 
    const listAllSanityTags = useStaticQuery(graphql`
    query {
        allSanityTags(sort: {order: ASC, fields: tagsTitle___en}) {
            edges {
                node {
                    tagsTitle {
                        en
                        mi
                        hi
                        sm
                        }
                    }
                }
            }
        }
        `)

    const allSanityTags = listAllSanityTags.allSanityTags.edges

    // Sinch we are creating a Template for language support, get Peer Supports data from node gatsby Node
    const { allSanityPeerSupporters } = data // data.markdownRemark holds your post data
    const peerListData = allSanityPeerSupporters
    const allPosts = peerListData.edges

    // Check if the tags filtering list has matching tags in the results. 
    // It is possible to create a tag in Sanity and not attached to a Peer supporter.
    // We don't want return an empty result   
    checkForEmptyTags()
    function checkForEmptyTags() {

        // Get the Tag list
        var allTagList = []
        allSanityTags.forEach((allTagsEdge) => {
            allTagList.push(allTagsEdge.node.tagsTitle[tagsTranslate])
        }
            //
        )
        // Get the results Tag list
        var allResultsTagList = []
        allPosts.forEach((allResults) => {
            allResults.node.tags.forEach((tagList) => {
                allResultsTagList.push(tagList.tagsTitle.translate)
            }
            )
        }
        )
        // And compare, retieve the missed matched (empty tags)
        // Now will check for 'emptyTags' when we write the tags filter out
        emptyTags = allTagList.filter(function (el) {
            return allResultsTagList.indexOf(el) < 0;
        });
        //console.log("emptyTags = " + emptyTags)
    }

    // Set up some variables...

    const emptyQuery = ""
    var filterValue = ""
    var tagItemValue = ""
    // 

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
        // tagItemValue = event.target.id
        tagItemValue = event.target.innerText
        // console.log("tagItemValue = " + tagItemValue)


        // Get our Peer Results Tags
        const peerResultsTags = document.querySelectorAll(".peerResultsTags")
        if ((document.getElementById("peerFilterInput").value) !== "") {

            // If the input fiels still has data in it, lets clear that
            handleInputFilterReset()

        } else {
            // Toggle our tag so it looks selected!
            tagItem.classList.toggle("selected")

            // var allPeerResultsTags = ''
            // for (var i = 0; i < peerResultsTags.length; i++) {
            //     //Create a list of all Peer results tags that match selected
            //     allPeerResultsTags += peerResultsTags[i].innerText + ' '
            // }

            if (tagItem.classList.contains("selected")) {
                // If we toggle on tag, then add item from list 
                tagSelectList = tagSelectList.concat(event.target.innerText + ' ')
            } else {
                // If we toggle off tag, then remove item from list 
                tagSelectList = tagSelectList.replace(event.target.innerText + ' ', '')
            }

            //Then update the Peer results tags
            updateResultsTagList(peerResultsTags, event)

        }
        // And update our Peer results 
        filterListByTag()

    }


    const handleInputFilter = event => {
        filterValue = event.target.value

        filterListByInput()
        handleTagResultsReset()
        handleResetTagList()
        handleResetResultsTagList()
        handleSearchIcon()
    }

    function handleInputFilterPreSet() {
        const inputValue = document.getElementById("peerFilterInput")
        //console.log("inputValue = " + inputValue.value)
        if (inputValue.value !== "") {
            inputValue.classList.add('focus')
        } else {
            inputValue.classList.remove('focus')
        }

    }
    const handleInputFilterReset = event => {
        //event.target.value = ""
        document.getElementById("peerFilterInput").value = ""
        filterValue = ""
        //tagSelectList = ""

        filterListByInput()
        //filterListByTag()


        handleResetTagList()

        handleTagResultsReset()
        handleResetResultsTagList()
        handleInputLabelStatusBlur()
        document.querySelector(".filterSearchIcon").classList.remove('hide')
    }

    function handleInputLabelStatusFocus() {
        handleSearchIcon()
        document.querySelector(".filterLabel").classList.add('focus')
        document.querySelector(".filterSearchIcon").classList.add('hide')
    }
    function handleInputLabelStatusBlur() {
        //
        const inputValue = document.getElementById("peerFilterInput")
        const inputLabel = document.querySelector(".filterLabel")
        if (inputValue.value === "") {
            inputValue.classList.remove('focus')
            inputLabel.classList.remove('focus')
            handleSearchIcon()
        }
    }

    function handleSearchIcon() {
        if (filterValue === "") {
            document.querySelector(".filterSearchIcon").classList.toggle('hide')
            document.querySelector(".filterSearchIconAlt").classList.toggle('hide')
            document.querySelector(".filterReset").classList.add('hide')
        }
        if (filterValue !== "") {
            document.querySelector(".filterSearchIcon").classList.add('hide')
            document.querySelector(".filterSearchIconAlt").classList.add('hide')
            document.querySelector(".filterReset").classList.remove('hide')
        }
    }

    function handleTagResultsReset() {
        tagSelectList = ""
        var peerResults = document.querySelectorAll(".peerResults > li")
        for (var i = 0; i < peerResults.length; i++) {
            // peerResults[i].style.display = "block"
            peerResults[i].className = ""
        }
    }

    function handleResetTagList() {
        var tagList = document.querySelectorAll(".tagList  button")
        for (var i = 0; i < tagList.length; i++) {
            tagList[i].classList.remove("selected")
        }
    }

    function handleResetResultsTagList() {
        var tagList = document.querySelectorAll(".peerResultsTags")
        for (var i = 0; i < tagList.length; i++) {
            tagList[i].classList.remove("selected")
        }
    }

    const updateResultsTagList = (peerResultsTags, event) => {
        for (var i = 0; i < peerResultsTags.length; i++) {
            peerResultsTags[i].innerText === event.target.innerText && peerResultsTags[i].classList.toggle("selected")
        }
    }

    function filterListByTag() {

        //const query = tagSelectList
        //console.log("query = " + query)
        var tagListParent = document.querySelectorAll(".peerResults ul")
        for (var i = 0; i < tagListParent.length; i++) {
            var currentTag = String(tagItemValue.toLowerCase().replace(/\s+/g, ''))

            if (tagListParent[i].innerHTML.indexOf(tagItemValue) !== -1) {
                tagListParent[i].parentNode.parentNode.parentNode.classList.toggle(currentTag)
                if ((tagListParent[i].parentNode.parentNode.parentNode.className) !== '') {
                    //tagListParent[i].parentNode.parentNode.parentNode.style.display = "block"
                    tagListParent[i].parentNode.parentNode.parentNode.classList.remove("hide")
                }
            }

            if ((tagListParent[i].parentNode.parentNode.parentNode.className) === '') {
                // tagListParent[i].parentNode.parentNode.parentNode.style.display = "none"
                tagListParent[i].parentNode.parentNode.parentNode.classList.add("hide")
            }

            if (tagSelectList === '') {
                //tagListParent[i].parentNode.parentNode.parentNode.style.display = "block"
                //tagListParent[i].parentNode.parentNode.parentNode.classList.remove("hide")
                tagListParent[i].parentNode.parentNode.parentNode.className = ""
            }
        }


    }

    //const handleInputFilter = event => {
    function filterListByInput() {
        const query = filterValue
        //console.log("query = " + query)
        const posts = peerListData.edges || []
        const filteredData = posts.filter(post => {

            const description = post.node.peerShortDescription.translate
            const title = post.node.peerSupporterFullName.translate
            console.log("title = " + title)

            var tagList = ''
            if (post.node.tags) {
                post.node.tags.map((thisEdge, i) => (
                    tagList += thisEdge.tagsTitle.translate + ' '
                ))
            }

            const tags = tagList
            console.log("query = " + query)

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
            <section className={peerListStyles.peerFilter + ' section-layout-wide'}>

                <div className={peerListStyles.wrapper}>
                    <div className={peerListStyles.peerFilterInput} >
                        <form role="search">
                            <label className={peerListStyles.filterLabel + ' filterLabel'} htmlFor="peerFilterInput">{t("peerSupporters:filterPlaceholder")} </label>
                            <input
                                //className={peerListStyles.peerFilterInput}
                                tabIndex="0"
                                id="peerFilterInput"
                                type="search"
                                name="FilterSupporters"

                                placeholder={t("peerSupporters:filterPlaceholder")}
                                onChange={handleInputFilter}
                                onFocus={handleInputLabelStatusFocus}
                            //onBlur={handleInputLabelStatusBlur}
                            />
                            <button
                                className={peerListStyles.filterReset + ' filterReset hide'}
                                aria-label="Clear keyword input field"
                                type="reset"
                                value="reset"
                                tabIndex="0"
                                onClick={handleInputFilterReset}
                                //onMouseDown={handleInputFilterPreSet}
                                onMouseUp={handleInputFilterReset}
                            //onKeyDown={handleInputFilterReset}
                            >
                                <IconReset aria-hidden="true" />
                            </button>
                            <IconSearchAlt className={peerListStyles.filterSearchIconAlt + ' filterSearchIconAlt hide'} aria-hidden="true" />
                            <IconSearch className={peerListStyles.filterSearchIcon + ' filterSearchIcon'} aria-hidden="true" />
                        </form>
                    </div>

                    <div className={peerListStyles.peerFilterTags} aria-label="Filter by tags">
                        <span className={peerListStyles.or}>{t("peerSupporters:selectATag")}</span>
                        <div
                            className={'tagList'}
                        >
                            {allSanityTags.map((allTagsEdge, allTagsID) => {
                                if (
                                    !allTagsEdge.node.tagsTitle[tagsTranslate].includes(emptyTags)
                                ) {
                                    return (
                                        <button
                                            key={allTagsID}
                                            //id={allTagsEdge.node.tagsTitle[tagsTranslate]}
                                            className={'tagListItem focus-visible'}
                                            aria-label={allTagsEdge.node.tagsTitle[tagsTranslate]}
                                            //role="menuitem"
                                            //value={allTagsEdge.node.tagsTitle[tagsTranslate]}
                                            tabIndex="0"
                                            onMouseDown={handleInputFilterPreSet}
                                            //onMouseUp={handleInputFilterReset, handleTagSelect}
                                            onMouseUp={handleTagSelect}
                                            onKeyPress={handleTagSelect}
                                        >
                                            <span aria-hidden="true">
                                                <IconTagSelected />
                                                <IconTagUnSelected />
                                            </span>
                                            {allTagsEdge.node.tagsTitle[tagsTranslate]}
                                        </button>
                                    )
                                }
                                return null;
                            })}
                        </div>
                    </div>
                </div>
            </section>


            <section className={peerListStyles.peerResults}>
                <div className={peerListStyles.wrapper}>
                    <h1 className={'presentPeerTitleShow'} style={{ display: 'block' }}>{t("peerSupporters:title")}</h1>

                    <span className={'presentPeerResultsShow'} style={{ display: 'none' }}>
                        {t("peerSupporters:filterNoResultsPart1")} '<strong> {query}</strong>'. {t("peerSupporters:filterNoResultsPart2")}
                        <br /><EmojiNoResult aria-hidden="true" />
                    </span>
                    <ul className={"peerResults"}>
                        {posts.map((edge, postID) => {
                            if (
                                edge.node.peerSupporterActive === true
                            ) {
                                return (
                                    <li
                                        key={postID}
                                        //data-sal="fade"
                                        data-sal-duration="300"
                                        data-sal-easing="ease"
                                        className={""}
                                    >
                                        <Link to={`/${i18n.language}/peer-supporters/${edge.node.slug.current}`}>
                                            <Img
                                                fluid={edge.node.coverImage.asset.fluid}
                                                loading="lazy"
                                            />
                                            <span className={peerListStyles.resultsContentImgOverlay}></span>
                                            <span className={peerListStyles.resultsContentWrapper}>
                                                <h2>{edge.node.peerSupporterFullName.translate}</h2>
                                                <p>{edge.node.peerShortDescription.translate}</p>
                                                <p>{edge.node.peerSupporterFullName.translate.split(' ', 1)[0]} {t("peerSupporters:supporterCanHelp")}</p>
                                                <ul>
                                                    {edge.node.tags.map((thisEdge, tagID) => (
                                                        <li
                                                            className={"peerResultsTags"}
                                                            key={tagID}
                                                        // id={thisEdge.tagsTitle.translate}
                                                        >
                                                            {thisEdge.tagsTitle.translate}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </span>
                                        </Link>
                                    </li>
                                )
                            } else {
                                return false
                            }
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default ListPeerSupporters