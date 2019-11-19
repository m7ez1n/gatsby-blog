import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about/"
      background="red"
      category="MISC"
      date="19 de novembro de 2019"
      timeToRead="5"
      title="Post mo dahora de react e gatsby"
      description="Algumas palavras aleatorias ai daquele modelo tlg?"
    />
  </Layout>
)

export default IndexPage
