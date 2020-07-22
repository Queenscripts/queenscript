const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/queensform/Desktop/2020/Queenscript/queenscript/src/templates/blogTemplate.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/queensform/Desktop/2020/Queenscript/queenscript/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/queensform/Desktop/2020/Queenscript/queenscript/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/queensform/Desktop/2020/Queenscript/queenscript/src/pages/index.js")))
}

