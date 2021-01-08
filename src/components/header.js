import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const HeaderContainer = styled.header`
  padding-top: 3rem;
  margin-bottom: 3rem;
  /* text-align: center; */
`
const HeaderImage = styled.img`
  width: 80%;
  stroke: ${colors.accent};
  margin-bottom: 1em;
  @media only screen and (min-width: 760px) {
    max-width: 400px;
  }
`

const HeaderTagLine = styled.div`
  color: ${colors.dark};
`
const LinkList = styled.ul`
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
  }
`
const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderImage src="/asciiart.svg" alt="gabrieldavison-logo" />
        <HeaderTagLine>Web developer and designer.</HeaderTagLine>
      </Link>
      <div>mail [at] gabrieldavison [dot] me [dot] uk</div>
      <LinkList>
        <li>
          [<a href="https://github.com/gabrieldavison">github</a>]
        </li>

        <li>
          [<a href="https://www.instagram.com/davison_gabriel/">instagram</a>]
        </li>
      </LinkList>
      <div>
        <Link to="/about">about me...</Link>
      </div>
    </HeaderContainer>
  )
}

export default Header
