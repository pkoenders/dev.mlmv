import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"
import SEO from '../components/seo/seo'

const MlmvTerms = ({ location }) => {
  const data = useStaticQuery(graphql`
    query MlmvTerms {
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
        title={'MLMV Terms of use - My Life My Voice | ' + data.site.siteMetadata.title}
        description={'All about My Life My Voice terms of website use.'}
      />
      <Layout location={location}>
        <DefaultSection>
          <h1>MLMV Terms of use</h1>
          <p>This is placement page that needs to be designed and built</p>
        </DefaultSection>
      </Layout>
    </>
  )
}

export default MlmvTerms