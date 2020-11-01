import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import footerStyles from './footer.module.scss'
//import FooterBGround from "../images/svg/footer.inline.svg"
//import IconCreativeTech from "../images/svg/logo-pixl.inline.svg"

const Footer = () => {
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
          {/* <IconCreativeTech /> */}
        </Link>
        <p>Footer content here</p>
        <p>© {new Date().getFullYear()} - {data.site.siteMetadata.title}</p>
      </footer>
    </>
  )
}

export default Footer