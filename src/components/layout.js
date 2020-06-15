import React from "react"

import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="mainContainer">
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Developed by
        {` `}
        Caminho Livre
      </footer>
    </div>
  )
}

export default Layout
