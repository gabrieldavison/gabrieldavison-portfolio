import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

const AboutWrapper = styled.div`
  p {
    font-size: 1.3em;
  }
`

const About = ({ data, location }) => {
  return (
    <Layout location={location}>
      <AboutWrapper
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      ></AboutWrapper>
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
