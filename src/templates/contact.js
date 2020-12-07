import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import DefaultSection from "../components/defaultSection"
import SectionContact from "../components/forms/contact"

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
          <SectionContact />
        </DefaultSection>

      </Layout>
    </>
  )
}

export default ContactPage