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

    sanityAccessibilityContent {
      title {
        translate(language: $language)
      }
      description {
        translate(language: $language)
      }
      content {
        localized(language: $locale)
      }
    }
  }
`

const AccessibilityPage = ({ data, location, language }) => {
  return (
    <>
      <SEO
        title={data.sanityAccessibilityContent.title.translate + ' | ' + data.sanitySiteSettings.title}
        description={data.sanityAccessibilityContent.description.translate}
      />
      <Layout location={location}>
        <DefaultSection>
          <div className={'contentWrapper'}>
            <h1>{data.sanityAccessibilityContent.title.translate}</h1>
            <BlockContent blocks={data.sanityAccessibilityContent.content.localized} />
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