import React from "react"
import { Link } from "gatsby"
//import Img from 'gatsby-image'
//import PlaceImage from './image/image'
import { useTranslation } from "react-i18next"

import LogoMLMVHeader from "../images/svg/logo-mlmv.inline.svg"
import IconTick from "../images/svg/icon-tick-nav.inline.svg"
import IconClose from "../images/svg/icon-close.inline.svg"
import '../styles/index.scss'
import "../styles/hamburger.scss"
import "./header.scss"

const Header = ({ data, location }) => {

  // const { t, i18n } = useTranslation("common")
  const { i18n } = useTranslation("common")

  const pathArray = location.pathname.split('/')
  var newPathName = ""
  for (var i = 2; i < pathArray.length; i++) {
    newPathName += "/";
    newPathName += pathArray[i];
  }

  return (
    <>
      <header className="headerNavWrapper fillBground" aria-label="Main heading">

        {location.pathname !== "/" + i18n.language
          ? <Link to={`/${i18n.language}`} tabIndex="0" aria-label="Link to homepage">
            {/* <span>Link to homepage</span> */}
            <LogoMLMVHeader alt={"Logo My Life my Voice - Link to homepage"} />
            {/* <b>My Life My Voice</b> */}
          </Link>
          : ""
        }

        <nav className="header-nav" role="navigation">

          <button className="hamburger hamburger--squeeze" type="button" tabIndex="0" aria-label="Open and Close navigation menu" aria-controls="mainNavigation" aria-expanded="false" aria-pressed="false">
            <span className="hamburger-label">Menu</span>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <ul id="mainNavigation">
            <li>
              <Link
                to={`/${i18n.language}`}
                tabIndex="0"
                title="Link to Homepage">
                My Life My Voice
              </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/peer-supporters`}
                tabIndex="0"
                title="Link to Peer Supporters">
                Peer Supporters
                </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/contact`}
                tabIndex="0"
                title="Link to Contact us">
                Contact us
                </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/about`}
                tabIndex="0"
                title="Link to About My Life My Voice">
                About My Life My Voice
                </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/terms-and-use`}
                tabIndex="0"
                title="Link to Terms of use">Terms of use
              </Link>
            </li>
            <li className="breakNav">
              <Link
                to={`/${i18n.language}/accessibility`}
                tabIndex="0"
                title="Link to Website accessiblity">
                Website accessiblity
                </Link>
            </li>
            {i18n.language === "en"
              ? <li>
                <Link
                  to={`/en${newPathName}`}
                  hrefLang="en"
                  tabIndex="0"
                  title="Selected language is English(NZ)" >English(NZ)
                <IconTick aria-hidden="true" />
                </Link>
              </li>
              : <li>
                <Link
                  to={`/en${newPathName}`}
                  hrefLang="en"
                  tabIndex="0"
                  title="Switch language to English(NZ)" >
                  English(NZ)
                  </Link>
              </li>
            }
            {i18n.language === "mi"
              ? <li>
                <Link
                  to={`/mi${newPathName}`}
                  hrefLang="mi"
                  tabIndex="0"
                  title="Selected language is  Māori">
                  Māori<IconTick aria-hidden="true" />
                </Link>
              </li>
              : <li>
                <Link
                  to={`/mi${newPathName}`}
                  hrefLang="mi"
                  tabIndex="0"
                  title="Switch language to Māori">
                  Māori
                  </Link>
              </li>
            }
            <li>
              <button
                aria-label="Close navigation menu"
                tabIndex="0">Close menu
                  <IconClose aria-hidden="true" />
              </button>
            </li>
          </ul>
        </nav>
      </header >
    </>
  )
};

export default Header