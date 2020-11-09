import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../seo/seo'
import Img from 'gatsby-image'
import BlockContent from '../blockContent'
import peerSupporterStyles from './peer-supporter.module.scss'
import contactStyles from '../homepage/contact.module.scss'
// import IconOpenExternal from "../../images/svg/icon-open-external.inline.svg"
import IconNext from "../../images/svg/icon-next.inline.svg"
import IconPrev from "../../images/svg/icon-prev.inline.svg"
import IconUp from "../../images/svg/icon-up.inline.svg"

//export default function ProjectTemplate({ data }) {
const PeerSupporterTemplate = ({ data, pageContext }) => {

  const { t, i18n } = useTranslation("peerSupporter")
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
  //const { next, previous } = data
  const { next, previous } = data
  console.log(peerData.next)
  // const next = peerData.next
  // const previous = peerData.previous

  //const next = pageContext.next
  //const previous = pageContext.previous

  console.log("previous = " + previous)
  console.log("next = " + next)
  return (
    <>
      <style type="text/css">
        {`
        body  {
          background: rgb(151, 219, 246);
          background: linear-gradient(180deg, rgba(151, 219, 246, 1) 0%, rgba(135, 200, 226, 1) 67%);
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
                to={`/${i18n.language}/peer-supporters/${previous.slug.current}`}
              >
                <IconPrev />
                <span>Previous</span>
              </Link>
            }

            <Link
              className={peerSupporterStyles.prev}
              to={`/${i18n.language}/peer-supporters/`}
            >
              <IconUp />
              <span>Back to Peer supporters list</span>
            </Link>

            {next &&
              <Link
                className={peerSupporterStyles.next}
                to={`/${i18n.language}/peer-supporters/${next.slug.current}`}
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

              <h1>{peerData.peerSupporterFullName.translate}</h1>

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

              <p>Short Description: <span>{peerData.peerShortDescription.translate}</span></p>

              <div>
                <p>Long Description: </p>
                <span>
                  <BlockContent blocks={peerData.peerLongDescription.localized} />
                  {/* <BlockContent blocks={peerData.peerLongDescription.translate._rawChildren(resolveReferences: {maxDepth: 10}) } /> */}
                </span>
              </div>

              <p>{peerData.peerSupporterFriendlyName.translate} can help with</p>
              <ul>
                {peerData.categories.map((edge, catid) => (
                  <li key={catid}>
                    <span>{edge.categoriesTitle.en}</span>
                  </li>
                ))}
              </ul>

              <p>Tags</p>
              <ul>
                {peerData.tags.map((edge, tagid) => (
                  <li key={tagid}>
                    <span>{edge.tagsTitle.en}</span>
                  </li>
                ))}
              </ul>

              <p>Contact {peerData.peerSupporterFullName.translate}</p>
              <div className={contactStyles.contactFormInput}>
                <form
                  name="peer-supporter-contact-form"
                  method="post"
                  action="../peer-contact-success"
                  netlify-honeypot="bot-field"
                  data-netlify="true"

                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="peer-supporter-contact-form" />
                  <input type="hidden" name="message-for" value={peerData.peerSupporterFullName.en} />
                  <input type="hidden" name="peer-email" value={peerData.peerSupporterEmail} />
                  <p>
                    <label htmlFor="name">
                      <span>Your name (required)</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        id="name"
                        required
                      />
                    </label>
                  </p>
                  <p>
                    <label htmlFor="email">
                      <span>Your email address (required)</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        id="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                      />
                    </label>
                  </p>
                  <p>
                    <label htmlFor="subject">
                      <span>Subject</span>
                      <input
                        type="text"
                        name="subject"
                        id="subject" />
                    </label>
                  </p>
                  <p>
                    <label htmlFor="message">
                      <span>Message</span>
                      <textarea
                        name="message"
                        id="message"
                        rows="5" />
                    </label>
                  </p>
                  <p>
                    <button
                      type="submit"
                      className="buttonPrimary">Submit form</button>
                  </p>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PeerSupporterTemplate