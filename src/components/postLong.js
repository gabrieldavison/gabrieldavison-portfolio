import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const PostWrapper = styled.div`
  a {
    text-decoration: none;
  }
`

const PostDescription = styled.p`
  font-size: 1.2em;
  color: ${colors.dark};
  text-decoration: none;
  font-style: italic;
`
const PostHeader = styled.h2`
  :hover {
    text-decoration: underline;
  }

  color: ${colors.dark};
`

const PostShort = ({ title, slug, date, description }) => {
  return (
    <PostWrapper>
      <Link to={slug}>
        <PostHeader>{title}</PostHeader>{" "}
      </Link>

      <PostDescription>{description}</PostDescription>
      <p>{date}</p>
    </PostWrapper>
  )
}

export default PostShort
