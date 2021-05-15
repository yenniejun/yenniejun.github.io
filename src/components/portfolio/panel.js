// Gatsby supports TypeScript natively!
import React from "react"
import Img from 'gatsby-image';
import panelStyles from "./panel.module.css"
import linkStyles from "./../posts/post-link.module.css"
import { FaGithub } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import { RiArticleLine } from 'react-icons/ri'
import { GiClick } from 'react-icons/gi'
import { GoTag } from 'react-icons/go'

const PortfolioPanel = (props) => {
    return (
      <>
        <div className={panelStyles.panel} style={{backgroundColor: props.color}}>


            <div className={panelStyles.projectTitle}>
              {props.image && props.image.node &&
              <div className={panelStyles.projectIconContainer}>
                <Img 
                  className={panelStyles.projectIcon}
                  fluid={props.image.node.childImageSharp.fluid}
                  alt={"image for" + props.image.node.base}
                />

              </div>
                
              } 
              <div>
                <h2>{props.data.title}</h2> 
                {props.data.tags && 
                  <div>{props.data.tags.map((item, i) => 
                    <div key={i} className={linkStyles.blogtag}>
                      <GoTag/>{item}
                    </div>)}
                  </div>
                }
              </div>
            </div>
            

            
            <hr/>
            {props.data.description && 
              props.data.description.map((item, i) =>
                <p key={i}>{item}</p>
              )
            } 

            {props.data.announcement && 
              <h3>{props.data.announcement}</h3>
            }

            <div className={panelStyles.codelinkContainer}>
              {props.data.paperlink &&
                <a className={panelStyles.codelink} href={props.data.paperlink} target="_blank" rel="noreferrer">
                  <IoIosPaper />
                  <span>Link to paper</span>
                </a>
              }

              {props.data.articlelink &&
                  <a className={panelStyles.codelink} href={props.data.articlelink} target="_blank" rel="noreferrer">
                    <RiArticleLine />
                    <span>Link to article</span>
                  </a>
                }

              {props.data.demolink &&
                <a className={panelStyles.codelink} href={props.data.demolink} target="_blank" rel="noreferrer">
                  <GiClick />
                  <span>Link to demo</span>
                </a>
              }

              {props.data.codelink &&
                <a className={panelStyles.codelink} href={props.data.codelink} target="_blank" rel="noreferrer">
                  <FaGithub/>
                  <span>Link to code</span>
                </a>
              } 
            </div>

            

            
        </div>
      </>
    )
  }
  
export default PortfolioPanel;
