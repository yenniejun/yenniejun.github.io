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

            {props.data.paperlink &&
              <h3><a className={panelStyles.demolink} href={props.data.paperlink} target="_blank" rel="noreferrer"><span>Link to paper</span></a></h3>
            }

            {props.data.demolink &&
              <h3><a className={panelStyles.demolink} href={props.data.demolink} target="_blank" rel="noreferrer"><span>Demo</span></a></h3>
            }

            {props.data.codelink &&
              <a className={panelStyles.codelink} href={props.data.codelink} target="_blank" rel="noreferrer">
                <FaGithub/>
                <span>Link to code</span>
              </a>
            }
        </div>
      </>
    )
  }
  
export default PortfolioPanel;
