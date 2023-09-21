// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import * as menuStyles from "./menu.module.css"
import { HiExternalLink } from 'react-icons/hi'


const Menu = ({ location }) => {

    return (
      <>
        <div className={menuStyles.menu}>
            <Link to="/" activeClassName={menuStyles.active}>Home</Link>
            <Link to="/portfolio/" activeClassName={menuStyles.active}>Projects</Link>
            <Link to="/writing/" activeClassName={menuStyles.active}>Writing</Link>
            <Link to="/books/" activeClassName={menuStyles.active}>Books</Link>
            <a 
                href='https://www.artfish.ai/' 
                target='_blank' 
                aria-label='Link to AI Newsletter'
                rel='nooopener'>AI Newsletter <HiExternalLink/>
            </a>
        </div>
      </>
    )
  }
  

  
  
export default Menu;
