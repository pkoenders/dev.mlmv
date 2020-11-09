import React from "react"
import { Link } from "gatsby"
//import Img from 'gatsby-image'
//import PlaceImage from './image/image'
import { useTranslation } from "react-i18next"

import LogoMLMVHeader from "../images/svg/logo-mlmv.inline.svg"
import IconTick from "../images/svg/icon-tick.inline.svg"
import '../styles/index.scss'
import "../styles/hamburger.scss"
import "./header.scss"

const Header = ({ data, location }) => {

  const { t, i18n } = useTranslation("common")

  const pathArray = location.pathname.split('/')
  var newPathName = ""
  for (var i = 2; i < pathArray.length; i++) {
    newPathName += "/";
    newPathName += pathArray[i];
  }

  // const currentlocation.pathname.split('/')[1]
  //const newLocation = location.pathname.split('/')[2]

  return (
    <>
      <header className="headerNavWrapper fillBground" style={{ top: 0 + 'px' }}>

        {location.pathname !== "/" + i18n.language
          ? <Link to={`/${i18n.language}`} title="Link to homepage">
            <span>Link to homepage</span>
            {/* <p>MLMV Logo here</p> */}
            <LogoMLMVHeader alt={"Logo My Life my Voice - Link to homepage"} />
          </Link>
          : ""
        }

        <nav className="header-nav">
          <div className="hamburgerContainer">
            <button className="hamburger hamburger--squeeze" type="button" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
              <span className="hamburger-label">Menu</span>
            </button>
          </div>

          <ul>
            <li><Link to={`/${i18n.language}`} title="My Life My Voice Homepage" >My Life My Voice</Link></li>
            <li><Link to={`/${i18n.language}/peer-supporters`} >Peer Supporters</Link></li>
            <li><Link to={`/${i18n.language}/contact`} >Contact us</Link></li>
            <li><Link to={`/${i18n.language}/about`} >About My Life My Voice</Link></li>
            <li><Link to={`/${i18n.language}/terms-and-use`} >Terms of use</Link></li>
            <li><Link to={`/${i18n.language}/accessibility`} >Website accessiblity</Link></li>
            {i18n.language === "en"
              ? <li><Link to={`/en${newPathName}`} hrefLang="en" title="Selected language is English(NZ)" ><IconTick alt={"Tick icon to indicate selected language"} />English(NZ)</Link></li>
              : <li><Link to={`/en${newPathName}`} hrefLang="en" title="Switch language to English(NZ)" >English(NZ)</Link></li>
            }
            {i18n.language === "mi"
              ? <li><Link to={`/mi${newPathName}`} hrefLang="mi" title="Selected language is  Māori"><IconTick alt={"Tick icon to indicate selected language"} />Māori</Link></li>
              : <li><Link to={`/mi${newPathName}`} hrefLang="mi" title="Switch language to Māori">Māori</Link></li>
            }
          </ul>
        </nav>
      </header >
    </>
  )
};

export default Header