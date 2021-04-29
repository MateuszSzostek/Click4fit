import * as React from "react"
import Head from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import "../css/styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <Head title="Platforma treningowa online" />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
