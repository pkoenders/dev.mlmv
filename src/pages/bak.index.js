import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SectionWhatWeDo from "../components/homepage/what-we-do"
import SectionLatestProjects from "../components/homepage/latest-projects"
import SectionContact from "../components/homepage/contact"
import SEO from '../components/seo/seo'


const IndexPage = ({ location }) => {

  const data = useStaticQuery(graphql`
    query IndexData {
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
        <SectionWhatWeDo />
        <SectionLatestProjects />
        <SectionContact />
      </Layout>
    </>
  )
}

export default IndexPage