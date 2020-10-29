import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostLong from "../components/postLong"

const Blog = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location}>
      <div>
        {posts.map(post => {
          return (
            <PostLong
              key={post.id}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              slug={post.fields.slug}
              description={post.frontmatter.description}
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
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          date(formatString: "D MMM YYYY, hh:MMa")
          description
          title
        }
        fields {
          slug
        }
      }
    }
  }
`

export default Blog
