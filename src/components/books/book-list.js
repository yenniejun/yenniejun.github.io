import React from "react"
import { Link } from "gatsby"
import * as bookStyles from "./book-list.module.css"
import { GoTag } from 'react-icons/go'


const BookList = (props) => {
  const { post } = props;

  return (
    <div className={bookStyles.book_post_container}>
      <div className={bookStyles.book_title_container}>
        <Link to={post.frontmatter.path} activeClassName={bookStyles.active} className={bookStyles.book_title_link_cell}>
          <h2 className={bookStyles.title}>{post.frontmatter.title}</h2>
        </Link>
        <div className={bookStyles.book_rating}>
          {post.frontmatter.rating.toFixed(1) + " / 5"}
        </div>
      
      </div>

      <div className={bookStyles.author_date_container}>
        {!!post.frontmatter.author && <div className={bookStyles.book_author}>{"By: " + post.frontmatter.author}</div>}
        <div>|</div>
        <div className={bookStyles.book_date}>{"Finished: " + post.frontmatter.date}</div>
      </div>

      <hr/>

      {!!post.frontmatter.description && <div>{post.frontmatter.description}...</div>}


      <Link to={post.frontmatter.path} activeClassName={bookStyles.active} className={bookStyles.read_more}>
          Read more
      </Link>

      
      {/* <div>{post.frontmatter.tags.map((item, i) => 
        <div key={i} className={linkStyles.blogtag}>
          <GoTag/>{item}
        </div>)} */}
      </div> 
  )
}
export default BookList