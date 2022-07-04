/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import "../assets/styles/index.scss"

const Layout = ({ children, className }) => {

  return (
    <>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5TQJ75"
      height="0" width="0" style="display:none;visibility:hidden"/></noscript>
      <main className={className} id="top">
        {children}
      </main>
    </>
  )
}

export default Layout
