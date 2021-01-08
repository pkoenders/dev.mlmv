import React from "react"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"
import LogoMLMVHeader from "../../images/svg/logo-mlmv.inline.svg"
import IconCloseMenu from "../../images/svg/icon-close.inline.svg"
import IconLanguage from "../../images/svg/icon-language.inline.svg"

import IconAbout from "../../images/svg/icon-info.inline.svg"
import IconContact from "../../images/svg/icon-contact-us.inline.svg"
import IconTerms from "../../images/svg/icon-terms.inline.svg"
import IconAccessibilty from "../../images/svg/icon-accessible.inline.svg"
import '../../styles/index.scss'
import "../../styles/hamburger.scss"
import "./header.scss"


const Header = ({ location }) => {
  // const { t, i18n } = useTranslation("common")
  const { t, i18n } = useTranslation("common")
  var viewportWidth = 0
  const pathArray = location.pathname.split('/')
  var newPathName = ""
  for (var i = 2; i < pathArray.length; i++) {
    newPathName += "/";
    newPathName += pathArray[i];
  }


  //const link = location.pathname
  const isPartiallyActive = ({
    isPartiallyCurrent
  }) => {
    return isPartiallyCurrent
      ? { className: "activeNavItem" }
      : {}
  }


  let currentLanguage = "English"
  if (i18n.language === 'en') {
    currentLanguage = 'English'
  } else if (i18n.language === 'mi') {
    currentLanguage = 'Māori'
  }


  function toggleMobileNav() {
    const headerNavHomepage = document.querySelector(".homePage")
    const headerDiv = document.querySelector(".headerNav")
    const headerDivNav = document.querySelector(".headerNav ul li")
    const hamBurgerBtn = document.querySelector(".hamburger")
    const closeMenu = document.querySelector(".closeMenu")

    if (!headerDiv.classList.contains("open")) {
      openHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu)
    } else {
      closeHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu)
    }
    headerDivNav.addEventListener("click", function () {
      closeHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu)
    })

    window.addEventListener('resize', function () {
      viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      if (viewportWidth > 768) {
        closeHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu)
      }
    })
  }

  function openHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu) {
    //console.log("hamburger open")
    headerDiv.classList.add("open", "fillBground")
    hamBurgerBtn.classList.add("is-active")
    headerNavHomepage.classList.remove("hide")
    closeMenu.classList.remove("hide")
    hamBurgerBtn.setAttribute("aria-expanded", "true")
    hamBurgerBtn.setAttribute("aria-pressed", "true")
  }

  function closeHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu) {
    //console.log("hamburger close")
    headerDiv.classList.remove("open", "fillBground")
    hamBurgerBtn.classList.remove("is-active")
    headerNavHomepage.classList.add("hide")
    closeMenu.classList.add("hide")
    hamBurgerBtn.setAttribute("aria-expanded", "false")
    hamBurgerBtn.setAttribute("aria-pressed", "false")
  }

  const handleLanguageSelector = event => {
    //console.log("Language Selector")
    const localeSeletor = document.querySelector('.localeSeletor')
    const localeSeletorList = document.querySelector('.localeSeletor ul')
    const localeSeletorIconExpand = document.querySelector('.localeSeletor button svg')
    localeSeletor.classList.toggle("bground")
    localeSeletorList.classList.toggle("show")
    localeSeletorIconExpand.classList.toggle("open")
  }


  return (
    <>
      <header className="headerNavWrapper" aria-label="Main heading">
        <nav className="headerNav" aria-label="Main navigation" role="navigation">

          {location.pathname !== "/" + i18n.language
            ? <Link className="brand" to={`/${i18n.language}`} tabIndex="0" aria-label={t("common:mainNavHome")}>
              <LogoMLMVHeader alt={t("common:mainNavHome")} />
            </Link>
            : <span className="brand homePage">
              <LogoMLMVHeader alt={t("common:mainNavHome")} />
            </span>
          }

          {/* <Link to={`/${i18n.language}`} tabIndex="0" aria-label="Link to homepage">
            <LogoMLMVHeader alt={"Logo My Life my Voice"} />
          </Link> */}

          <button
            className="hamburger hamburger--squeeze"
            type="button"
            tabIndex="0"
            aria-label="Open and Close navigation menu"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-pressed="false"
            onClick={toggleMobileNav}
          >
            <span className="hamburger-label">{t("common:mainNavMenu")}</span>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <ul id="mainNavigation">
            <li className="homePage hide">
              <Link
                to={`/${i18n.language}`}
                activeClassName={"activeNavItem"}
                tabIndex="0"
                title={t("common:mainNavMLMV")}>
                {t("common:mainNavMLMV")}
              </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/peer-supporters`}
                activeClassName={"activeNavItem"}
                getProps={isPartiallyActive}
                tabIndex="0"
                title={t("common:mainNavPeerSupporters")}>
                {t("common:mainNavPeerSupporters")}
              </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/support-services`}
                activeClassName={"activeNavItem"}
                getProps={isPartiallyActive}
                tabIndex="0"
                title={t("common:mainNavSupportServices")}>
                {t("common:mainNavSupportServices")}
              </Link>
            </li>
            <li>
              <Link
                to={`/${i18n.language}/news-events`}
                activeClassName={"activeNavItem"}
                getProps={isPartiallyActive}
                tabIndex="0"
                title={t("common:mainNavNewsEvents")}>
                {t("common:mainNavNewsEvents")}
              </Link>
            </li>

            <li className="toggleMainMenu">
              <button
                id="toggleMainMenu"
              >
                {t("common:mainNavMore")}
              </button>
              <ul className="hide">
                <li>
                  <Link
                    to={`/${i18n.language}/about`}
                    activeClassName={"activeNavItem"}
                    tabIndex="0"
                    title={t("common:mainNavAbout")}>
                    <IconAbout aria-hidden="true" />
                    {t("common:mainNavAbout")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${i18n.language}/contact`}
                    activeClassName={"activeNavItem"}
                    tabIndex="0"
                    title={t("common:mainNavContact")}>
                    <IconContact aria-hidden="true" />
                    {t("common:mainNavContact")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${i18n.language}/terms-and-use`}
                    activeClassName={"activeNavItem"}
                    tabIndex="0"
                    title={t("common:mainNavTerms")}>
                    <IconTerms aria-hidden="true" />
                    {t("common:mainNavTerms")}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${i18n.language}/accessibility`}
                    activeClassName={"activeNavItem"}
                    tabIndex="0"
                    title={t("common:mainNavAccessibility")}>
                    <IconAccessibilty aria-hidden="true" />
                    {t("common:mainNavAccessibility")}
                  </Link>
                </li>
              </ul>
            </li>


            <li className="closeMenu breakNav hide">
              <button
                tabIndex="0"
                onClick={toggleMobileNav}>
                {t("common:mainNavCloseMenu")}
                <IconCloseMenu aria-hidden="true" />
              </button>
            </li>
          </ul>


          <div className="localeSeletor" aria-label="Select language">
            <button
              name="selectLanguage"
              tabIndex="0"
              onClick={handleLanguageSelector}
              aria-label={'Current language is set to ' + currentLanguage + ' Click to change'}
            >
              {/* {currentLanguage} */}
              <IconLanguage aria-hidden="true" />
            </button>

            <ul>
              {i18n.language === "en"
                ? ''
                : <li>
                  <Link
                    to={`/en${newPathName}`}
                    hrefLang="en"
                    tabIndex="0"
                    title="Switch language to English(NZ)" >
                    English
                  </Link>
                </li>
              }
              {i18n.language === "mi"
                ? ''
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
            </ul>
          </div>
        </nav>

      </header >
    </>
  )
};

export default Header