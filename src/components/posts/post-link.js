import React from "react"
import { Link } from "gatsby"
import * as linkStyles from "./post-link.module.css"
import * as bookStyles from "../books/book-list.module.css"
import * as panelStyles from "../portfolio/panel.module.css"

import { GoTag } from 'react-icons/go'

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
        <div className={bookStyles.book_date}>{"Written: " + post.frontmatter.date}</div>
        
      </div>
      <div>{post.frontmatter.tags.map((item, i) => 
          <div key={i} className={panelStyles.blogtag}>
            <GoTag/>{item}
          </div>)}
        </div>

      <hr/>
      {!!post.frontmatter.description && <div>{post.frontmatter.description}</div>}

      <Link to={post.frontmatter.path} activeClassName={bookStyles.active} className={bookStyles.read_more}>
          Read more
      </Link>

      
      
      {/* {props.type == "book" && 
        <div className={linkStyles.date}>Finished: {post.frontmatter.date}</div>} */}
      
      
    </div>
  )
}
export default PostLink
