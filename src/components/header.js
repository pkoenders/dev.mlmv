import React from "react"
import { Link } from "gatsby"
//import Img from 'gatsby-image'
//import PlaceImage from './image/image'
import LogoMLMVHeader from "../images/svg/logo-mlmv.inline.svg"
import '../styles/index.scss'
import "../styles/hamburger.scss"
import "./header.scss"

const Header = ({ data, location }) => {
  return (
    <>
      <header className="headerNavWrapper fillBground" style={{ top: 0 + 'px' }}>

        {location.pathname.split('/')[1] !== ""
          ? <Link to="/" title="Link to homepage">
            <span>Link to homepage</span>
            {/* <p>MLMV Logo here</p> */}
            <LogoMLMVHeader alt={"Logo MLMV - Link to homepage"} />
          </Link>
          : ""
        }
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
            <li><Link to="/" title="My Life My Voice Homepage" >My Life My Voice</Link></li>
            <li><Link to="/peer-supporters" >Peer Supporters</Link></li>
            <li><Link to="/contact" >Contact us</Link></li>
            <li><Link to="/about" >About My Life My Voice</Link></li>
            <li><Link to="/accessiblity" >Website accessiblity</Link></li>
            <li><Link to="/terms-and-use" >Terms of use</Link></li>
          </ul>

        </div>
      </header >
    </>
  )
};

export default Header