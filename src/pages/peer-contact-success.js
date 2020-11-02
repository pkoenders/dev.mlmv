import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import PeerSectionContactSuccess from "../components/peer-supporters/contact-success"

const PeerContactSuccess = ({ location }) => {

  const data = useStaticQuery(graphql`
    query PeerContactSuccessData {
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
          //background: rgb(194, 242, 247);
         // background: linear-gradient(176deg, rgba(194, 242, 247, 1) 0%, rgba(150, 198, 202, 1) 100%);
          background-color: #f2952a;
        }
        .section-layout-wide {
          margin-top:60px !important;
        }
      `}
      </style>
      <SEO
        title={'Contact success | ' + data.site.siteMetadata.title}
        description={'We have received your message and will reply to you soon.'}

      />
      <Layout location={location}>
        <PeerSectionContactSuccess />
      </Layout >
    </>
  )
}

export default PeerContactSuccess
