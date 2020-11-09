import React from "react"
import styled from "@emotion/styled"

const ProjectWrapper = styled.div`
  margin-bottom: 2em;

  p {
    margin: 0;
  }
`
const ProjectHeader = styled.h3`
  margin: 0 0 0.5rem 0;
`

const ProjectShort = ({ title, source, demo, html }) => {
  return (
    <ProjectWrapper>
      <ProjectHeader>{title}</ProjectHeader>
      <p>
        <a href={demo}>demo</a> / <a href={source}>source</a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </ProjectWrapper>
  )
}

export default ProjectShort
