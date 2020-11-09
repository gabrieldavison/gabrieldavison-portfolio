import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
import "fontsource-ibm-plex-mono"

export const colors = {
  light: "#FCF9DE",
  dark: "#000000",
  accent: "#1E0B84",
}

//Global style object
export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      ${emotionNormalize}
      html {
        box-sizing: border-box;
        background-color: ${colors.light};
        font-family: "IBM Plex Mono", monospace;
        font-weight: medium;
        font-size: 0.9em;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      a {
        color: ${colors.accent};
      }
    `}
  />
)

export const TwoColContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Col = styled.section`
  width: 50%;
  padding-right: ${props => (props.left ? "2rem" : "0")};
  padding-left: ${props => (props.right ? "2rem" : "0")};
`
export const SectionHeader = styled.h2`
  margin-bottom: 2em;
  a {
    color: ${colors.dark};
  }
`
