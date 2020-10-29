import React from "react"
import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"
import { GlobalStyle } from "../utils/styles"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const MainContainer = styled.main`
  max-width: 1000px;
  margin: auto;
`

const Layout = ({ children, location }) => {
  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      {location ? <Nav location={location} /> : null}
      <main>{children}</main>
      <Footer />
    </MainContainer>
  )
}

export default Layout
