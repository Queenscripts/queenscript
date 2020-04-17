// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-template-js": () => import("./../src/templates/blogTemplate.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

