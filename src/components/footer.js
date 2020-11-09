import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Col } from "../utils/styles"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  height: 70px;
  max-width: 1000px;
  margin: auto;
`
const LeftCol = styled(Col)``

const RightCol = styled(Col)`
  text-align: end;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-left: 4rem;
`
const LinkList = styled.ul`
  padding: 0;
  li {
    display: inline-block;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <LeftCol>
        <p>Also find me on...</p>
        <LinkList>
          <li>
            <a>[github]</a>
          </li>
          <li>
            <a>[instagram]</a>
          </li>
          <li>
            <a>[linkedIn]</a>
          </li>
        </LinkList>
      </LeftCol>

      <RightCol>
        <p>
          <a>Website sourcecode...</a>
        </p>
      </RightCol>
    </FooterContainer>
  )
}

export default Footer
