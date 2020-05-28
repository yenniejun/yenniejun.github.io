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
      <Layout 
        title="Books" 
        icon="books"
        quote="Some books are to be tasted, others to be swallowed, and some few to be chewed and digested"
        quote_author="Francis Bacon"
      >
        <SEO title="Books" />
        <div className="homeContainer">
        <p>I love to read across all genres. Here are my notes and thoughts on some of my recent favorite reads.</p>
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