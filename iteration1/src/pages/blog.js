import React from "react"
import { Link, graphql } from "gatsby"
import Nav from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../content/assets/profile-pic.jpg"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Queenscript posts" />
      <Nav />
      <h1  style={{textAlign: "center"}}> 
        <img alt="blog " src={logo} style={{maxWidth: "30%"}}/> Blog
      </h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <img alt="" src={node.frontmatter.fe} />
              <h3>
                <Link style={{ boxShadow: `0 1px 0 0`,  }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            <small>{node.frontmatter.date}</small>
            <section>
              <p style={{padding: "30px 0"}}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
               <i>Read time: {node.timeToRead} min</i>
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
          timeToRead
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
