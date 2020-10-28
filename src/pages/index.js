import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BlogSummary from "../components/blogSummary"
import ProjectSummary from "../components/projectSummary"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div>
        <ProjectSummary />
        <BlogSummary />
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
