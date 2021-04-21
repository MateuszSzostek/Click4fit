import React from "react"
import { PropsWithChildren } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "./Nav"
import Button from "./Button"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="header-container">
      <header style={{ marginLeft: "20px", marginRight: "20px" }}>
        <Link to="/">
          <StaticImage
            src="../images/click4fit_logo_black.png"
            alt="logo"
            width={130}
          />
        </Link>
        <Nav />
        <Button isAnimated={true} animatedText="PRZEZ DWA TYGODNIE">
          WYPRÓBUJ ZA DARMO
        </Button>
      </header>
    </div>
  )
}

export default Header
