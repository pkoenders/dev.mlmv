import React from "react"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/common/blockContent"
import HomepageStyles from "../components/homepage/homepageStyles.module.scss"
import HeaderImg from "../components/homepage/homePageHeaderImg"
//import AlertSection from "../components/homepage/alerts"
//import PromotedSupporters from "../components/homepage/homePageSupporters"
import DefaultSection from "../components/defaultSection"
import ProcessSection from "../components/homepage/mlmvProcess"
import SupportSection from "../components/homepage/supportSection"
import UsrCommentsSection from "../components/homepage/userComments"
// import SectionContactForm from "../components/forms/contactForm"

export const query = graphql`
  query($language: String, $locale: JSON) {

    sanitySiteSettings {
      siteTitle
      siteDescription
      coverImage {
        asset {
          url
        }
      }
    }
    
    sanityHomepageSettings {
        homepageAlertsActive
        homepageSupportsActive
        homepageCommentsActive
    }

    allSanityHomepageAlert {
      edges {
        node {
          homepageAlertTitle {
            translate(language: $language)
          }
          homepageAlertDescription {
            localized(language: $locale)
          }
          alertLevel {
            alertLevel
          }
          homepageAlertName
          homepageAlertActive
          homepageAlertExpirey
          homepageAlertDismiss
        }
      }
    }

    sanityHomepageIntro {
      homepageTitle{
        translate(language: $language)
      }
      homepageDescription {
        translate(language: $language)
      }

      homepageIntroContent {
        localized(language: $locale)
      }
      homepageIntroActive
    }
    
    allSanityPeerSupporters(sort: {fields: order, order: ASC}) {
        edges {
            node {
                order
                peerSupporterActive
                
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

    allSanityCommunityComments {
      edges {
        node {
          communityCommentFriendlyName {
            translate(language: $language)
          }
          communityComment {
            translate(language: $language)
          }
          communityCommentActive
          communityCommentAddToHomepage
        }
      }
    }

    sanityContactContent {
      contactContent {
        localized(language: $locale)
      }
    }
}
`

const IndexPage = ({ data, location, language }) => {
  const { t, i18n } = useTranslation("index")
  //const { i18n } = useTranslation("index")

  return (
    <>
      <SEO
        title={data.sanityHomepageIntro.homepageTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityHomepageIntro.homepageDescription.translate}
      />
      <Layout location={location}>
        <HeaderImg data={data} language={language} />
        {/* <AlertSection data={data} language={language} /> */}
        <DefaultSection>
          <div className={HomepageStyles.homepageIntro}>
            <BlockContent blocks={data.sanityHomepageIntro.homepageIntroContent.localized} />
            <Link to={`/${i18n.language}/peer-supporters`} className={'buttonSecondary'} >{t("index:ctaViewPeerSupports")}</Link>
          </div>
        </DefaultSection>
        <ProcessSection />
        <SupportSection />
        {/* <PromotedSupporters data={data} language={language} /> */}
        <UsrCommentsSection data={data} language={language} />
        {/* <SectionContactForm data={data} language={language} location={location} /> */}
      </Layout>
    </>
  )
}

export default IndexPage