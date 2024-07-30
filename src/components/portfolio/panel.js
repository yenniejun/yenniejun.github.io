import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as panelStyles from "./panel.module.css"
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import { RiArticleLine } from 'react-icons/ri'
import { GiClick } from 'react-icons/gi'
import { Tooltip } from "react-tooltip"

const PortfolioPanel = (props) => {
    const image = props.image && props.image.node ? getImage(props.image.node.childImageSharp.gatsbyImageData) : null

    return (
      <>
        <div className={panelStyles.panel}>
            {image && (
                <div className={panelStyles.projectIconContainer}>
                    <GatsbyImage 
                        className={panelStyles.projectIcon}
                        image={image}
                        alt={`image for ${props.image.node.base}`}
                    />
                </div>
            )}
            
            <div className={panelStyles.projectContentContainer}>
                <h2 className={panelStyles.portfolio_panel_title}>{props.data.title}</h2> 
                {props.data.description && 
                    props.data.description.map((item, i) =>
                        <p className={panelStyles.portfolio_panel_description} key={i}>{item}</p>
                    )
                } 
                <div className={panelStyles.codelinkContainer}>
                    {props.data.codelink &&
                        <a data-tooltip-id="githubIcon" className={panelStyles.codelink} href={props.data.codelink} target="_blank" rel="noreferrer">
                            <FaGithub/>
                        </a>
                    }
                    {props.data.paperlink &&
                        <a data-tooltip-id="paperIcon" className={panelStyles.codelink} href={props.data.paperlink} target="_blank" rel="noreferrer">
                            <IoIosPaper />
                        </a>
                    }
                    {props.data.articlelink &&
                        <a data-tooltip-id="articleIcon" className={panelStyles.codelink} href={props.data.articlelink} target="_blank" rel="noreferrer">
                            <RiArticleLine />
                        </a>
                    }
                    {props.data.demolink &&
                        <a data-tooltip-id="demoIcon" className={panelStyles.codelink} href={props.data.demolink} target="_blank" rel="noreferrer">
                            <GiClick />
                        </a>
                    }
                    {props.data.instagramlink &&
                        <a data-tooltip-id="instagramIcon" className={panelStyles.codelink} href={props.data.instagramlink} target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    }
                </div>
            </div>
        </div>
        <Tooltip id="githubIcon" place="bottom" content="Link to code" />
        <Tooltip id="paperIcon" place="bottom" content="Link to paper" />
        <Tooltip id="articleIcon" place="bottom" content="Link to article" />
        <Tooltip id="demoIcon" place="bottom" content="Link to demo" />
        <Tooltip id="instagramIcon" place="bottom" content="Link to Instagram" />
      </>
    )
  }
  
export default PortfolioPanel;