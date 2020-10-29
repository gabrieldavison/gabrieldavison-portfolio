import React from "react"
import Layout from "../components/layout"
import BlogSummary from "../components/blogSummary"
import ProjectSummary from "../components/projectSummary"
import { TwoColContainer } from "../utils/styles"

const Index = ({}) => {
  return (
    <Layout>
      <TwoColContainer>
        <ProjectSummary />
        <BlogSummary />
      </TwoColContainer>
    </Layout>
  )
}

export default Index
