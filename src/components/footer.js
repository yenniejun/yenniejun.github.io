import React from "react"
import SocialMediaLinks from "../components/socialmedia"

const Footer = ({icon}) => (
    
    <footer style={{
        textAlign:`center`, 
        margin: `5rem auto 1.45rem auto`,
        fontSize: `0.6rem`
    }}>
        <hr style={{width:`50%`, margin: `1rem auto 3rem auto`}}/>

        <SocialMediaLinks />

        © {new Date().getFullYear()} Yennie Jun
        {<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>}
        Site built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
    </footer>
)

export default Footer
  