import React from "react"
import PropTypes from "prop-types"
import layoutStyles from './../layout.module.scss'
import '../../styles/index.scss'

const DefaultSection = ({ children, location }) => {
  return (
    <>
      <section className={layoutStyles.defaultSection}>
        {children}
      </section>
    </>
  )
}
DefaultSection.propTypes = {
  children: PropTypes.node.isRequired,
}
export default DefaultSection

