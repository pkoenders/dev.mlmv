import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import footerStyles from './footer.module.scss'
//import FooterBGround from "../images/svg/footer.inline.svg"
import LogoMLMVFooter from "../images/svg/logo-mlmv.inline.svg"
import IconTick from "../images/svg/icon-tick.inline.svg"

const Footer = ({ location }) => {

  const { t, i18n } = useTranslation("common")

  const pathArray = location.pathname.split('/')
  var newPathName = ""
  for (var i = 2; i < pathArray.length; i++) {
    newPathName += "/";
    newPathName += pathArray[i];
  }

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
        <Link to="/" title="Homepage" >
          <span>Go to the homepage</span>
          <LogoMLMVFooter />
        </Link>
        <p>Footer content here</p>

        {/* <nav>
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
        </nav> */}

        <p>© {new Date().getFullYear()} - {data.site.siteMetadata.title}</p>
      </footer>
    </>
  )
}

export default Footer