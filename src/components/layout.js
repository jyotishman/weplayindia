/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{}}>
        <main>{children}</main>
        <footer
          style={{
            backgroundColor: "#ff9800",
            color: "#333",
            padding: 20,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()}, WePlayIndia
          {` `}
          <p>For further queries, kindly email : raj@weplayindia.co.in </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
