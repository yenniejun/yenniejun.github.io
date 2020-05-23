// Gatsby supports TypeScript natively!
import React from "react"
import panelStyles from "./panel.module.css"
import { FaGithub } from 'react-icons/fa'

const PortfolioPanel = (props) => {

    return (
      <>
        <div className={panelStyles.panel} style={{backgroundColor: props.color}}>
            <h2>{props.data.title}</h2> 
            <hr/>
            {props.data.description && 
              props.data.description.map((item, i) =>
                <p key={i}>{item}</p>
              )
            } 

            {props.data.announcement && 
              <h3>{props.data.announcement}</h3>
            }

            {props.data.demolink &&
              <h3><a className={panelStyles.demolink} href={props.data.demolink} target="_blank"><span>Demo</span></a></h3>
            }

            {props.data.codelink &&
              <a className={panelStyles.codelink} href={props.data.codelink} target="_blank">
                <FaGithub/>
                <span>Link to code</span>
              </a>
            }
        </div>
      </>
    )
  }
  
export default PortfolioPanel;
