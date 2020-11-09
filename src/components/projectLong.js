import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { colors } from "../utils/styles"

const ProjectWrapper = styled.div`
  margin-bottom: 4rem;
`
const ProjectDetailsWrapper = styled.div`
  h2 {
    color: ${colors.dark};
    margin: 0;
  }
`
const ProjectTag = styled.span`
  margin-right: 0.5em;
  padding: 0.2em;
  background-color: ${colors.dark};
  color: ${colors.light};
  font-style: italic;
  font-weight: bold;
`

const ProjectLong = ({ title, source, demo, tags, image, html }) => {
  return (
    <ProjectWrapper>
      <ProjectDetailsWrapper>
        <a href={source}>
          <h2>{title}</h2>
        </a>
        <p>
          <a href={demo}>demo</a> / <a href={source}>source</a>
        </p>
        <p>
          {tags.split(",").map((tag, i) => {
            return <ProjectTag key={i}>{tag}</ProjectTag>
          })}
        </p>
      </ProjectDetailsWrapper>
      <Img fluid={image.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </ProjectWrapper>
  )
}

export default ProjectLong
