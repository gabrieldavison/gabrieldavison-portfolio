import React from "react"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../utils/styles"
import styled from "@emotion/styled"
import { loadableP5 as P5Wrapper } from "../utils/loadable"

import Sketch from "../components/sketch"

const SiteContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: calc(100vh - 85px);
  padding: 0 1rem;
`
const BackgroundWrapper = styled.div`
  #background-canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -5;
    width: 100vh;
    height: 100vw;
  }
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
      <BackgroundWrapper>
        <P5Wrapper sketch={Sketch} />
      </BackgroundWrapper>
      <Footer />
    </>
  )
}

export default Layout
