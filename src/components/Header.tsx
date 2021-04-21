import React from "react"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "./Nav"
import Button from "./Button"
import { Link } from "gatsby"
import { Icon } from "@iconify/react"

import cross11 from "@iconify-icons/maki/cross-11"
import menuIcon from "@iconify-icons/heroicons-solid/menu"

const Header = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)
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
        <div className="pc-promo-button-wrapper">
          <Button isAnimated={true} animatedText="PRZEZ DWA TYGODNIE">
            WYPRÓBUJ ZA DARMO
          </Button>
        </div>
        <div className="mob-menu-button">
          <Icon className="menu-button" icon={menuIcon}></Icon>
        </div>
      </header>
    </div>
  )
}

export default Header
