import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu/menu"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <Menu />
      <h1 
        style={{
          textAlign: `center`,
          fontFamily: `IBM Plex Serif`
        }}
      >
        {siteTitle}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
