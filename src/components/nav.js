import React from "react"
import { Link } from "gatsby"
import "./nav.css"
import logo from "../../content/assets/gatsby-image.png"

const Nav = () => {
   
    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
      }
    
    return <>
        <section className="section">
        </section>
        <header>
            <nav className="links">
                <div id="main-nav">
                <img style={{width: "10%", height: "auto", padding: "2px 0", margin: "15px 0"}} src={logo} alt="logo"/>
                    <Link to="/"> Home </Link>
                    <Link data-scroll to="/#about"> About </Link>
                    <Link data-scroll to="/#portfolio"> Portfolio </Link>
                    <Link to="/blog"> Blog </Link>
                </div>
            </nav>
        </header>
        
    </>
    
}

export default Nav