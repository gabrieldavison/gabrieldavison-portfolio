import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const PostHeader = styled.h3`
  display: inline;
  a {
    color: ${colors.dark};
  }
`

const PostShort = ({ title, slug, date, description }) => {
  return (
    <div>
      <p>
        {date} -{" "}
        <PostHeader>
          <Link to={slug}>{title}</Link>
        </PostHeader>{" "}
      </p>
    </div>
  )
}

export default PostShort
