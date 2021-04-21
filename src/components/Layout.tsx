import * as React from "react"
import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import "../css/styles.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
