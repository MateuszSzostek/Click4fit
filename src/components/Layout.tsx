import * as React from "react"
import Head from "./Head"
import Header from "./Header"
import "../css/styles.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
