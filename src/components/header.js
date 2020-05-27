import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu/menu"
import Sunflower from "./../images/sunflower.svg"
import Quill from "./../images/page-icons/quill.svg"
import Computer from "./../images/page-icons/computer.svg"
import Books from "./../images/page-icons/book.svg"

const Header = ({ siteTitle, icon }) => (
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
        {icon && icon === "sunflower" && <img className="header-icon" src={Sunflower}></img>}
        {icon && icon === "quill" && <img className="header-icon" src={Quill}></img>}
        {icon && icon === "computer" && <img className="header-icon" src={Computer}></img>}
        {icon && icon === "books" && <img className="header-icon" src={Books}></img>}
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
