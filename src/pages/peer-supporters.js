import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionPeerSupporters from "../components/peer-supporters/peer-supporters"

const PeerSupporters = ({ location }) => {
  const data = useStaticQuery(graphql`
  query PeerSupportersData {
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
      // title={'Projects | ' + data.site.siteMetadata.title}
      // description={'Listing all UI/UX and Graphic Design projects.'}
      />
      <Layout location={location}>
        <SectionPeerSupporters />
      </Layout >
    </>
  )
}

export default PeerSupporters
