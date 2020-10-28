import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          ${emotionNormalize}
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
