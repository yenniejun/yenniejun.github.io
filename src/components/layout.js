/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

import "./style/layout.css"

const Layout = (props) => {
  return (
    <>
      <Header siteTitle={props.title} icon={props.icon}/>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main style={{
          minHeight: `calc(100vh - 10rem)`,
          textAlign: `center`
        }}>{props.children}</main>
        <footer style={{
          textAlign:`center`, 
          margin: `5rem auto 1.45rem auto`,
          fontSize: `0.6rem`
        }}>
          © {new Date().getFullYear()} Yennie Jun
          {props.icon && <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
