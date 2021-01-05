import React from "react"
import { graphql, Link } from "gatsby"
import { useTranslation } from "react-i18next"
import SEO from '../components/seo/seo'
import Layout from "../components/layout"
import DefaultSection from "../components/common/defaultSection"
import submitStyles from "../components/common/submit.module.scss"
import SubmitSuccess from "../images/svg/icon-contact-success.inline.svg"


export const query = graphql`
query {
  sanitySiteSettings {
    siteTitle
    siteDescription
  }
}
`

const Submit = ({ data, location, language }) => {
  const { t, i18n } = useTranslation("submit")
  return (
    <>
      <style type="text/css">
        {`
        body  {
         background-color:  #121923;
        }
      `}
      </style>
      <SEO
        title={'You have sussuessfully submitted out form!  | ' + data.sanitySiteSettings.siteTitle}
      />
      <Layout location={location} >
        {/* <SectionContactForm data={data} language={language} location={location} /> */}
        <DefaultSection>
          <div className={'contentWrapper'}>
            <div className={submitStyles.wrapper}>
              <h1>{t('common:submitHeader')}</h1>
              <SubmitSuccess />
              <p>{t('common:submitContent')}</p>
              <Link to={`/${i18n.language}/`} className={'buttonSecondary'} >{t('common:submitCTA')}</Link>
            </div>
          </div>
        </DefaultSection>
      </Layout>
    </>
  )
}

export default Submit