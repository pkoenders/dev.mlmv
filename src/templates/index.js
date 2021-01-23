import React from "react"
import { graphql, Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/common/blockContent"
import HomepageStyles from "../components/homepage/homepageStyles.module.scss"
import HeaderImg from "../components/homepage/homePageHeaderImg"
import AlertSection from "../components/homepage/alerts"
import ProcessSection from "../components/homepage/mlmvProcess"
import SupportSection from "../components/homepage/supportSection"
import UsrCommentsSection from "../components/homepage/userComments"

import IconWave from "../images/svg/icon-wave.inline.svg"
import FormContact from "../components/forms/formContact"
import contactStyles from '../components/forms/contactForm.module.scss'

export const query = graphql`
  query($language: String, $locale: JSON) {

    sanitySiteSettings {
      title
      description{
        translate(language: $language)
      }
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

    allSanityHomepageAlert(sort: {order: ASC, fields: order}) {
      edges {
        node {
          order
          title {
            translate(language: $language)
          }
          description {
            localized(language: $locale)
          }
          level {
            alertLevel
          }
          active
          expirey
          dismiss
        }
      }
    }

    sanityHomepageIntro {
      title{
        translate(language: $language)
      }

      content {
        localized(language: $locale)
      }
      active
    }
    
  
    allSanityCommunityComments {
      edges {
        node {
          shortName {
            translate(language: $language)
          }
          content {
            translate(language: $language)
          }
          active
          addToHomepage
        }
      }
    }

    sanityContactContent {
      content {
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
        title={data.sanityHomepageIntro.title.translate + ' | ' + data.sanitySiteSettings.title}
        description={data.sanitySiteSettings.description.translate}
      />
      <Layout location={location}>

        <style type="text/css">
          {`
                body  {
                 background-color: #121923 !important;
                 }
             `}
        </style>

        <HeaderImg data={data} language={language} />
        <AlertSection data={data} language={language} />
        <section className={HomepageStyles.wrapper}>
          <div className={HomepageStyles.homepageIntro}>
            <BlockContent blocks={data.sanityHomepageIntro.content.localized} />
            <Link to={`/${i18n.language}/peer-supporters`} className={'buttonSecondary'} >{t("index:ctaViewPeerSupports")}</Link>
          </div>
        </section>
        <ProcessSection />
        <SupportSection />
        <UsrCommentsSection data={data} language={language} />
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
          <div className={contactStyles.contactFormWrapper}>
            <div className={contactStyles.contactForm}>
              <IconWave />
              <BlockContent blocks={data.sanityContactContent.content.localized} />
              <FormContact data={data} language={language} location={location} />
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default IndexPage