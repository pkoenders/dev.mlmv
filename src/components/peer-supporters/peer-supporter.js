import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import SEO from '../seo/seo'
import Img from 'gatsby-image'
import BlockContent from '../blockContent'
import peerSupporterStyles from './peer-supporter.module.scss'
// import BlockContent from '@sanity/block-content-to-react'
// import IconOpenExternal from "../../images/svg/icon-open-external.inline.svg"
import IconNext from "../../images/svg/icon-next.inline.svg"
import IconPrev from "../../images/svg/icon-prev.inline.svg"
import IconUp from "../../images/svg/icon-up.inline.svg"



//export default function ProjectTemplate({ data }) {
const PeerSupporterTemplate = ({ props, data, pageContext }) => {



  const Metadata = useStaticQuery(graphql`
      query peerSupportersData {
        site {
          siteMetadata {
            title
          }
        }
      }
  `)


  // console.log(pageContext)


  const { sanityPeerSupporters } = data // data.markdownRemark holds your post data
  const peerData = sanityPeerSupporters



  // const { sanityPeerSupportersBody } = props
  // const peerBody = sanityPeerSupportersBody
  // const link = frontmatter.url
  // const { next, previous } = pageContext

  // console.log('peerData =' + peerData)



  //const { markdownRemark } = data // data.markdownRemark holds your post data
  //const { markdownRemark } = data.allSanityPeerSupporters.edges.node // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  //const link = "http://" + frontmatter.url
  // const link = frontmatter.url

  const { next, previous } = pageContext


  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #efeff0;
          background: rgb(255,255,255);
          background: linear-gradient(158deg, rgba(255,255,255,1) 0%, rgba(186,186,186,1) 100%);
        }
      `}
      </style>
      <SEO
        title={peerData.peerSupporterFullName.en + ' - Peer Supporter | ' + Metadata.site.siteMetadata.title}
      //description={frontmatter.intro}
      //image={frontmatter.coverimage.childImageSharp.fluid.src}
      />
      <section className={peerSupporterStyles.sectionPeerSupporter + ' section-layout-wide'}>



        <div className={peerSupporterStyles.prevNext + ' projects-nav'}>
          <div>
            {previous &&
              <Link
                className={peerSupporterStyles.prev}
                to={`/peer-supporters/${previous.slug.current}`}
              >
                <IconPrev />
                <span>Previous</span>

              </Link>
            }

            <Link
              className={peerSupporterStyles.prev}
              to={`/peer-supporters/`}
            >
              <IconUp />
              <span>Back to Peer supporters list</span>

            </Link>


            {next &&
              <Link
                className={peerSupporterStyles.next}
                to={`/peer-supporters/${next.slug.current}`}
              >
                <span>Next</span>
                <IconNext />
              </Link>
            }
          </div>
        </div>


        <div className={peerSupporterStyles.sectionPeerSupporterWrapper}>

          <div className={peerSupporterStyles.content}>
            <div className={peerSupporterStyles.header}>

              <h1>{peerData.peerSupporterFullName.en}</h1>

              {/* {peerData.peerSupporterFriendlyName.en &&
                <p>{peerData.peerSupporterFriendlyName.en}</p>
              } */}

              <Img style={{ maxWidth: '300px' }}
                fluid={peerData.coverImage.asset.fluid}
                loading="lazy"
              />

              <p>Gender: <span>{peerData.gender.genderTitle}</span></p>

              {peerData.publishedAt &&
                <p>Updated: <span>{peerData.publishedAt}</span></p>
              }

              <p>Location: <span>{peerData.location.location.en}</span></p>

              <p>Gender: <span>{peerData.gender.genderTitle}</span></p>

              <p>Short Description: <span>{peerData.peerShortDescription.en}</span></p>

              {/* <div>
                <BlockContent blocks={peerData.body.en._rawChildren} />
              </div> */}
              <div>
                <p>Long Description:  </p><span>
                  <BlockContent blocks={peerData.peerLongDescription._rawEn} />
                </span>

              </div>


              {/* {_rawChildren && <BlockContent blocks={_rawChildren} />} */}

              <p>{peerData.peerSupporterFriendlyName.en} can help with</p>
              <ul>
                {peerData.categories.map((edge, i) => (
                  <li key={i}>
                    <span>{edge.categoriesTitle.en}</span>
                  </li>
                ))}
              </ul>

              <p>Tags</p>
              <ul>
                {peerData.tags.map((edge, i) => (
                  <li key={i}>
                    <span>{edge.tagsTitle.en}</span>
                  </li>
                ))}
              </ul>

            </div>
            {/* <div className={projectStyles.contentInner}>
              <div
                className={projectStyles.contentMD}
                dangerouslySetInnerHTML={{ __html: html }}>
              </div>
            </div>  */}
          </div>
        </div>
      </section>
    </>
  )
}

export default PeerSupporterTemplate