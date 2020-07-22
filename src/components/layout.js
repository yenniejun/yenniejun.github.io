/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

import "./style/layout.css"

const Layout = (props) => {
  return (
    <>
      <Header siteTitle={props.title} icon={props.icon}/>
      
      {props.quote && 
        <div className="quote">
          <blockquote>
            <q>{props.quote}</q>
          </blockquote>
          <p>({props.quote_author})</p>
        </div>
      }

      <div style={{ margin: `0 auto`}}>
        <main style={{
          // minHeight: `calc(100vh - 10rem)`,
          textAlign: `center`
        }}>{props.children}</main>
      </div>

      <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
