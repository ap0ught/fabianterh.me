/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "../style.css"
import Theme from "../theme"

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${Theme.colors.background};
`

const Body = styled.div`
  flex: 1;
  padding: 0 1.0875rem 1.45rem;
`

const Main = styled.main`
  margin: auto;
  padding: 0 ${Theme.paddings.body};
  max-width: ${Theme.layout.maxWidth};
`

const Layout = ({ centered, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          title_short
        }
      }
    }
  `)

  return (
    <Background>
      <Header siteTitle={data.site.siteMetadata.title_short} />
      <Body>
        <Main style={centered && { textAlign: `center` }}>{children}</Main>
      </Body>
      <Footer />
    </Background>
  )
}

Layout.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
