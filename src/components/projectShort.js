import React from "react"
import styled from "@emotion/styled"

const ProjectWrapper = styled.div`
  margin-bottom: 2em;

  p {
    margin: 0;
  }
`
const ProjectHeader = styled.h3`
  margin: 0 0 1rem 0;
`

const ProjectShort = ({ title, source, demo, description }) => {
  return (
    <ProjectWrapper>
      <ProjectHeader>{title}</ProjectHeader>
      <p>
        <a href={demo}>demo</a> / <a href={source}>source</a>
      </p>
      <p>{description}</p>
    </ProjectWrapper>
  )
}

export default ProjectShort
