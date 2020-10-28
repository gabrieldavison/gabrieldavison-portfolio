import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

export const GlobalStyle = props => (
  <Global
    {...props}
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
)
