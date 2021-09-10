import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/posts/post-link"
import { graphql } from "gatsby"

const WritingPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} type={"blog"}/>)

    console.log(Posts)
  
    return(
      <Layout 
        title="Creative Writing" 
        icon="quill"
        quote="I write to discover what I know"
        quote_author="Flannery O'Connor"
      >
      <SEO title="Yennie Jun's Writing" />
      <div className="mainContainer">
  
      <p>I like to write across genres and styles: fiction short stories, nonfiction short stories, poetry, and opinion pieces.
            Some of my writing is published on <a href="https://medium.com/@yennie.jun" target="_blank" rel="noreferrer">Medium</a>.</p>
          
          <hr/>
          {/* <p>More coming soon!</p> */}
          { <div style={{marginBottom:`4rem`}}>{Posts}</div>}
        </div>
      </Layout>
    )
}

export default WritingPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: {posttype: {in: "blog"}} }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            description
          }
        }
      }
    }
  }
`