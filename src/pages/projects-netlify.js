import React from "react"
import Layout from "../components/layout"
import SectionProjects from "../components/projects/projects-netlify-cms"

const Projects = ({ location }) => {
  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #efeff0;
        }
      `}
      </style>

      <Layout location={location}>
        <SectionProjects />
      </Layout >
    </>
  )
}

export default Projects
