import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import latestProjectsStyles from '../homepage/latest-projects.module.scss'

const LatestProjects = () => {

    const data = useStaticQuery(graphql`
    query ProjectsMDQuery {

        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {frontmatter: {category: {}, posttype: {eq: "project"}}}
            limit: 1000
            ) 
            {
                edges {
                node {
                    frontmatter {
                        slug
                        date
                        category
                        url
                        addtohomepage
                        title
                        coverimage{
                            childImageSharp {
                                fluid(maxWidth: 720, maxHeight: 460, quality: 50) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        intro
                    }
                }
            }
        }
    }
    `)

    return (

        <section className={latestProjectsStyles.latestProjectsSection + ' section-layout-wide'}>
            <h2>My projects</h2>


            <div className={latestProjectsStyles.wrapper}>
                <ul>
                    {data.allMarkdownRemark.edges.map((edge, i) => (
                        <li
                            key={i}
                            data-sal="fade"
                            data-sal-duration="300"
                            data-sal-easing="ease" >
                            <Link to={`/projects/${edge.node.frontmatter.slug}`}>
                                <Img
                                    alt={edge.node.frontmatter.title}
                                    fluid={edge.node.frontmatter.coverimage.childImageSharp.fluid}
                                    loading="lazy"
                                />
                                <span>
                                    <h3>{edge.node.frontmatter.title}</h3>
                                    <p>{edge.node.frontmatter.intro}</p>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    )
}

export default LatestProjects

