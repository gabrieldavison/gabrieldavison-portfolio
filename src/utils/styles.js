import React from "react"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

export const colors = {
  light: "#ECEBF1",
  dark: "#000000",
  accent: "#4024D9",
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
        font-family: monospace;
        font-size: 1em;
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
  padding-right: ${props => (props.left ? "1.5em" : "0")};
  padding-left: ${props => (props.right ? "1.5em" : "0")};
`
export const SectionHeader = styled.h2`
  margin-bottom: 2em;
`
