import React from "react"
import PropTypes from "prop-types"
import secondaryNav from '../common/secondaryNav.module.scss'

const SecondaryNavWrapper = ({ children }) => {
  return (
    <section className={secondaryNav.wrapper + ' section-layout-wide secondaryNav'}>
      <nav aria-label="Navigate to previous page or next page" role="navigation" >
        {children}{/* Data goes here */}
      </nav>
    </section>
  )
}
SecondaryNavWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
export default SecondaryNavWrapper