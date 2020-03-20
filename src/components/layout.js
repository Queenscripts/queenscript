import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Bio from "./bio"
// import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let headerMain

  if (location.pathname === rootPath) {
    headerMain = (
      <>
     
      {/* <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      > */}
       
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <img style={{width:"20%", display: "flex"}} alt="me-icon" src="../webme.png"/>
          {title}
        </Link>
      {/* </h1> */}
      </>
    )
  } else {
    headerMain = (
      <h1
        style={{
          fontFamily: `Raleway, sans-serif`,
          marginTop: 0,
          top: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  }
  return (
    <div
      style={{
        maxWidth: "100%",
        padding: 0,
      }}
    >
      <main>{children}</main>
      <footer>
          <Bio />
      </footer>
    </div>
  )
}

export default Layout
