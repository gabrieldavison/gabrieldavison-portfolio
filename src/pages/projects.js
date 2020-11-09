import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectLong from "../components/projectLong"

const Projects = ({ data, location }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout location={location}>
      <div>
        {projects.map(project => {
          return (
            <ProjectLong
              key={project.id}
              title={project.frontmatter.title}
              demo={project.frontmatter.demo}
              source={project.frontmatter.source}
              image={project.frontmatter.image}
              tags={project.frontmatter.tags}
              html={project.html}
            />
          )
        })}
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
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
          tags
          title
          order
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
