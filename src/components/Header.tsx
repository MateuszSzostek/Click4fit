import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "./Nav"
import Button from "./Button"

const Header = () => {
  return (
    <div className="header-container">
      <header style={{ marginLeft: "20px", marginRight: "20px" }}>
        <a>
          <StaticImage
            src="../images/click4fit_logo_black.png"
            alt="logo"
            width={130}
          />
        </a>
        <Nav />
        <Button>WYPRÓBUJ ZA DARMO</Button>
      </header>
    </div>
  )
}

export default Header
