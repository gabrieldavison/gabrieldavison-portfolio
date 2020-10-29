import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectShort from "./projectShort"
import { Link } from "gatsby"
import { Col, SectionHeader } from "../utils/styles"

const ProjectSummary = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        nodes {
          id
          frontmatter {
            demo
            source
            order
            title
            description
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  return (
    <Col left>
      <SectionHeader>Recent Projects</SectionHeader>
      {projects.map(project => {
        return (
          <ProjectShort
            key={project.id}
            title={project.frontmatter.title}
            demo={project.frontmatter.demo}
            source={project.frontmatter.source}
            description={project.frontmatter.description}
          />
        )
      })}
      <Link to="/projects">continue to projects...</Link>
    </Col>
  )
}

export default ProjectSummary
