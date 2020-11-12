import React from "react"
import styled from "@emotion/styled"

const FooterContainer = styled.footer`
  height: 70px;
  max-width: 1000px;
  margin: auto;
  padding: 0 1rem;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        <a href="https://github.com/gabrieldavison/gabrieldavison-portfolio">
          Website sourcecode...
        </a>
      </p>
    </FooterContainer>
  )
}

export default Footer
