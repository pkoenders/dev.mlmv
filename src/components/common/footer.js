import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import footerStyles from './footer.module.scss'
import LogoMLMVFooter from "../../images/svg/logo-mlmv.inline.svg"
import LogoSanity from "../../images/svg/logo-sanity.inline.svg"

const Footer = ({ location }) => {

  // const { t, i18n } = useTranslation("common")
  const { t, i18n } = useTranslation("common")

  // const pathArray = location.pathname.split('/')
  // var newPathName = ""
  // for (var i = 2; i < pathArray.length; i++) {
  //   newPathName += "/";
  //   newPathName += pathArray[i];
  // }

  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title,
          author,
          year
        }
      }
    }
  `)

  return (
    <>

      <footer className={footerStyles.footer}>
        <Link to={`/${i18n.language}`} title={t("common:mainNavHome")} >
          <LogoMLMVFooter aria-hidden="true" />
        </Link>

        <nav>
          <ul><li>
            <Link
              to={`/${i18n.language}`}
              activeClassName={"activeNavItem"}
              title={t("common:mainNavMLMV")}>
              {t("common:mainNavMLMV")}
            </Link>
          </li>

            <li>
              <Link
                to={`/${i18n.language}/peer-supporters`}
                activeClassName={"activeNavItem"}
                title={t("common:mainNavPeerSupporters")}>
                {t("common:mainNavPeerSupporters")}
              </Link>
            </li>

            <li>
              <Link
                to={`/${i18n.language}/support-services`}
                activeClassName={"activeNavItem"}
                title={t("common:mainNavSupportServices")}>
                {t("common:mainNavSupportServices")}
              </Link>
            </li>

            <li>
              <Link
                to={`/${i18n.language}/news-events`}
                activeClassName={"activeNavItem"}
                title={t("common:mainNavNewsEvents")}>
                {t("common:mainNavNewsEvents")}
              </Link>
            </li>

            <li>
              <Link
                to={`/${i18n.language}/about`}
                activeClassName={"activeNavItem"}
                title={t("common:mainNavAbout")}>
                {t("common:mainNavAbout")}
              </Link>
            </li>

            <li>
              <Link
                to={`/${i18n.language}/contact`}
                activeClassName={"activeNavItem"}
                title={t("common:mainNavContact")}>
                {t("common:mainNavContact")}
              </Link>
            </li>

            <li>
              <Link
                to={`/${i18n.language}/terms-and-use`}
                activeClassName={"activeNavItem"}
                title={t("common:mainNavTerms")}>
                {t("common:mainNavTerms")}
              </Link>
            </li>
            <li className="breakNav">
              <Link
                to={`/${i18n.language}/accessibility`}
                activeClassName={"activeNavItem"}
                title={t("common:mainNavAccessibility")}>
                {t("common:mainNavAccessibility")}
              </Link>
            </li>
          </ul>
        </nav>

        <p className={footerStyles.copyRight}>© {new Date().getFullYear()} - {data.site.siteMetadata.title}</p>

        {location.pathname === "/" + i18n.language
          ? <a href="https://www.sanity.io" title="Structured content powered by Sanity.io" className={footerStyles.sanity} >
            <LogoSanity />
          </a>
          : ''
        }
      </footer>
    </>
  )
}

export default Footer