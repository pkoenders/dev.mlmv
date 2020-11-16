import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import peerListStyles from './peer-list.module.scss'
import IconSelected from "../../images/svg/icon-tick.inline.svg"
import IconUnSelected from "../../images/svg/icon-add.inline.svg"
import IconReset from "../../images/svg/icon-reset-filter.inline.svg"
import IconSearch from "../../images/svg/icon-search.inline.svg"
import IconSearchAlt from "../../images/svg/icon-search-alt.inline.svg"
import EmojiNoResult from "../../images/svg/emoji-rolling-eyes.inline.svg"



var peerResults = true
var tagSelectList = ''

const ListPeerSupporters = ({ data, language }) => {
    const { t, i18n } = useTranslation("peerSupporters")
    const tagsTranslate = i18n.language

    //console.log("translate = " + i18n.language)

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

    const { allSanityPeerSupporters } = data // data.markdownRemark holds your post data
    const peerListData = allSanityPeerSupporters
    const allPosts = peerListData.edges

    const allSanityTags = listAllSanityTags.allSanityTags.edges

    const emptyQuery = ""
    var filterValue = ""
    var allPeerResultsTags = ''
    var tagItemValue = ""

    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery
    })

    const handleTagSelect = event => {
        filterValue = ""
        const tagItem = event.target
        tagItemValue = event.target.id

        const peerResultsTags = document.querySelectorAll(".peerResultsTags")

        if ((document.getElementById("peerFilterInput").value) !== "") {
            handleInputFilterReset()
        } else {
            tagItem.classList.toggle("selected")
            for (var i = 0; i < peerResultsTags.length; i++) {
                allPeerResultsTags += peerResultsTags[i].id + ' '
            }

            if (tagItem.classList.contains("selected")) {
                tagSelectList = tagSelectList.concat(event.target.id + ' ')
            } else {
                tagSelectList = tagSelectList.replace(event.target.id + ' ', '')
            }

            filterListBytag()
            updateResultsTagList(peerResultsTags, event)
        }
    }


    const handleInputFilter = event => {
        filterValue = event.target.value

        filterList()
        handleTagResultsReset()
        handleResetTagList()
        handleResetResultsTagList()
        handleSearchIcon()
    }

    function handleInputFilterPreSet() {
        const inputValue = document.getElementById("peerFilterInput")
        console.log("inputValue = " + inputValue.value)
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
        tagSelectList = ""
        filterList()
        handleTagResultsReset()
        handleResetTagList()
        handleResetResultsTagList()
        handleInputLabelStatusBlur()
        document.querySelector(".filterSearchIcon").classList.remove('hide')
    }

    function handleInputLabelStatusFocus() {
        handleSearchIcon()
        document.querySelector(".filterLabel").classList.add('focus')
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
            peerResults[i].style.display = "block"
            peerResults[i].className = ""
        }
    }

    function handleResetTagList() {
        var tagList = document.querySelectorAll(".tagList > li")
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
            peerResultsTags[i].id === event.target.id && peerResultsTags[i].classList.toggle("selected")
        }
    }

    function filterListBytag() {

        const query = tagSelectList
        //console.log("query = " + query)
        var tagListParent = document.querySelectorAll(".peerResults ul")
        for (var i = 0; i < tagListParent.length; i++) {
            var currentTag = String(tagItemValue.toLowerCase().replace(/\s+/g, ''))

            if (tagListParent[i].innerHTML.indexOf(tagItemValue) !== -1) {
                tagListParent[i].parentNode.parentNode.parentNode.classList.toggle(currentTag)
                if ((tagListParent[i].parentNode.parentNode.parentNode.className) !== '') {
                    tagListParent[i].parentNode.parentNode.parentNode.style.display = "block"
                }
            }

            if ((tagListParent[i].parentNode.parentNode.parentNode.className) === '') {
                tagListParent[i].parentNode.parentNode.parentNode.style.display = "none"
            }

            if (tagSelectList === '') {
                tagListParent[i].parentNode.parentNode.parentNode.style.display = "block"
                tagListParent[i].parentNode.parentNode.parentNode.className = ""
            }
        }
    }

    //const handleInputFilter = event => {
    function filterList() {
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
            peerResults = false
        } else {
            peerResults = true
        }

        // if (filteredData.length === 0) {
        //     peerResults = false
        // } else {
        //     peerResults = true
        //     var peerListings = document.querySelectorAll(".peerResults > li")

        //     //console.log('peerListings = ', peerListings)
        //     for (var i = 0; i < peerListings.length; i++) {
        //         peerListings[i].classList.add('sal-animate');
        //         //console.log('Add class - sal-animate')

        //     }
        // }
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : allPosts


    return (
        <>
            <section className={peerListStyles.peerFilter + ' section-layout-wide'}>

                <div className={peerListStyles.wrapper}>
                    <div className={peerListStyles.peerFilterInput} >
                        <form><label className={peerListStyles.filterLabel + ' filterLabel'} htmlFor="peerFilterInput">{t("peerSupporters:filterPlaceholder")} </label>
                            <input
                                //className={peerListStyles.peerFilterInput}
                                id="peerFilterInput"
                                type="search"
                                name="FilterSupporters"
                                role="search"
                                placeholder={t("peerSupporters:filterPlaceholder")}
                                onChange={handleInputFilter}
                                onFocus={handleInputLabelStatusFocus}
                                onBlur={handleInputLabelStatusBlur}
                            />
                            {/* {query !== "" && <button aria-label="Clear keyword input field" type="reset" value="reset" onClick={handleInputFilterReset} onMouseDown={handleInputFilterPreSet} onMouseUp={handleInputFilterReset} onKeyUp={handleInputFilterReset}><IconReset aria-hidden="true" /></button>} */}
                            <button className={peerListStyles.filterReset + ' filterReset hide'} aria-label="Clear keyword input field" type="reset" value="reset" onClick={handleInputFilterReset} onMouseDown={handleInputFilterPreSet} onMouseUp={handleInputFilterReset} onKeyUp={handleInputFilterReset}><IconReset aria-hidden="true" /></button>

                            <IconSearchAlt className={peerListStyles.filterSearchIconAlt + ' filterSearchIconAlt hide'} aria-hidden="true" />
                            <IconSearch className={peerListStyles.filterSearchIcon + ' filterSearchIcon'} aria-hidden="true" />
                        </form>
                    </div>

                    <nav className={peerListStyles.peerFilterTags} role="navigation">
                        <span className={peerListStyles.or}>{t("peerSupporters:selectATag")}</span>
                        <ul className={'tagList'} role="menu">
                            {allSanityTags.map((allTagsEdge, allTagsID) => {
                                return (
                                    <li key={allTagsID} onClick={handleTagSelect} onKeyPress={handleTagSelect} id={allTagsEdge.node.tagsTitle[tagsTranslate]} className={'tagListItem'} aria-label="Filter peer supports list" role="menuitem" tabIndex="0">
                                        <span aria-hidden="true">
                                            <IconSelected />
                                            <IconUnSelected />
                                        </span>
                                        {allTagsEdge.node.tagsTitle[tagsTranslate]}
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </nav>
                </div>
            </section>


            <section className={peerListStyles.peerResults}>
                <div className={peerListStyles.wrapper}>
                    {peerResults === true && <h1>{t("peerSupporters:title")}</h1>}
                    {!peerResults !== false &&
                        <span>
                            {t("peerSupporters:filterNoResultsPart1")} '<strong> {query}</strong>'. {t("peerSupporters:filterNoResultsPart2")}
                            <br /><EmojiNoResult aria-hidden="true" />
                        </span>}
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
                                            <span>
                                                <h2>{edge.node.peerSupporterFullName.translate}</h2>
                                                <p>{edge.node.peerShortDescription.translate}</p>
                                                <p>{edge.node.peerSupporterFullName.translate.split(' ', 1)[0]} {t("peerSupporters:supporterCanHelp")}</p>
                                                <ul>
                                                    {edge.node.tags.map((thisEdge, tagID) => (
                                                        <li className={"peerResultsTags"} key={tagID} id={thisEdge.tagsTitle.translate} >
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

