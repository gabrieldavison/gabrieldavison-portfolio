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
          html
          frontmatter {
            demo
            source
            order
            title
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  return (
    <Col left>
      <SectionHeader>
        <Link to="/projects">Recent Projects</Link>
      </SectionHeader>
      {projects.map(project => {
        return (
          <ProjectShort
            key={project.id}
            title={project.frontmatter.title}
            demo={project.frontmatter.demo}
            source={project.frontmatter.source}
            html={project.html}
          />
        )
      })}
      <Link to="/projects">continue to all projects...</Link>
    </Col>
  )
}

export default ProjectSummary
