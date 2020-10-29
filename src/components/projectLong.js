import React from "react"
import Img from "gatsby-image"

const ProjectLong = ({ title, source, demo, tags, image, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{tags}</p>
      <p>
        <a href={demo}>demo</a> / <a href={source}>source</a>
      </p>
      <Img fluid={image.childImageSharp.fluid} />
      <p>{description}</p>
    </div>
  )
}

export default ProjectLong
