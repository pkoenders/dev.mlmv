import React from "react"
import { Link } from "gatsby"
//import Img from 'gatsby-image'
//import PlaceImage from './image/image'
// import IconCreativeTech from "../images/svg/logo-pixl.inline.svg"
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
            <p>MLMV Logo here</p>
            {/* <IconCreativeTech alt={"Logo - Link to homepage"} /> */}
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
            <li><Link to="/" title="Homepage" >Peter Koenders</Link></li>
            <li><Link to="/mlmv" >MLMV Test Page</Link></li>
            <li><Link to="/peer-supporters" >Peer Supporters</Link></li>
            <li><Link to="/projects" >My projects</Link></li>
            <li><Link to="/contact" >Contact us</Link></li>
          </ul>

        </div>
      </header >
    </>
  )
};

export default Header