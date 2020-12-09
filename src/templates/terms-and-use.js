import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/blockContent"

import DefaultSection from "../components/defaultSection"



export const query = graphql`
  query($language: String, $locale: JSON) {
    site {
      siteMetadata {
        title
      }
    }

    sanityTermsOfUseContent {
      termsOfUseContent {
        localized(language: $locale)
      }
      termsOfUseTitle {
        translate(language: $language)
      }
      termsOfUseDescription{
        translate(language: $language)
      }
      termsOfUseContentActive
    }
}
`

const TermsPage = ({ data, location, language }) => {
  const { t, i18n } = useTranslation("aboutus")


  return (
    <>
      <SEO
        title={data.sanityTermsOfUseContent.termsOfUseTitle.translate + ' - ' + data.site.siteMetadata.title}
        description={data.sanityTermsOfUseContent.termsOfUseDescription.translate}
      />
      <Layout location={location}>
        <DefaultSection>
          <div className={'contentWrapper'}>
            <BlockContent blocks={data.sanityTermsOfUseContent.termsOfUseContent.localized} />
          </div>
        </DefaultSection>
      </Layout>
    </>
  )
}

export default TermsPage
