import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import BlockContent from "../components/common/blockContent"
import DefaultSection from "../components/common/defaultSection"

import footerStyles from '../components/forms/footerForm.module.scss'
import FormAccessibility from "../components/forms/formAccessibility"

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

    sanityAccessibilityContent {
      accessibilityContent {
        localized(language: $locale)
      }
      accessibilityTitle {
        translate(language: $language)
      }
      accessibilityDescription {
        translate(language: $language)
      }
      accessibilityContentActive
    }
}
`

const AccessibilityPage = ({ data, location, language }) => {

  return (
    <>
      <SEO
        title={data.sanityAccessibilityContent.accessibilityTitle.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanityAccessibilityContent.accessibilityDescription.translate}
      />
      <Layout location={location}>
        <DefaultSection>
          <div className={'contentWrapper'}>
            <BlockContent blocks={data.sanityAccessibilityContent.accessibilityContent.localized} />
          </div>
        </DefaultSection>

        <section className={footerStyles.form}>
          <div className={footerStyles.formWrapper}>
            <div>
              <div>
                <FormAccessibility location={location} />
              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}

export default AccessibilityPage