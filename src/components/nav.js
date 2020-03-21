/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./nav.css"
import logo from "../../content/assets/profile-pic.jpg"

const Nav = () => {
  return (
    <header id="main-nav">
     <Link to="/" style={{maxWidth: "10%", margin: 0, padding: 0}}> <img src={logo} alt="logo" /> </Link> 
     <Link to="/"> Home</Link>
     <Link to="/#about"> About</Link>
     <Link to="/#portfolio"> Portfolio</Link>
     <Link to="/blog"> Blog</Link>
    </header>
  )
}

export default Nav
