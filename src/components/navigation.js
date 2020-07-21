import React from "react"
import {Link} from "gatsby"
import './nav.css';
import logo from "../../content/assets/profile-pic.jpg"
import Search from "../components/Search"

const searchIndices = [
  { name: `queenscript`, title: `Posts`, hitComp: `PageHit` },
]

export default (props) => (
  <header > 
    <Link to="/" style={{margin: 0, padding: "1px 0 0 10px"}}> <img style={{width: "10vw"}} src={logo} alt="logo" /> </Link> 
     <Link to="/#about"> About</Link>
     <Link to="/#portfolio"> Portfolio</Link>
     <Link to="/blog"> Blog</Link>
     <Search style={{margin: "0 9px"}} collapse indices={searchIndices} />
  </header>
  
)