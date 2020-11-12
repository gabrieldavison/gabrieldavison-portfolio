import React from "react"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../utils/styles"
import styled from "@emotion/styled"
import P5Wrapper from "react-p5-wrapper"
import Sketch from "../components/sketch"

const SiteContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: calc(100vh - 85px);
  padding: 0 1rem;
`
const ContentContainer = styled.main``

const Layout = ({ children, location }) => {
  return (
    <>
      <GlobalStyle />
      <P5Wrapper sketch={Sketch} />

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
