import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/posts/post-link"
import { graphql } from "gatsby"

const BooksPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} type={"book"}/>)

    return(
      <Layout title="Books" icon="books">
        <SEO title="Books" />
        <div className="homeContainer">
          <p>I love to read across all genres. Here are some of my notes.</p>
          <hr/>
          {<div style={{marginBottom:`4rem`}}>{Posts}</div>}
        </div>
      </Layout>
    )
}

export default BooksPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: {posttype: {in: "books"}} }
      ) {
    edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            author
            description
          }
        }
      }
    }
  }
`