import React from "react"
import { Link } from "gatsby"

const PostShort = ({ title, slug, date, description }) => {
  return (
    <div>
      <Link to={slug}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </Link>
    </div>
  )
}

export default PostShort
