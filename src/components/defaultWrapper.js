import React from "react"
import PropTypes from "prop-types"
import layoutStyles from './layout.module.scss'
import '../styles/index.scss'

const DefaultWrapper = ({ children, location }) => {
  return (
    <>
      <div className={layoutStyles.defaultSection}>
        {children}
      </div>
    </>
  )
}
DefaultWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
export default DefaultWrapper

