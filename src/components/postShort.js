import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const PostHeader = styled.h3`
  display: inline;
`
const PostWrapper = styled.div`
  margin-bottom: 2em;
  a {
    color: ${colors.dark};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`

const PostShort = ({ title, slug, date, description }) => {
  return (
    <PostWrapper>
      <Link to={slug}>
        <p>{date}</p>
        <PostHeader>{title}</PostHeader>{" "}
      </Link>
    </PostWrapper>
  )
}

export default PostShort
