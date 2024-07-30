import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as templateStyles from './blogTemplate.module.css' 

export default function Template({ data, pageContext }) {
  console.log('Template data:', data)
  console.log('Page context:', pageContext)

  if (!data || !data.markdownRemark) {
    console.error('No data or markdownRemark found for this page')
    console.error('Page context:', pageContext)
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

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
      <Layout>
        <div className={templateStyles.blogContainer}>
            {frontmatter.posttype==="blog" &&
              <div className={templateStyles.blogHeader}>
                <h1>{frontmatter.title}</h1>
                <div>Written: {frontmatter.date}</div>
              </div>
            }

            {frontmatter.posttype==="books" &&
              <div className={templateStyles.bookHeader}>
                <h1>{frontmatter.title}</h1>
                <p>Author: {frontmatter.author}</p>
                <p>Finished: {frontmatter.date}</p>
                {frontmatter.link && <a href={frontmatter.link} target="_blank" rel="noreferrer"><p>Goodreads link</p></a>}
              </div>
            }     
            
            <hr className={templateStyles.blogLine}/>
            {html ? (
              <div
                className={templateStyles.blogPostContent}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : (
              <p>No content available</p>
            )}
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