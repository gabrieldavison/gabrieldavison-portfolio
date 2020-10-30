import React from "react"
import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"
import { GlobalStyle } from "../utils/styles"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const SiteContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: calc(100vh - 80px);
`
const ContentContainer = styled.main``

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <SiteContainer location={location}>
        <Header />
        {/* {location.pathname === "/" ? null : <Nav location={location} />} */}
        <ContentContainer>{children}</ContentContainer>
      </SiteContainer>
      <Footer />
    </>
  )
}

export default Layout
