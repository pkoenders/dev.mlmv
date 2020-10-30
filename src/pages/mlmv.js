import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
// import SectionWhatWeDo from "../components/homepage/what-we-do"
// import SectionLatestProjects from "../components/homepage/latest-projects"
// import SectionContact from "../components/homepage/contact"
import SEO from '../components/seo/seo'


const MlmvPage = ({ location }) => {

  const data = useStaticQuery(graphql`
    query MlmvPage {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title={'A versatile UI/UX designer - Tēnā koe, Welcome to my portfolio | ' + data.site.siteMetadata.title}
        description={'A versatile UI/UX designer with 20+ years of all-round industry experience.'}
      />
      <Layout location={location}>
        <h1>MLMV Test Page</h1>

        <p>This is a test page</p>
      </Layout>
    </>
  )
}

export default MlmvPage