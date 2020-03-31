import React from "react"
import {Link} from "gatsby"
import './nav.css';
import logo from "../../content/assets/profile-pic.jpg"
export default (props) => (
  <header > 
    
      <Link to="/" style={{width: "15%", margin: 0, padding: 0}}> <img style={{width: "80%"}} src={logo} alt="logo" /> </Link> 
     <Link to="/"> Home</Link>
     <Link to="/#about"> About</Link>
     <Link to="/#portfolio"> Portfolio</Link>
     <Link to="/blog"> Blog</Link>
  </header>
  
)