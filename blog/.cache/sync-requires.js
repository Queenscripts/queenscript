const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/queensform/Desktop/2020/Queenscript/queenscript/blog/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/queensform/Desktop/2020/Queenscript/queenscript/blog/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/queensform/Desktop/2020/Queenscript/queenscript/blog/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/queensform/Desktop/2020/Queenscript/queenscript/blog/src/pages/index.js")))
}

