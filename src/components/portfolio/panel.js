// Gatsby supports TypeScript natively!
import React from "react"
import Img from 'gatsby-image';
import * as panelStyles from "./panel.module.css"
import { FaGithub } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import { RiArticleLine } from 'react-icons/ri'
import { GiClick } from 'react-icons/gi'
import ReactTooltip from "react-tooltip";


const PortfolioPanel = (props) => {
    return (
      <>
        <div className={panelStyles.panel}>

			{props.image && props.image.node &&
			<div className={panelStyles.projectIconContainer}>
				<Img 
				className={panelStyles.projectIcon}
				fluid={props.image.node.childImageSharp.fluid}
				alt={"image for" + props.image.node.base}
				/>

			</div>
			} 
            
			<div className={panelStyles.projectContentContainer}>
				<h2 className={panelStyles.portfolio_panel_title}>{props.data.title}</h2> 


				{props.data.description && 
				 	props.data.description.map((item, i) =>
						<p className={panelStyles.portfolio_panel_description} key={i}>{item}</p>
					)
				} 

            <div className={panelStyles.codelinkContainer}>
				{props.data.codelink &&
					<a data-tip data-for="githubIcon" className={panelStyles.codelink} href={props.data.codelink} target="_blank" rel="noreferrer">
					<FaGithub/>
					<ReactTooltip id="githubIcon" place="bottom" effect="solid">
						Link to code
					</ReactTooltip>
					</a>
				} 
				{props.data.paperlink &&
					<a data-tip data-for="paperIcon" className={panelStyles.codelink} href={props.data.paperlink} target="_blank" rel="noreferrer">
					<IoIosPaper />
					<ReactTooltip id="paperIcon" place="bottom" effect="solid">
						Link to paper
					</ReactTooltip>
					</a>
				}

				{props.data.articlelink &&
					<a data-tip data-for="articleIcon" className={panelStyles.codelink} href={props.data.articlelink} target="_blank" rel="noreferrer">
					<RiArticleLine />
					<ReactTooltip id="articleIcon" place="bottom" effect="solid">
						Link to article
					</ReactTooltip>
					</a>
					}

				{props.data.demolink &&
					<a data-tip data-for="demoIcon" className={panelStyles.codelink} href={props.data.demolink} target="_blank" rel="noreferrer">
					<GiClick />
					<ReactTooltip id="demoIcon" place="bottom" effect="solid">
						Link to demo
					</ReactTooltip>
					</a>
				}
            </div>

            
		</div>

            
        </div>
      </>
    )
  }
  
export default PortfolioPanel;
