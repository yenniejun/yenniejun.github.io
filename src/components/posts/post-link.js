import React from "react"
import { Link } from "gatsby"
import * as bookStyles from "../books/book-list.module.css"

const PostLink = (props) => {
  const { post } = props;

  return (
    <div className={bookStyles.book_post_container}>
      <div className={bookStyles.book_title_container}>
        <Link to={post.frontmatter.path} activeClassName={bookStyles.active} className={bookStyles.book_title_link_cell}>
          <h2 className={bookStyles.title_noellipsis}>{post.frontmatter.title}</h2>
        </Link>
      </div>
      <div className={bookStyles.author_date_container}>
        {/* <div className={bookStyles.book_date}>{"Written: " + post.frontmatter.date}</div> */}
        
      </div>

      {!!post.frontmatter.description && <p className={bookStyles.post_description}>{post.frontmatter.description}</p>}

    </div>
  )
}
export default PostLink
