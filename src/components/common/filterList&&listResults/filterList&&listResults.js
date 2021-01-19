import React, { useState } from "react"

import SecondayNav from './secondaryNav'
import ListTags from './listTags'
import FilterList from './inputFilter'
import NoResults from './noResults'

import PeerResultsWrapper from '../../peer-supporters/resultsWrapper'
import SupportServicesWrapper from '../../support-services/resultsWrapper'

import listResults from './listResults.module.scss'
import filterWrapper from './filterWrapper.module.scss'

let allResultsTagList = []
var resultsListCount = "0"
var filterValue = ""
var tagItemValue = ""
var tagSelectList = ""

const FilterListResults = ({ location, currentPage, allPosts, allTags }) => {

    // Check if the tags filtering list has matching tags in the results. 
    // It is possible to create a tag in Sanity and not attached to a Peer supporter.
    // We don't want return an empty result, so lets...
    // Get the Tag list

    checkForEmptyTags()
    function checkForEmptyTags() {
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

    // State for our input query
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
        //handleTagResultsReset()
    }

    function handleFullReset(e) {
        e.target.classList.toggle("spin")
        handleInputFilterReset()
        handleTagResultsReset()
        window.scrollTo(0, 0)


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
    const [searchIcon, setSearchIcon] = useState(false)
    function handleSearchIcon() {
        const searchIcon = document.querySelector(".filterSearchIcon")
        if (filterValue === "") {
            setSearchIcon(searchIcon)
        } else {
            setSearchIcon(!searchIcon)
        }
    }

    function handleTagResultsReset() {
        tagSelectList = ""
        var peerResults = document.querySelectorAll(".listResults li")
        for (var i = 0; i < peerResults.length; i++) {
            peerResults[i].className = 'item'
        }
        handleResetTagList()
    }

    function handleResetTagList() {
        var tagList = document.querySelectorAll(".tagList  button")
        for (var i = 0; i < tagList.length; i++) {
            tagList[i].classList.remove("selected")
        }
        handleResetResultsTagList()
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
        const posts = allPosts || []
        const filteredData = posts.filter(post => {

            const title = post.node.title.translate
            const description = post.node.description.translate

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
        resultsListCount = filteredData.length
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : allPosts

    return (
        <>
            <SecondayNav location={location} handleFullReset={handleFullReset} />
            <section className={filterWrapper.wrapper + ' section-layout-wide'}>
                <div className={filterWrapper.filter}>
                    <FilterList handleInputFilter={handleInputFilter} handleInputStatusBlur={handleInputStatusBlur} handleInputFilterReset={handleInputFilterReset} searchIcon={searchIcon} />
                    <ListTags allTags={allTags} allResultsTagList={allResultsTagList} handleInputFilterReset={handleInputFilterReset} handleTagSelect={handleTagSelect} handleFullReset={handleFullReset} />

                </div>
            </section>

            <section className={listResults.listResultsWrapper}>
                <div className={listResults.wrapper}>

                    {resultsListCount !== 0 &&
                        <h1>{currentPage.title.translate}</h1>
                    }

                    {resultsListCount === 0 && <NoResults query={query} />}

                    <ul className={"grid listResults"}>
                        {posts.map((edge, postID) => {
                            if (edge.node.active === true) {
                                return (
                                    <li key={postID} className={"item"}>
                                        {location.pathname.includes("peer-supporters") === true &&
                                            <PeerResultsWrapper edge={edge} />
                                        }

                                        {location.pathname.includes("support-services") === true &&
                                            <SupportServicesWrapper edge={edge} />
                                        }
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

export default FilterListResults