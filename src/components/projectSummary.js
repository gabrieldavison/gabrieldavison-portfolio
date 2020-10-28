import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectShort from "./projectShort"

const ProjectSummary = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "projects" }
          extension: { eq: "md" }
        }
      ) {
        nodes {
          id
          childMarkdownRemark {
            frontmatter {
              demo
              order
              title
              description
            }
          }
        }
      }
    }
  `)
  const sortedProjects = data.allFile.nodes.sort((a, b) => {
    return (
      a.childMarkdownRemark.frontmatter.order -
      b.childMarkdownRemark.frontmatter.order
    )
  })
  console.log(sortedProjects)

  return (
    <div>
      {sortedProjects.map(project => {
        return (
          <ProjectShort
            key={project.id}
            title={project.childMarkdownRemark.frontmatter.title}
            demo={project.childMarkdownRemark.frontmatter.demo}
            source={project.childMarkdownRemark.frontmatter.source}
            description={project.childMarkdownRemark.frontmatter.description}
          />
        )
      })}
    </div>
  )
}

export default ProjectSummary
