import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import HowWorks from "../components/HowWorks"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <HowWorks />
  </Layout>
)

export default IndexPage
