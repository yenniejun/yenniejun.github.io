import React from "react"
import { Link } from "gatsby"
import linkStyles from "./post-link.module.css"
import { GoTag } from 'react-icons/go'

const PostLink = ({ post }) => (
  <div className={linkStyles.container}>
    <Link to={post.frontmatter.path}>
      <div className={linkStyles.title}>{post.frontmatter.title}</div>
      <div className={linkStyles.date}>{post.frontmatter.date}</div>
      <div>{post.frontmatter.description}</div>
      <div>{post.frontmatter.tags.map((item, i) => 
        <div className={linkStyles.blogtag}><GoTag/>{item}</div>)}
      </div>
    </Link>
  </div>
)
export default PostLink