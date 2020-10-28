import React from "react"

const BlogSummary = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allFile(
  //       filter: { sourceInstanceName: { eq: "blog" }, extension: { eq: "md" } }
  //     ) {
  //       nodes {
  //         id
  //         childMarkdownRemark {
  //           frontmatter {
  //             demo
  //             order
  //             title
  //             description
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const posts = data.allFile.nodes
  // console.log(posts)
  return (
    <div>
      <p>Blog SUMMARY</p>
    </div>
  )
}

export default BlogSummary
