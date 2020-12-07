import React from "react"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import HeaderImg from "../components/homepage/homePageHeaderImg"
import PromotedSupports from "../components/homepage/homePageSupporters"
import DefaultSection from "../components/defaultSection"
import ProcessSection from "../components/homepage/mlmvProcess"
import SupportSection from "../components/homepage/supportSection"
import SectionContact from "../components/homepage/contact"

export const query = graphql`
  query($language: String) {

    site {
      siteMetadata {
        title
      }
    }

    allSanityPeerSupporters(sort: {fields: order, order: ASC}) {
        edges {
            node {
                order
                peerSupporterActive
                peerSupporterAddToHomepage
                peerSupporterEmail
                slug {
                    current
                }
                peerSupporterFullName {
                    translate(language: $language)
                }
                peerSupporterFriendlyName {
                    translate(language: $language)
                }

                peerShortDescription {
                    translate(language: $language)
                  }

                tags {

                    tagsTitle {
                      translate(language: $language)
                    }
                }


                coverImage {
                    asset {
                        fluid(maxWidth: 545) {
                            ...GatsbySanityImageFluid
                          }
                    }
                }
            }
        }
    }
}
`

const IndexPage = ({ data, location, language }) => {
  const { t, i18n } = useTranslation("index")

  return (
    <>
      <SEO
        title={'Tēnā koe, Welcome My Life My Voice - ' + data.site.siteMetadata.title}
        description={'A website to connect Peer Supportes to the disabled community.'}
      />
      <Layout location={location}>
        <HeaderImg />
        <DefaultSection>
          {/* <LogoMLMV style={{ margin: '-200 0 0 0', position: 'absolute' }} /> */}
          {/* <h1>{t("index:title")}</h1> */}
          <div className='homepageIntro'>
            <h1>We work with you and your family</h1>
            <p>We talk about what a good life looks life for you and help you choose how you want to make a good life happen.</p>
            <Link to={`/${i18n.language}/peer-supporters`} className={'buttonSecondary'} >View our Peer Supporters</Link>
          </div>
        </DefaultSection>
        <ProcessSection />
        <SupportSection />
        <PromotedSupports data={data} language={language} />
        <SectionContact />
      </Layout>
    </>
  )
}

export default IndexPage