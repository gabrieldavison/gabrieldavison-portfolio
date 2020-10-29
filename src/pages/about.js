import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const About = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    markdownRemark(fields: { collection: { eq: "about" } }) {
      id
      html
    }
  }
`

export default About
