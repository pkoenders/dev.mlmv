import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionProjects from "../components/projects/projects-md"

const Projects = ({ location }) => {
  const data = useStaticQuery(graphql`
  query ProjectsData {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #efeff0;
        }
        .section-layout-wide {
          margin-top:60px !important;
        }
      `}
      </style>

      <SEO
        title={'Projects | ' + data.site.siteMetadata.title}
        description={'Listing all UI/UX and Graphic Design projects.'}
      />
      <Layout location={location}>
        <SectionProjects />
      </Layout >
    </>
  )
}

export default Projects
