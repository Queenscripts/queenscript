import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) =>   (
  <article class="card ">
      {console.log(post, "HELLO")}

   
    <>
    <span style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
        </h2>
        <Link to={post.frontmatter.path}>
      {console.log(post.frontmatter)}
      {!!post.frontmatter.thumbnail && (
        <img style={{width: "60vw", padding: 10}} src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
        <p style={{lineHeight: "1"}}>{post.excerpt}</p>
        <div class="post-meta" style={{fontSize: 12, textTransform: "lowercase"}}>{post.frontmatter.date}</div>
    </span>
     
    </>
  </article>
)
export default PostLink