import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as templateStyles from './blogTemplate.module.css' 

export default function Template({ data }) {
  if (!data || !data.markdownRemark) {
    console.error('No data or markdownRemark found for this page')
    return (
      <Layout>
        <SEO title="Post Not Found" />
        <div className={templateStyles.blogContainer}>
          <h1>Post Not Found</h1>
          <p>Sorry, the content you're looking for doesn't exist.</p>
        </div>
      </Layout>
    )
  }

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className={templateStyles.blogContainer}>
        {frontmatter.posttype === "blog" && (
          <div className={templateStyles.blogHeader}>
            <h1>{frontmatter.title}</h1>
            <div>Written: {frontmatter.date}</div>
          </div>
        )}

        {frontmatter.posttype === "books" && (
          <div className={templateStyles.bookHeader}>
            <h1>{frontmatter.title}</h1>
            <table className={templateStyles.bookTable}>
              <tbody>
                <tr>
                  <td>Author</td>
                  <td>{frontmatter.author}</td>
                </tr>
                <tr>
                  <td>Finished</td>
                  <td>{frontmatter.date}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>{frontmatter.rating ? `${frontmatter.rating.toFixed(1)} / 5` : 'N/A'}</td>
                </tr>
              </tbody>
            </table>
            {frontmatter.link && (
              <p>
                <a href={frontmatter.link} target="_blank" rel="noreferrer">Goodreads link</a>
              </p>
            )}
          </div>
        )}     
        
        <hr className={templateStyles.blogLine}/>
        <div
          className={templateStyles.blogPostContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
        author
        posttype
        link
        rating
      }
    }
  }
`