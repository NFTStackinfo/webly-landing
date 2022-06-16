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
      <main className={className} id="top">
        {children}
      </main>
    </>
  )
}

export default Layout
