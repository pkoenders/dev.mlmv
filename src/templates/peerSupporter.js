import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PeerSupporterPage from "../components/peer-supporters/peer-supporter"

export const query = graphql`
  query($slug: String!) {
    sanityPeerSupporters(slug: { current: { eq: $slug } }) {
     
      peerSupporterFullName {
        en
      }

      peerSupporterFriendlyName {
        en
      }

      peerSupporterEmail

      coverImage {
        asset {
            fluid(maxWidth: 600) {
                ...GatsbySanityImageFluid
              }
          }
      }

      publishedAt(formatString: "DD MMMM YYYY")

      gender{
        genderTitle
      }

    
      location {
        location{
          en
        }
      }
      categories{
        categoriesTitle{
          en
        }
      }
      tags{
        tagsTitle{
          en
        }
      }
      peerShortDescription {
        en
      }
      peerLongDescription {
        _rawEn(resolveReferences: {maxDepth: 10})

        en {
          _rawChildren(resolveReferences: {maxDepth: 10})
         
        }
      }
    }
  }
`

//import latestProjectsStyles from '../components/homepage/latest-projects.module.scss'

// export default function Template({
//   data, pageContext // this prop will be injected by the GraphQL query below.
// }) {
// const { markdownRemark } = data // data.markdownRemark holds your post data
// const { frontmatter, html } = markdownRemark


const PeerSupporterTemplate = ({ data, pageContext, location }) => {

  return (
    <>
      <Layout location={location}>
        <PeerSupporterPage data={data} pageContext={pageContext} />
      </Layout >
    </>
  )
}

export default PeerSupporterTemplate


