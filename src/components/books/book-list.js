import React from "react"
import { Link } from "gatsby"
import * as bookStyles from "./book-list.module.css"

const BookList = ({ post }) => {
  return (
    <div className={bookStyles.book_post_container}>
      <div className={bookStyles.book_title_container}>
        <Link to={post.frontmatter.path} className={bookStyles.book_title_link_cell}>
          <h2 className={bookStyles.title}>{post.frontmatter.title}</h2>
        </Link>
        <div className={bookStyles.book_rating}>
          {`${post.frontmatter.rating.toFixed(1)} / 5`}
        </div>
      </div>
      <div className={bookStyles.author_date_container}>
        {post.frontmatter.author && <div>{`By: ${post.frontmatter.author}`}</div>}
        <div className={bookStyles.book_date_divider}>|</div>
        <div>{`Finished: ${post.frontmatter.date}`}</div>
      </div>
      {/* Commented out sections */}
      {/* {post.frontmatter.description && <p>{post.frontmatter.description}...</p>} */}
      {/* <Link to={post.frontmatter.path} activeClassName={bookStyles.active} className={bookStyles.read_more}>
          Read more
      </Link> */}
    </div> 
  )
}

export default BookList