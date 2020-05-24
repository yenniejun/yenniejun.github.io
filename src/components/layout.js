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
      <Header siteTitle={props.title} />
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
          textAlign:`center`, margin: `0rem auto 1.45rem auto` 
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
