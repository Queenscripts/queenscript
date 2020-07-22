import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
       <SEO
          title={frontmatter.title}
          description={frontmatter.metaDescription}
          image={frontmatter.thumbnail}
        />
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
        <div className="post-thumbnail" style={{backgroundSize: "cover", display: "flex"}}>
          <h1 className="post-title">{frontmatter.title}</h1>
        <div className="post-meta">{frontmatter.date}</div>
      </div>
          )}
          {!!frontmatter.thumbnail && (
            <>
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`, padding: "4vw"}}>          
              <div style={{background: "rgba(255, 255, 255, 0.9)", display: "flex", alignItems: "baseline", flexDirection: "column", padding: "10px", width: "100%"}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <br></br>
              <div className="post-meta"><small style={{fontWeight:'300'}}> {frontmatter.date}</small><br></br><small>{data.markdownRemark.timeToRead} min read</small></div>
              </div>
            </div>
            </>
          )}
          <div
            className="blog-post-content"
            style={{width:" 100%"}}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`