import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/posts/post-link"
import { graphql } from "gatsby"
import * as bookStyles from "../components/books/book-list.module.css"

const WritingPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
    const OpinionPosts = edges
      .filter(edge => edge.node.frontmatter.tags.includes('Opinion')) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} type={"blog"}/>)
    const FictionPosts = edges
      .filter(edge => edge.node.frontmatter.tags.includes('Fiction')) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} type={"blog"}/>)
    const EssayPosts = edges
      .filter(edge => edge.node.frontmatter.tags.includes('Essay')) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} type={"blog"}/>)
    const NonfictionPosts = edges
      .filter(edge => edge.node.frontmatter.tags.includes('Creative Nonfiction')) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} type={"blog"}/>)
    const TechnicalPosts = edges
      .filter(edge => edge.node.frontmatter.tags.includes('Data Science')) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} type={"blog"}/>)
  
    return(
      <Layout 
        title="Writing" 
        icon="quill"
      >
      <SEO title="Yennie Jun's Writing" />
      <div className="mainContainer">
          <p>My more recent writing and projects can be found on 
            <a href='https://www.artfish.ai/'
            className="normalLink" 
            target="_blank" 
            rel="noreferrer"> Art Fish Intelligence.</a></p>
          <hr/>

      
      {/* <div className="homeFlex-iframe"><iframe src="https://yenniejun.substack.com/embed" width="480" height="320" frameborder="0" scrolling="no"></iframe></div> */}
  
      <h2 className={bookStyles.blog_type_header}>Data Science</h2>
      { <div style={{marginBottom:`4rem`}}>{TechnicalPosts}</div>}
      <h2 className={bookStyles.blog_type_header}>Essays</h2>
      { <div style={{marginBottom:`4rem`}}>{OpinionPosts}</div>}
      <h2 className={bookStyles.blog_type_header}>Creative Nonfiction</h2>
      { <div style={{marginBottom:`4rem`}}>{NonfictionPosts}</div>}
      <h2 className={bookStyles.blog_type_header}>Creative Fiction</h2>
      { <div style={{marginBottom:`4rem`}}>{FictionPosts}</div>}

    </div>
  </Layout>
)}

export default WritingPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: 
        {posttype: {in: "blog"}} }
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

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: 
//         {posttype: {in: "blog"}
//          blogtype: {in: "Opinion"}}
//       }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             path
//             tags
//             blogtype
//             description
//           }
//         }
//       }
//     }
//   }
// `

