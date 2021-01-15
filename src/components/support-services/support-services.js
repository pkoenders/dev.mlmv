import React, { useState } from "react"
// import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
//import Img from 'gatsby-image'

import filterStyles from '../common/filterList.module.scss'
import resultsStyles from '../common/listResults.module.scss'
import NoResults from '../common/noResults'
import ListTags from '../common/listTags'
import FilterList from '../common/filterList'
import IconLocation from '../../images/svg/icon-location.inline.svg'
import IconPhone from '../../images/svg/icon-phone.inline.svg'
import IconExternal from '../../images/svg/icon-open-external.inline.svg'

let allResultsTagList = []
var filterValue = ""
var tagItemValue = ""
var tagSelectList = ""

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
        // console.log("allTagList = " + allTagList)
    }

    // State for our query
    const emptyQuery = ""
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery
    })

    // First deal with the tag select, When user click on tag list to filter the results query
    const handleTagSelect = event => {
        //Get the tag data passed from the event click etc
        const tagItem = event.target
        tagItemValue = tagItem.id

        // Toggle our tag so it looks selected!
        tagItem.classList.toggle("selected")

        if (tagItem.classList.contains("selected")) {
            // If we toggle on tag, then add item to list 
            tagSelectList = tagSelectList.concat(tagItemValue + ' ')
        } else {
            // If we toggle off tag, then remove item from list 
            tagSelectList = tagSelectList.replace(tagItemValue + ' ', '')
        }

        // And update our Peer results 
        filterListByTag()

        // Get our Peer Results Tags
        const resultsTags = document.querySelectorAll(".resultsTags li")

        //Then update the Peer results tags
        updateResultsTagList(resultsTags, event)
    }

    // Filter input 
    const handleInputFilter = event => {
        filterValue = event.target.value
        const filterLabel = document.querySelector(".filterLabel")

        if (filterValue !== "") {
            filterLabel.classList.add('focus')
        } else {
            filterLabel.classList.remove('focus')
        }
        handleSearchIcon()
        filterListByInput()
        handleTagResultsReset()
        handleResetTagList()
        handleResetResultsTagList()
    }

    // Reset filter input value and tags to none
    function handleInputFilterReset() {
        const filterInput = document.querySelector("#filterInput")
        filterInput.value = ""
        filterValue = ""
        filterListByInput()
        handleSearchIcon()
        handleInputStatusBlur()
    }

    // Remove focus on blur
    function handleInputStatusBlur() {
        const filterLabel = document.querySelector(".filterLabel")
        filterLabel.classList.remove('focus')
    }

    // Toggle search icons
    function handleSearchIcon() {
        const filterSearchIcon = document.querySelector(".filterSearchIcon")
        const filterReset = document.querySelector(".filterReset")
        if (filterValue === "") {
            filterSearchIcon.classList.remove('hide')
            filterReset.classList.add('hide')
        } else {
            filterSearchIcon.classList.add('hide')
            filterReset.classList.remove('hide')
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

    function filterListByInput() {
        const query = filterValue
        //console.log("query = " + query)
        const posts = servicesListData.edges || []
        const filteredData = posts.filter(post => {

            const description = post.node.description.translate
            const title = post.node.title.translate
            var tagList = ''
            if (post.node.tags) {
                post.node.tags.map((thisEdge, i) => (
                    tagList += thisEdge.tagsTitle.translate + ' '
                ))
            }
            const tags = tagList

            return (
                description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) ||
                tags.toLowerCase().includes(query.toLowerCase())
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
            <section className={filterStyles.wrapper + ' section-layout-wide'}>
                <div className={filterStyles.filter}>
                    <ListTags allTags={allTags} allResultsTagList={allResultsTagList} handleInputFilterReset={handleInputFilterReset} handleTagSelect={handleTagSelect} />
                    <FilterList handleInputFilter={handleInputFilter} handleInputStatusBlur={handleInputStatusBlur} handleInputFilterReset={handleInputFilterReset} />
                </div>
            </section>

            <section className={resultsStyles.listResultsWrapper}>
                <div className={resultsStyles.wrapper}>
                    <h1 className={'presentPeerTitleShow'} style={{ display: 'block' }}>{t("supportServices:title")}</h1>

                    <NoResults query={query} />

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

                                                {edge.node.tags !== null
                                                    ? <ul className={"resultsTags"}>
                                                        {edge.node.tags.map((thisEdge, tagID) => (
                                                            <li
                                                                className={""}
                                                                key={tagID}
                                                            >
                                                                {thisEdge.tagsTitle.translate}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : ''
                                                }
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