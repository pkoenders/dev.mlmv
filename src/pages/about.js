import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"
import SEO from '../components/seo/seo'

const MlmvAbout = ({ location }) => {
  const data = useStaticQuery(graphql`
    query MlmvAbout {
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
        title={'About us - My Life My Voice | ' + data.site.siteMetadata.title}
        description={'All about My Life My Voice.'}
      />
      <Layout location={location}>
        <DefaultSection>
          <h1>About My Life My Voice</h1>
          <p>This is placement page that needs to be designed and built</p>
        </DefaultSection>
      </Layout>
    </>
  )
}

export default MlmvAbout