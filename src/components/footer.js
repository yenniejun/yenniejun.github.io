import React from "react"
import SocialMediaLinks from "../components/socialmedia"

const Footer = ({icon}) => (
    
    <footer style={{
        textAlign:`center`, 
        margin: `5rem auto 1.45rem auto`,
        fontSize: `0.6rem`
    }}>
        <hr style={{margin: `1rem auto 3rem auto`}}/>

        <h5>Stay in touch!</h5>
        <SocialMediaLinks />

        © {new Date().getFullYear()} Yennie Jun
        {<div>Project images generated using text-to-image AI models: <a href="https://openai.com/dall-e-2/" title="DALLE-2">DALLE-2</a> and <a href="https://www.midjourney.com/home/#about" title="Midjourney">Midjourney</a></div>}
        {<div>SVG icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>}
        Site built using <a href="https://www.gatsbyjs.com/">Gatsby</a>
    </footer>
)

export default Footer
  