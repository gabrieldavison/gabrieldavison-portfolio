import React from "react"
import Layout from "../components/layout"
import BlogSummary from "../components/blogSummary"
import ProjectSummary from "../components/projectSummary"
import { TwoColContainer } from "../utils/styles"

const Index = ({ location }) => {
  return (
    <Layout location={location}>
      <TwoColContainer>
        <ProjectSummary />
        <BlogSummary />
      </TwoColContainer>
    </Layout>
  )
}

export default Index
