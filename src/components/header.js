import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu/menu"
import Sunflower from "./../images/sunflower.svg"
import Quill from "./../images/page-icons/quill.svg"
import Computer from "./../images/page-icons/computer.svg"
import Books from "./../images/page-icons/book.svg"

const Header = ({ siteTitle, subTitle, icon }) => (
  <header>
    <div>
      <Menu />
      <h1 id="title_text">
        {siteTitle}
        {icon && icon === "sunflower" && <img alt="sunflower icon" className="header-icon" src={Sunflower}></img>}
        {icon && icon === "quill" && <img className="header-icon" src={Quill} alt="writing quill icon"></img>}
        {icon && icon === "computer" && <img  className="header-icon" src={Computer} alt="computer icon"></img>}
        {icon && icon === "books" && <img className="header-icon" src={Books} alt="books icon"></img>}
       </h1>
       <h3 id="subtitle_text">
         {subTitle}
       </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
}

export default Header
