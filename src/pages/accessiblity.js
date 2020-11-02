import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"
import SEO from '../components/seo/seo'

const MlmvAccessibility = ({ location }) => {
  const data = useStaticQuery(graphql`
    query MlmvAccessibility {
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
        title={'MLMV Accessibility - My Life My Voice | ' + data.site.siteMetadata.title}
        description={'All about My Life My Voice accessiblity of website use.'}
      />
      <Layout location={location}>
        <DefaultSection>
          <h1>MLMV Accessibility</h1>
          <p>This is placement page that needs to be designed and built</p>
        </DefaultSection>
      </Layout>
    </>
  )
}

export default MlmvAccessibility