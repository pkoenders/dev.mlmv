import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import peerListStyles from './peer-list.module.scss'
import IconSelected from "../../images/svg/icon-tick.inline.svg"
import IconUnSelected from "../../images/svg/icon-add.inline.svg"
import IconReset from "../../images/svg/icon-reset-filter.inline.svg"
import EmojiNoResult from "../../images/svg/emoji-rolling-eyes.inline.svg"



var peerResults = true
// var filterValue = ""
// var tagSelectList = ""
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
    var tagSelectList = ""
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery
    })

    const handleTagSelect = event => {
        const tagItem = event.target
        const tagItemValue = event.target.id + ''
        if (!tagItem.classList.contains("selected")) {
            // var tagList = document.querySelectorAll(".tagList > li")
            // for (var i = 0; i < tagList.length; i++) {
            //     tagList[i].classList.remove("selected")
            // }



            var peerResultsTag = document.querySelectorAll(".peerResultsTag")

            console.log("peerResultsTag.length = " + peerResultsTag.length)
            for (var i = 0; i < peerResultsTag.length; i++) {
                console.log("tagList.number = " + [i])
                console.log("tagList.id = " + peerResultsTag[i].id)
                peerResultsTag[i].classList.remove("selected")
                if (peerResultsTag[i].id === event.target.id) {
                    console.log("Matched Tag!")
                    peerResultsTag[i].classList.add("selected")
                }
            }


            resetTagList()
            tagItem.classList.add("selected")
            tagSelectList = tagSelectList.concat(tagItemValue)
        } else {
            var peerResultsTag = document.querySelectorAll(".peerResultsTag")
            for (var i = 0; i < peerResultsTag.length; i++) {
                console.log("tagList.id = " + peerResultsTag[i].id)
                peerResultsTag[i].classList.remove("selected")
            }
            tagItem.classList.remove("selected")
            tagSelectList = tagSelectList.replace(tagItemValue, '');
        }
        //console.log("tagSelectList (passing) = " + tagSelectList)
        document.getElementById("peerFilterInput").value = tagSelectList;
        filterList()

        // var resultsTagList = document.querySelectorAll(".peerResultsTagList > li")
        // for (var i = 0; i < resultsTagList.length; i++) {
        //     console.log("tagSelectList =" + tagSelectList)
        //     console.log("tagList.id =" + resultsTagList[i].id)
        //     if (resultsTagList[i].id === tagSelectList) {
        //         console.log("Match!")

        //         var resultsTagListTarget = document.querySelectorAll(".peerResultsTagList > li")
        //         console.log("resultsTagListTarget = " + resultsTagListTarget.length)
        //         for (var x = 0; x < resultsTagListTarget.length; x++) {
        //             resultsTagListTarget[x].classList.add("selected", "Match")
        //         }
        //     }
        //     //tagList[i].classList.add("selected")
        // }
    }


    const handleInputFilter = event => {
        filterValue = event.target.value
        filterList()
    }

    const handleInputFilterReset = event => {
        event.target.value = ""
        handleInputFilter(event)
        handleTagSelect(event)
        resetTagList()
    }
    function resetTagList() {
        var tagList = document.querySelectorAll(".tagList > li")
        for (var i = 0; i < tagList.length; i++) {
            tagList[i].classList.remove("selected")
        }
    }

    //const handleInputFilter = event => {
    function filterList() {
        const query = filterValue + tagSelectList
        //console.log("query = " + query)
        const posts = peerListData.edges || []
        const filteredData = posts.filter(post => {

            const description = post.node.peerShortDescription.translate
            const title = post.node.peerSupporterFullName.translate

            var tagList = ''
            if (post.node.tags) {
                post.node.tags.map((thisEdge, tagID) => (
                    tagList += thisEdge.tagsTitle.translate + ' '
                ))
            }

            const tags = tagList
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
        //console.log('filteredData = ', filteredData)
        if (filteredData.length === 0) {
            peerResults = false
        } else {
            peerResults = true
            var peerListings = document.querySelectorAll(".peerListings > li")
            //console.log('peerListings = ', peerListings)
            for (var i = 0; i < peerListings.length; i++) {
                peerListings[i].classList.add('sal-animate');
                //console.log('Add class - sal-animate')
            }
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
                        <form><label htmlFor="peerFilterInput">{t("peerSupporters:filterPlaceholder")} </label>
                            <input
                                //className={peerListStyles.peerFilterInput}
                                id="peerFilterInput"
                                type="search"
                                name="FilterSupporters"
                                role="search"
                                placeholder={t("peerSupporters:filterPlaceholder")}
                                onChange={handleInputFilter}
                            />
                            {query !== "" && <button aria-label="Clear keyword input field" type="reset" value="reset" onClick={handleInputFilterReset} onKeyPress={handleInputFilterReset}><IconReset aria-hidden="true" /></button>}
                        </form>
                    </div>

                    <nav className={peerListStyles.peerFilterTags} role="navigation">
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
                    {peerResults != false && <h1>{t("peerSupporters:title")}</h1>}
                    {peerResults === false &&
                        <span>
                            {t("peerSupporters:filterNoResultsPart1")} '<strong> {query}</strong>'. {t("peerSupporters:filterNoResultsPart2")}
                            <br /><EmojiNoResult aria-hidden="true" />
                        </span>}
                    <ul>
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
                                                <ul className={'peerResultsTagList'}>
                                                    {edge.node.tags.map((thisEdge, tagID) => (
                                                        <li className={"peerResultsTag"} key={tagID} id={thisEdge.tagsTitle.translate}>
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

