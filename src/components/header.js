import React from "react"
import { Link } from "gatsby"
//import Img from 'gatsby-image'
//import PlaceImage from './image/image'
import IconCreativeTech from "../images/svg/logo-pixl.inline.svg"
//import EmojiUnemployed from "../images/svg/emoji-unemployed.inline.svg"
import EmojiSeekingEmployment from "../images/svg/emoji-seeking-employment.inline.svg"
//import EmojiToday from "../images/svg/emoji-today-i-am.inline.svg"
import EmojiWorking from "../images/svg/emoji-working.inline.svg"
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
            <IconCreativeTech alt={"Logo - Link to homepage"} />
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
            <li><Link to="/projects" >My projects</Link></li>
            <li><Link to="/contact" >Contact me</Link></li>
            <li><a href="/peter-koenders-resumé.pdf" >View my resumé</a></li>
            <li className="status">
              <span>Status</span>
              <div>
                {/* <PlaceImage
                  width='100%'
                  filename="emoji-unemployed.png"
                  alt="Unemplyed"
                /> */}

                {/* <EmojiUnemployed alt="Emoji status - Seeking Employment" /> */}
                <EmojiSeekingEmployment alt="Emoji status - Seeking Employment" />
                <EmojiWorking alt="Emoji status - Working" />
                {/* <EmojiToday alt="Emoji status - Today I am doing.." /> */}

              </div>
            </li>
          </ul>

        </div>
      </header >
    </>
  )
};

export default Header