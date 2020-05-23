// Gatsby supports TypeScript natively!
import React from "react"
import { FaInstagram } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { TiSocialLinkedin } from 'react-icons/ti'
import { RiGithubLine } from 'react-icons/ri'
import { AiOutlineMail} from 'react-icons/ai' 

import "./style/socialmedia.css"


const SocialMediaLinks = ({ location }) => {
    return (
      <>
        <div className="social-media-links-container">
            <a href="mailto:yennie.jun@gmail.com" target="_blank">
                <AiOutlineMail/>
                <span>Mail</span>
            </a>
            <a href="https://www.linkedin.com/in/yennie-jun-30a650a5/" target="_blank">
                <TiSocialLinkedin/>
                <span>LinkedIn</span>
            </a>
            <a href="https://github.com/yenniejun" target="_blank">
                <RiGithubLine/>
                <span>GitHub</span>
            </a>
            <a href="https://www.facebook.com/yennie.jun" target="_blank">
                <GrFacebookOption/>
                <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/lingling62/?hl=en" target="_blank">
                <FaInstagram/>
                <span>Instagram</span>
            </a>
        </div>
      </>
    )
  }
  
export default SocialMediaLinks;
// Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>