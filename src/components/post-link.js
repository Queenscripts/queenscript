import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) =>   (
  <article>
    <>
    <span style={{display: "flex", flexDirection: "row"}}>
        <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail && (
        <img style={{width: "42vw", padding: 5, margin: "10px 2px"}} src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
        </Link>
        <div style={{padding: 0}}>
          <h2 className="post-title" style={{fontSize: "3vw"}}>          
          <Link to={post.frontmatter.path} className="post-link">
            {post.frontmatter.title}
          </Link>
          </h2>
          <div className="post-meta" style={{fontSize: "1.5vw", textTransform: "capitalize"}}>{post.frontmatter.date} • <span style={{fontWeight: 700}}>{post.timeToRead} min read</span> </div>
          <p style={{lineHeight: "1.2", fontSize: "2.5vw", fontWeight: 100}}>{post.excerpt}</p>
        </div>
    </span>
    </>
  </article>
)
export default PostLink