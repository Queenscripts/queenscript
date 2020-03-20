/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {

  // avatar: file(absolutePath: { regex: "/gatsby-image.png/" }) {
  //   childImageSharp {
  //     fixed(width: 50, height: 50) {
  //       ...GatsbyImageSharpFixed
  //     }
  //   }
  // }
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
      <div>
      <p>
        Developed by <strong>{author.name}</strong> {author.summary}
        <a href={`https://twitter.com/${social.twitter}`}> Follow on Twitter, or connect below!
        </a>
      </p>
      <div style={{display: "flex", justifyContent: "center", justifyContent: "space-evenly"}}>
      <a
          class="mail info"
          target="_blank"
          href="mailto:queen@queenscript.com"
        >
        _
        </a>
        <a
          class="git info"
          target="_blank"
          href="https://www.github.com/QueenShabazz"
        >
        _ 
        </a>
        <a
          class="in info"
          target="_blank"
          href="https://www.linkedin.com/in/queenshabazz"
        >
        _
        </a>
      </div>
        
      </div>
      
    </div>
  )
}

export default Bio
