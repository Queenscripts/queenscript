import React from "react"


const Layout = ({ location, title, children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer>
       
        {` `}
      Developed by <strong>Queen Shabazz</strong>who lives and works in Oakland, California building with purpose.
      
               <a href="https://twitter.com/_queenscript"> Follow on Twitter, or connect below!</a>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
              <a class="mail info" target="_blank" href="mailto:queen@queenscript.com">_</a>
              <a class="git info" target="_blank" href="https://www.github.com/QueenShabazz">_</a>
              <a class="in info" target="_blank" href="https://www.linkedin.com/in/queenshabazz">_</a>
            </div>
           ©  Queen Shabazz  {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
