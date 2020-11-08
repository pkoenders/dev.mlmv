import React from "react"
import { Link } from "gatsby"
//import Img from 'gatsby-image'
//import PlaceImage from './image/image'
import { useTranslation } from "react-i18next"

import LogoMLMVHeader from "../images/svg/logo-mlmv.inline.svg"
import '../styles/index.scss'
import "../styles/hamburger.scss"
import "./header.scss"

const Header = ({ data, location }) => {

  const { t, i18n } = useTranslation("common")


  console.log("location.pathname = " + location.pathname)


  var pathArray = location.pathname.split('/');
  var newPathname = "";
  for (var i = 2; i < pathArray.length; i++) {
    newPathname += "/";
    newPathname += pathArray[i];
  }

  //const newLocation = location.pathname.split('/')[2]

  return (
    <>
      <header className="headerNavWrapper fillBground" style={{ top: 0 + 'px' }}>

        {location.pathname.split('/')[1] !== ""
          ? <Link to={`/${i18n.language}`} title="Link to homepage">
            <span>Link to homepage</span>
            {/* <p>MLMV Logo here</p> */}
            <LogoMLMVHeader alt={"Logo MLMV - Link to homepage"} />
          </Link>
          : ""
        }


        <ul>
          <li><Link to={`/en${newPathname}`} title="Switch Language to English - New Zealand" >English - New Zealand</Link></li>
          <li><Link to={`/mi${newPathname}`} title="Switch Language to Maori">Maori</Link></li>
        </ul>



        <div className="header-nav">
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
            <li><Link to={`/${i18n.language}/accessibility`} >Website accessiblity</Link></li>
            <li><Link to={`/${i18n.language}/terms-and-use`} >Terms of use</Link></li>
          </ul>

        </div>
      </header >
    </>
  )
};

export default Header