import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ProjectTemplate from "../components/projects/project-item-md"




export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM YYYY")
        slug
        title
        category
        url
        intro
        coverimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`


//import latestProjectsStyles from '../components/homepage/latest-projects.module.scss'

// export default function Template({
//   data, pageContext // this prop will be injected by the GraphQL query below.
// }) {
// const { markdownRemark } = data // data.markdownRemark holds your post data
// const { frontmatter, html } = markdownRemark


const PortfolioPage = ({ data, pageContext, location }) => {

  return (
    <>
      <Layout location={location}>
        <ProjectTemplate data={data} pageContext={pageContext} />
      </Layout >
    </>
  )
}

export default PortfolioPage


