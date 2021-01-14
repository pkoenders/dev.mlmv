import React from "react"
import { graphql, Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/common/blockContent"
import HomepageStyles from "../components/homepage/homepageStyles.module.scss"
import HeaderImg from "../components/homepage/homePageHeaderImg"
import AlertSection from "../components/homepage/alerts"
import DefaultSection from "../components/defaultSection"
import ProcessSection from "../components/homepage/mlmvProcess"
import SupportSection from "../components/homepage/supportSection"
import UsrCommentsSection from "../components/homepage/userComments"

import IconWave from "../images/svg/icon-wave.inline.svg"
import FormContact from "../components/forms/formContact"
import contactStyles from '../components/forms/contactForm.module.scss'

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
        homepageCommentsActive
    }

    sanityHomepageHeader {
      active
      title {
        translate(language: $language)
      }
      coverImage {
        asset {
          fluid(maxWidth: 980) {
              ...GatsbySanityImageFluid
            }
        }
        alt {
          translate(language: $language)
        }
      }
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

  return (
    <>
      <SEO
        title={data.sanityHomepageIntro.homepageTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityHomepageIntro.homepageDescription.translate}
      />
      <Layout location={location}>
        <HeaderImg data={data} language={language} />
        <AlertSection data={data} language={language} />
        <DefaultSection>
          <div className={HomepageStyles.homepageIntro}>
            <BlockContent blocks={data.sanityHomepageIntro.homepageIntroContent.localized} />
            <Link to={`/${i18n.language}/peer-supporters`} className={'buttonSecondary'} >{t("index:ctaViewPeerSupports")}</Link>
          </div>
        </DefaultSection>
        <ProcessSection />
        <SupportSection />
        <UsrCommentsSection data={data} language={language} />
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
          <div className={contactStyles.contactFormWrapper}>
            <div className={contactStyles.contactForm}>
              <IconWave />
              <BlockContent blocks={data.sanityContactContent.contactContent.localized} />
              <FormContact data={data} language={language} location={location} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage