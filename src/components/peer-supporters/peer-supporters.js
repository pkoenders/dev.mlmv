import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import Img from 'gatsby-image'
import peerListStyles from './peer-list.module.scss'

var peerResults = true


const ListPeerSupporters = ({ data }) => {

    const { t, i18n } = useTranslation("peerSupporters")

    const { allSanityPeerSupporters, language } = data // data.markdownRemark holds your post data
    const peerListData = allSanityPeerSupporters
    const translate = language

    const allPosts = peerListData.edges
    const emptyQuery = ""

    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,

    })


    const handleInputChange = event => {
        //console.log(event.target.value)
        const query = event.target.value
        //const { data } = props

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

            // console.log("title = " + title)
            // console.log("tags = " + tags)

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



    return (
        <>
            <section className={peerListStyles.latestProjectsSection + ' section-layout-wide'}>
                <h2>{t("peerSupporters:title")}</h2>
                <div className={peerListStyles.wrapper}>
                    <input
                        className="peerFilterInput"
                        id="peerFilterInput"
                        type="text"
                        aria-label="Search"
                        placeholder={t("peerSupporters:filterPlaceholder")}
                        onChange={handleInputChange}
                    />

                    {peerResults === false && <h3>Sorry, there are no results for '<strong>{document.querySelector("#peerFilterInput").value}</strong>', try another keyword</h3>}

                    <ul className={'peerListings'}>
                        {/* {data.allSanityPeerSupporters.edges.map((edge, i) => { */}
                        {posts.map((edge, postID) => {

                            const peerSupporterActive = edge.node.peerSupporterActive

                            console.log("translate 2 = " + translate)

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


                                                <p>{edge.node.peerSupporterFriendlyName.translate} can help with</p>
                                                <ul>
                                                    {edge.node.tags.map((thisEdge, tagID) => (
                                                        <li key={tagID}>
                                                            <span>{thisEdge.tagsTitle.en}</span>
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
    )
}

export default ListPeerSupporters

