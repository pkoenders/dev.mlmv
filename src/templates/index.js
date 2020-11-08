import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"

const IndexPage = ({ location }) => {
  const { t, i18n } = useTranslation("index")
  const IndexData = useStaticQuery(graphql`
    query IndexPage {
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
        title={'Tēnā koe, Welcome My Life My Voice - ' + IndexData.site.siteMetadata.title}
        description={'A website to connect Peer Supportes to the disabled community.'}
      />
      <Layout location={location}>
        <DefaultSection>

          <h1>{t("index:title")}</h1>
          <p>This is placement page that needs to be designed and built</p>

          <Link to={`/${i18n.language}/peer-supporters`} >Search for Peer Supporters</Link>

        </DefaultSection>
      </Layout>
    </>
  )
}

export default IndexPage