import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const NavItem = styled.li`
  display: inline-block;
  font-size: 1.5em;
  margin-right: 2em;
  font-weight: ${props => (props.currentPage ? "bold" : "medium")};
  a {
    text-decoration: ${props => (props.currentPage ? "underline" : "none")};
  }
  a:hover {
    text-decoration: underline;
  }
`

const NavList = styled.ul`
  padding: 0;
`

const Nav = ({ location }) => {
  return (
    <nav>
      <NavList>
        <NavItem currentPage={location.pathname === "/projects" ? true : false}>
          <Link to="/projects">Projects</Link>
        </NavItem>
        <NavItem currentPage={location.pathname === "/blog" ? true : false}>
          <Link to="/blog">Blog</Link>
        </NavItem>
        <NavItem currentPage={location.pathname === "/about" ? true : false}>
          <Link to="/about">About</Link>
        </NavItem>
      </NavList>
    </nav>
  )
}

export default Nav
