import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import peerListStyles from './peer-list.module.scss'

// if (peerResults === undefined) {
//     var peerResults = 1
//     console.log("Reset peerResults = " + peerResults)
// }


var peerResults = true


const ListPeerSupporters = () => {
    const data = useStaticQuery(graphql`
    query PeerSupportersQuery {
        allSanityPeerSupporters(sort: {fields: order, order: ASC}) {
            edges {
                node {
                    order
                    slug {
                        current
                    }
                    peerSupporterFullName {
                        mi
                        hi
                        en
                        sm
                    }
                    peerSupporterFriendlyName {
                        mi
                        hi
                        en
                        sm
                    }

                    peerShortDescription {
                        mi
                        hi
                        en
                        sm
                      }

                    tags {
                        
                        tagsTitle {
                            en
                        }
                    }


                    coverImage {
                        asset {
                            fluid(maxWidth: 600) {
                                ...GatsbySanityImageFluid
                              }
                        }
                    }
                }
            }
        }
    }
    `)

    const allPosts = data.allSanityPeerSupporters.edges
    const emptyQuery = ""

    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,

    })


    const handleInputChange = event => {
        //console.log(event.target.value)
        const query = event.target.value
        //const { data } = props

        const posts = data.allSanityPeerSupporters.edges || []
        const filteredData = posts.filter(post => {

            const description = post.node.peerShortDescription.en
            const title = post.node.peerSupporterFullName.en

            var tagList = ''
            if (post.node.tags) {
                post.node.tags.map((thisEdge, i) => (
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
                <h2>Peer supporters</h2>
                <div className={peerListStyles.wrapper}>
                    <input
                        className="peerFilterInput"
                        id="peerFilterInput"
                        type="text"
                        aria-label="Search"
                        placeholder="Type keywords to filter Peer supporters..."
                        onChange={handleInputChange}
                    />

                    {peerResults === false && <h3>Sorry, there are no results for '<strong>{document.querySelector("#peerFilterInput").value}</strong>', try another keyword</h3>}

                    <ul className={'peerListings'}>
                        {/* {data.allSanityPeerSupporters.edges.map((edge, i) => { */}
                        {posts.map((edge, i) => {

                            // const {excerpt} = node
                            // const {slug} = node.fields
                            // const description = node.peerShortDescription.en
                            // const title = node.peerSupporterFullName.en


                            // const slug = edge.node.slug.current
                            // const slug = edge.node.slug.current

                            return (
                                <li
                                    key={i}
                                    //data-sal="fade"
                                    data-sal-duration="300"
                                    data-sal-easing="ease"
                                //className={''}
                                >
                                    <Link to={`/peer-supporters/${edge.node.slug.current}`}>
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

                                            <h3>{edge.node.peerSupporterFullName.en}</h3>
                                            <p>{edge.node.peerShortDescription.en}</p>


                                            <p>{edge.node.peerSupporterFriendlyName.en} can help with</p>
                                            <ul>
                                                {edge.node.tags.map((thisEdge, i) => (
                                                    <li key={i}>
                                                        <span>{thisEdge.tagsTitle.en}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* <p>{edge.node.frontmatter.intro}</p> */}
                                        </span>
                                    </Link>
                                </li>
                            )

                        })}
                    </ul>
                </div>
            </section >
        </>
    )
}

export default ListPeerSupporters

