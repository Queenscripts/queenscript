import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import logo from "../../content/assets/gatsby-image.png"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
console.log('data', posts)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Queenscript Blog" />
      <h1 style={{display: "flex"}}> <img src={logo} alt="icon logo" style={{display: "flex", flexDirection: "row", maxWidth: "30%", margin: "2%"}}/> Blog</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4), textDecorationLine: "underline"
                }}
              >
                <Link style={{ boxShadow: `none`, color: '#cf532c', }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
             
            <section>
              <p  
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.date}}
                />
              <p
                dangerouslySetInnerHTML={
                  {
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
