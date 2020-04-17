const queryTemplate = `{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          path
          date
          thumbnail
          metaDescription
        }
      }
    }
  }
}
`

// const flatten = arr =>
//   arr.map(({ node: { frontmatter, ...rest } }) => ({ ...frontmatter, ...rest }))

// const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: queryTemplate,
    transformer: ({data}) => data.allMarkdownRemark.edges,
    indexName: process.env.ALGOLIA_INDEX_NAME
    // settings,
  }
  // {
  //   query: queryTemplate(
  //     `fileAbsolutePath: {regex: "/posts/"}`,
  //     `tags date(formatString: "MMM D, YYYY")`
  //   ),
  //   settings,
  // },
]

module.exports = queries