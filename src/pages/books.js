import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/books/book-list"
import { graphql } from "gatsby"
// import classnames from 'classnames';

const BooksPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Books = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BookList key={edge.node.id} post={edge.node} type={"book"}/>)

    return(
      <Layout 
        title="My Bookshelf" 
        icon="books"
        quote="Some books are to be tasted, others to be swallowed, and some few to be chewed and digested"
        quote_author="Francis Bacon"
      >
        <SEO title="Book Notes" />
        <div className="mainContainer">
          <p>I love to read across all genres: non-fiction, fiction, poetry, biography, memoir, history, and science. Here are my notes and thoughts on some of my recent favorite reads.</p>
          <hr/>
          {<div style={{marginBottom:`4rem`}}>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th className="hide_header_column">Date Finished</th>
                  <th className="hide_header_column">Rating</th>
                </tr>
              </thead>
              {Books}
            </table>
          </div>}
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
            date(formatString: "YYYY-MM-DD")
            path
            tags
            author
            description
            rating
          }
        }
      }
    }
  }
`