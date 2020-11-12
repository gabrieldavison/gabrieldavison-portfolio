import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostShort from "./postShort"
import { Col, SectionHeader } from "../utils/styles"

const BlogSummary = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog" } } }
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
      ) {
        nodes {
          id
          frontmatter {
            date(formatString: "DD/MM/YY")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.nodes
  return (
    <Col right>
      <SectionHeader>
        <Link to="/blog">Writing</Link>
      </SectionHeader>
      {posts.map(post => {
        return (
          <PostShort
            key={post.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            slug={post.fields.slug}
          />
        )
      })}
      <Link to="/blog">continue to all writing...</Link>
    </Col>
  )
}

export default BlogSummary
