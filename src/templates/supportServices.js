import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import SectionSupportServices from "../components/support-services/support-services"

export const query = graphql`
  query($language: String) {

    sanitySiteSettings {
      siteTitle
      siteDescription
      coverImage {
        asset {
          url
        }
      }
    }

    sanitySupportServicesHomepage {
      description {
        translate(language: $language)
      }
      title {
        translate(language: $language)
      }
    }

    allSanityTags(sort: {fields: tagsTitle___en, order: ASC}) {
      edges {
          node {
              tagsTitle {
                  translate(language: $language)
              }
          }
      }
    }
  
    allSanitySupportServices(sort: {fields: title___en, order: ASC}) {
        edges {
            node {
                order
                url
                telephone
                email
                active
                slug {
                    current
                }
                location {
                  location {
                    translate(language: $language)
                  }
                }
                title {
                    translate(language: $language)
                }
               
                description {
                    translate(language: $language)
                  }

                tags {
                    tagsTitle {
                      translate(language: $language)
                    }
                }
            }
        }
    }
}
`

const SupportServicesTemplate = ({ data, pageContext, location, language }) => {

  return (
    <>
      <style type="text/css">
        {`
        body  {
         background-color:  #d9e6ec;
        }
      `}
      </style>
      <SEO
        title={data.sanitySupportServicesHomepage.title.translate + ' | ' + data.sanitySiteSettings.siteTitle}
        description={data.sanitySupportServicesHomepage.description.translate}
      />
      <Layout location={location}>
        <SectionSupportServices data={data} location={location} language={language} />
      </Layout >
    </>
  )
}

export default SupportServicesTemplate
