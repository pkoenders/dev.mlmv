import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionContact from "../components/homepage/contact"

const Contact = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ContactData {
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
          background-color: #C1F1F6;
        }
        .section-layout-wide {
          margin-top:60px !important;
        }
      `}
      </style>
      <SEO
        title={'Contact | ' + data.site.siteMetadata.title}
        description={'I would love to be contacted to discuss work commissions or just hear your thoughts and ideas.'}
      />
      <Layout location={location}>
        <SectionContact />
      </Layout >
    </>
  )
}

export default Contact
