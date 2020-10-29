import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const HeaderContainer = styled.header`
  margin-top: 3rem;
  margin-bottom: 2rem;
`
const HeaderImage = styled.img`
  width: 40%;
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
        <Link to="/about">more about me...</Link>
      </div>
    </HeaderContainer>
  )
}

export default Header
