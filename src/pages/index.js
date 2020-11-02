import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"
import SectionContact from "../components/homepage/contact"
import SEO from '../components/seo/seo'


const MlmvIndex = ({ location }) => {

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
        title={'Tēnā koe, Welcome My Life My Voice - ' + data.site.siteMetadata.title}
        description={'A website to connect Peer Supportes to the disabled community.'}
      />
      <Layout location={location}>
        <DefaultSection>
          <h1>My Life My Voice homepage</h1>
          <p>This is placement page that needs to be designed and built</p>

          <Link to="/peer-supporters" >Search for Peer Supporters</Link>
        </DefaultSection>

        <SectionContact />
      </Layout>
    </>
  )
}

export default MlmvIndex