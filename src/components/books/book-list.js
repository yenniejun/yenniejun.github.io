import React from "react"
import { Link } from "gatsby"
import * as bookStyles from "./book-list.module.css"
import { GoTag } from 'react-icons/go'


const BookList = (props) => {
  const { post } = props;

  return (
    <tr >
        <td className={bookStyles.book_title_link_cell}>
            <Link to={post.frontmatter.path} activeClassName={bookStyles.active}>
                <div className={bookStyles.title}>{post.frontmatter.title}</div>
            </Link>
        </td>
        
        <td className={bookStyles.book_author}>
            {!!post.frontmatter.author && <div>{post.frontmatter.author}</div>}
        </td>

        <td className={bookStyles.book_date}>
            {post.frontmatter.date}
        </td>
 
        <td className={bookStyles.book_rating}>
          {post.frontmatter.rating.toFixed(1) + " / 5"}
        </td>

       
      {/* {props.type == "book" && 
        <div className={linkStyles.date}>Finished: {post.frontmatter.date}</div>} */}
      
      {/* {!!post.frontmatter.description && <div>{post.frontmatter.description}</div>}
      <div>{post.frontmatter.tags.map((item, i) => 
        <div key={i} className={linkStyles.blogtag}>
          <GoTag/>{item}
        </div>)}
      </div> */}
    </tr>
  )
}
export default BookList