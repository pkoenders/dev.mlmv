import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import peerListStyles from './peer-list.module.scss'

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

                    tags{
                        tagsTitle{
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

    return (

        <section className={peerListStyles.latestProjectsSection + ' section-layout-wide'}>
            <h2>Peer supporters</h2>
            <div className={peerListStyles.wrapper}>
                <ul>
                    {data.allSanityPeerSupporters.edges.map((edge, i) => (
                        <li
                            key={i}
                            data-sal="fade"
                            data-sal-duration="300"
                            data-sal-easing="ease" >
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
                    ))}
                </ul>
            </div>
        </section>

    )
}

export default ListPeerSupporters

