import React from "react"
import { Link } from "gatsby"
import linkStyles from "./post-link.module.css"
import { GoTag } from 'react-icons/go'

const PostLink = (props) => {
  const { post } = props;

  return (
    <div className={linkStyles.container}>
      <Link to={post.frontmatter.path}>
        <div className={linkStyles.title}>{post.frontmatter.title}</div>
      </Link>
      
      {!!post.frontmatter.author && <div className={linkStyles.author}>By: {post.frontmatter.author}</div>}
      
      {props.type === "blog" && 
        <div className={linkStyles.date}>Written: {post.frontmatter.date}</div>}
      
      {/* {props.type == "book" && 
        <div className={linkStyles.date}>Finished: {post.frontmatter.date}</div>} */}
      
      {!!post.frontmatter.description && <div>{post.frontmatter.description}</div>}
      <div>{post.frontmatter.tags.map((item, i) => 
        <div key={i} className={linkStyles.blogtag}>
          <GoTag/>{item}
        </div>)}
      </div>
    </div>
  )
}
export default PostLink