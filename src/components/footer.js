import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Col } from "../utils/styles"

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
`

const RightCol = styled(Col)`
  text-align: end;
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
      <Col>
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
      </Col>

      <RightCol>
        <a>this website was made with...</a>
      </RightCol>
    </FooterContainer>
  )
}

export default Footer
