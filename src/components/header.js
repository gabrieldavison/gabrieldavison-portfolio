import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const HeaderContainer = styled.header`
  padding-top: 3rem;
  margin-bottom: 3rem;
`
const HeaderImage = styled.img`
  width: 400px;
  color: ${colors.accent};
  margin-bottom: 1em;
`

const HeaderTagLine = styled.div`
  color: ${colors.dark};
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderImage src="/asciiart.svg" alt="gabrieldavison-logo" />
        <HeaderTagLine>Web developer and designer.</HeaderTagLine>
      </Link>
      <div>mail [at] gabrieldavison [dot] me [dot] uk</div>

      <div>
        <Link to="/about">about me...</Link>
      </div>
    </HeaderContainer>
  )
}

export default Header
