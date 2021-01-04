import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import Header from "./common/header"
import Footer from "./common/footer"
import layoutStyles from './layout.module.scss'
import '../styles/index.scss'

const Layout = ({ children, location }) => {

  return (
    <>
      <noscript key="lighthouse-noscript" hidden>
        Please enable JavaScript.
      </noscript>
      <a className={"skipLink"} href="#mainContent" tabIndex="0">Skip to main content</a>
      <div id="layoutModule" className={layoutStyles.container} >
        <Header location={location} />
        <div className={layoutStyles.content}>
          <main id="mainContent">{children}</main>
        </div>
        <Footer location={location} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
