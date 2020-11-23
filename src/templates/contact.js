import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"
import SectionContact from "../components/homepage/contact"

const ContactPage = ({ location }) => {
  // const { t, i18n } = useTranslation("contact")
  const { i18n } = useTranslation("contact")
  const IndexData = useStaticQuery(graphql`
    query ContactPage {
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
        title={'Contact My Life My Voice - ' + IndexData.site.siteMetadata.title}
        description={'the about page.'}
      />
      <Layout location={location}>
        <DefaultSection>

          <h1>My Life My Voice Contact page</h1>
          <p>This is placement page that needs to be designed and built</p>

          <Link to={`/${i18n.language}/peer-supporters`} >Search for Peer Supporters</Link>

        </DefaultSection>
        <SectionContact />
      </Layout>
    </>
  )
}

export default ContactPage