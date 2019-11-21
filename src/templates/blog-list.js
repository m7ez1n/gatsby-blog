import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges
  
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: {
          frontmatter: { title, category, description, date, background },
          timeToRead,
          fields: { slug },
        },
      }) => (
        <PostItem 
          slug={slug}
          background={background}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: $limit
        skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            category
            description
            background
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList