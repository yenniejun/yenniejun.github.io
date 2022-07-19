import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as templateStyles from './blogTemplate.module.css' 

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  console.log('markdown remark', markdownRemark)
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
                      <td>{frontmatter.rating.toFixed(1) + " / 5"}</td>
                    </tr>
                  </tbody>
                </table>
                <p>{frontmatter.link && <a href={frontmatter.link} target="_blank" rel="noreferrer">Goodreads link</a>}</p>

              </div>
            }     
            
            <hr className={templateStyles.blogLine}/>
            <div
                className={templateStyles.blogPostContent}
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </Layout>
    
  )
}


// export const pageQuery = graphql`
// query BlogPage($path: String!) {
//   allMarkdownRemark(
//     sort: { fields: [frontmatter___date], order: DESC }
//     filter: { frontmatter: { path: { eq: $path } } }
//   ) {
//     html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//         author
//         posttype
//         link
//         rating
//       }
//     }
//   }
// }
// `


export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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