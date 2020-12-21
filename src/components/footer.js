import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import footerStyles from './footer.module.scss'
//import FooterBGround from "../images/svg/footer.inline.svg"
import LogoMLMVFooter from "../images/svg/logo-mlmv-footer.inline.svg"

const Footer = ({ location }) => {

  // const { t, i18n } = useTranslation("common")
  const { i18n } = useTranslation("common")

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
        <Link to={`/${i18n.language}`} title="Homepage" >
          <span>Go to the homepage</span>
          <LogoMLMVFooter />
        </Link>
        <p>Subscribe to a newsletter?</p>
        <p>List social links?</p>

        <nav>
          <ul><li>
            <Link
              to={`/${i18n.language}`}
              activeClassName={"activeNavItem"}
              tabIndex="0"
              title="Link to Homepage">
              My Life My Voice
                  </Link>
          </li>

            <li>
              <Link
                to={`/${i18n.language}/peer-supporters`}
                activeClassName={"activeNavItem"}
                tabIndex="0"
                title="Link to Peer supporters">
                Peer supporters
                </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/news-events`}
                activeClassName={"activeNavItem"}
                tabIndex="0"
                title="Link to News and Events">
                News &amp; events
                </Link>
            </li>

            <li>
              <Link
                to={`/${i18n.language}/about`}
                activeClassName={"activeNavItem"}
                tabIndex="0"
                title="Link to About My Life My Voice">
                About us
                </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/contact`}
                activeClassName={"activeNavItem"}
                tabIndex="0"
                title="Link to Contact us">
                Contact us
                </Link>
            </li>

            <li>
              <Link
                to={`/${i18n.language}/terms-and-use`}
                activeClassName={"activeNavItem"}
                tabIndex="0"
                title="Link to Terms of use">Terms of use
              </Link>
            </li>
            <li className="breakNav">
              <Link
                to={`/${i18n.language}/accessibility`}
                activeClassName={"activeNavItem"}
                tabIndex="0"
                title="Link to Website accessiblity">
                Website accessiblity
                </Link>
            </li>
          </ul>
        </nav>

        <p>© {new Date().getFullYear()} - {data.site.siteMetadata.title}</p>
      </footer>
    </>
  )
}

export default Footer