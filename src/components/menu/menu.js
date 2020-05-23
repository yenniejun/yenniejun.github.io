// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.css"

const Menu = ({ location }) => {

    return (
      <>
        <div className={menuStyles.menu}>
            <Link to="/" activeClassName={menuStyles.active}>Home</Link>
            <Link to="/portfolio" activeClassName={menuStyles.active}>Projects</Link>
            <Link to="/writing" activeClassName={menuStyles.active}>Writing</Link>
            <Link to="/resume" activeClassName={menuStyles.active}>Resume</Link>
        </div>
      </>
    )
  }
  
export default Menu;
