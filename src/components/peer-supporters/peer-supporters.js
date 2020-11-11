import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import peerListStyles from './peer-list.module.scss'
import IconSelected from "../../images/svg/icon-tick.inline.svg"
// import IconUnSelected from "../../images/svg/icon-close.inline.svg"
import IconUnSelected from "../../images/svg/icon-add.inline.svg"

var peerResults = true
// var filterValue = ""
// var tagSelectList = ""

//class TemplateWrapper extends Component {
const ListPeerSupporters = ({ data }) => {
    const { t, i18n } = useTranslation("peerSupporters")
    const listAllSanityTags = useStaticQuery(graphql`
    query {
        allSanityTags(sort: {order: ASC, fields: tagsTitle___en}) {
            edges {
                node {
                    tagsTitle {
                        en
                        }
                    }
                }
            }
        }
        `)

    const { allSanityPeerSupporters, language } = data // data.markdownRemark holds your post data
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
    //var tagSelectList = []

    const handleTagSelect = event => {
        const tagItem = event.target
        const tagItemValue = event.target.id + ' '
        if (!tagItem.classList.contains("selected")) {
            var tagList = document.querySelectorAll(".tagList > li")
            for (var i = 0; i < tagList.length; i++) {
                tagList[i].classList.remove("selected")
            }
            tagItem.classList.add("selected")
            tagSelectList = tagSelectList.concat(tagItemValue)
        } else {
            tagItem.classList.remove("selected")
            tagSelectList = tagSelectList.replace(tagItemValue, '');
        }
        //filterValue = tagSelectList

        console.log("tagSelectList (passing) = " + tagSelectList)
        filterList()

    }
    const handleInputFilter = event => {
        filterValue = event.target.value
        filterList()
    }

    //const handleInputFilter = event => {
    function filterList() {
        //console.log(event.target.value)
        //const query = event.target.value
        //filterValue = tagSelectList
        //console.log("tagSelectList (passed) = " + tagSelectList)
        const query = filterValue + tagSelectList
        console.log("query = " + query)
        const posts = peerListData.edges || []
        const filteredData = posts.filter(post => {

            const description = post.node.peerShortDescription.translate
            const title = post.node.peerSupporterFullName.translate

            var tagList = ''
            if (post.node.tags) {
                post.node.tags.map((thisEdge, tagID) => (
                    tagList += thisEdge.tagsTitle.en + ' '
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
        console.log('filteredData = ', filteredData)
        if (filteredData.length == 0) {
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
    // var btnClass = classNames('btn', className, {
    //     'btn-pressed': state.isPressed,
    //     'btn-over': !state.isPressed && state.isHovered
    // });

    return (
        <>
            <section className={peerListStyles.peerResults + ' section-layout-wide'}>
                <h1>{t("peerSupporters:title")}</h1>
                <div className={peerListStyles.wrapper}>


                    <div className={peerListStyles.peerFilterInput} ><label htmlFor="FilterSupporters"></label>
                        <input
                            //className={peerListStyles.peerFilterInput}
                            id="peerFilterInput"
                            type="text"
                            name="FilterSupporters"
                            role="search"
                            placeholder={t("peerSupporters:filterPlaceholder")}
                            onChange={handleInputFilter}
                        />
                        {peerResults === false && <h3>{t("peerSupporters:filterNoResultsPart1")} '<strong>{document.querySelector("#peerFilterInput").value} {query}</strong>' {t("peerSupporters:filterNoResultsPart2")}</h3>}
                    </div>

                    <div className={peerListStyles.peerFilterTags}>
                        <p>Filter by tag name</p>
                        <ul className={'tagList'} >
                            {allSanityTags.map((allTagsEdge, allTagsID) => {
                                return (
                                    <li key={allTagsID} onClick={handleTagSelect} id={allTagsEdge.node.tagsTitle.en} className={'tagListItem'} >
                                        <IconSelected aria-hidden="true" />
                                        <IconUnSelected aria-hidden="true" />
                                        <span>{allTagsEdge.node.tagsTitle.en}</span>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>

                    <ul>
                        {posts.map((edge, postID) => {

                            const peerSupporterActive = edge.node.peerSupporterActive

                            if (
                                peerSupporterActive === true
                            ) {

                                return (
                                    <li
                                        key={postID}
                                        //data-sal="fade"
                                        data-sal-duration="300"
                                        data-sal-easing="ease"
                                    //className={''}
                                    >


                                        <Link to={`/${i18n.language}/peer-supporters/${edge.node.slug.current}`}>
                                            {/* <Img
                                    alt={edge.node.frontmatter.title}
                                    fluid={edge.node.frontmatter.coverimage.childImageSharp.fluid}
                                    loading="lazy"
                                /> */}
                                            <Img
                                                fluid={edge.node.coverImage.asset.fluid}
                                                loading="lazy"
                                            />

                                            <span>
                                                <h3>{edge.node.peerSupporterFullName.translate}</h3>
                                                <p>{edge.node.peerShortDescription.translate}</p>

                                                {/* <p>{edge.node.peerSupporterFriendlyName.translate} can help with</p> */}
                                                <p>{edge.node.peerSupporterFullName.translate.split(' ', 1)[0]} {t("peerSupporters:supporterCanHelp")}</p>

                                                {/* some_string.partition(' ')[0] */}
                                                <ul >
                                                    {edge.node.tags.map((thisEdge, tagID) => (
                                                        <li key={tagID}>
                                                            {thisEdge.tagsTitle.en}
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
            </section >
        </>
    );
}

export default ListPeerSupporters

