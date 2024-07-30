import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/posts/post-link"
import { graphql } from "gatsby"
import * as bookStyles from "../components/books/book-list.module.css"

const WritingPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  const createPostLinks = (tag) => 
    edges
      .filter(edge => edge.node.frontmatter.tags.includes(tag))
      .map(edge => <PostLink key={edge.node.id} post={edge.node} type="blog" />)

  const TechnicalPosts = createPostLinks('Data Science')
  const OpinionPosts = createPostLinks('Opinion')
  const NonfictionPosts = createPostLinks('Creative Nonfiction')
  const FictionPosts = createPostLinks('Fiction')

  return (
    <Layout 
      title="Writing" 
      icon="quill"
    >
      <SEO title="Yennie Jun's Writing" />
      <div className="mainContainer">
        <p>
          My more recent writing and projects can be found on
          <a 
            href='https://www.artfish.ai/'
            className="normalLink" 
            target="_blank" 
            rel="noreferrer"
          > Art Fish Intelligence.</a>
        </p>
        <hr/>
    
        {/* <div className="homeFlex-iframe"><iframe src="https://yenniejun.substack.com/embed" width="480" height="320" frameborder="0" scrolling="no"></iframe></div> */}

        <h2 className={bookStyles.blog_type_header}>Data Science</h2>
        <div style={{marginBottom:`4rem`}}>{TechnicalPosts}</div>
        <h2 className={bookStyles.blog_type_header}>Essays</h2>
        <div style={{marginBottom:`4rem`}}>{OpinionPosts}</div>
        <h2 className={bookStyles.blog_type_header}>Creative Nonfiction</h2>
        <div style={{marginBottom:`4rem`}}>{NonfictionPosts}</div>
        <h2 className={bookStyles.blog_type_header}>Creative Fiction</h2>
        <div style={{marginBottom:`4rem`}}>{FictionPosts}</div>
      </div>
    </Layout>
  )
}

export default WritingPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { posttype: { in: "blog" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            tags
            description
          }
        }
      }
    }
  }
`