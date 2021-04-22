import React from "react"
import { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Button from "./Button"
import { Link } from "gatsby"
import { Icon } from "@iconify/react"

import crossIcon from "@iconify-icons/gridicons/cross"
import menuIcon from "@iconify-icons/heroicons-solid/menu"

const Header = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false)

  function getWidth() {
    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
  }

  let toggleMenu = () => {
    if (getWidth() < 1200) {
      setMenuActive(!menuActive)
    }
  }

  useEffect(() => {
    const resizeListener = () => {
      setMenuActive(false)
    }
    window.addEventListener("resize", resizeListener)
    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

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
        <nav>
          <Nav />
          <MobileNav menuActive={menuActive} />
        </nav>
        <div className="pc-promo-button-wrapper">
          <Button isAnimated={true} animatedText="PRZEZ DWA TYGODNIE">
            WYPRÓBUJ ZA DARMO
          </Button>
        </div>
        <div onClick={toggleMenu} className="mob-menu-button">
          <Icon
            className="menu-button"
            icon={menuActive ? crossIcon : menuIcon}
          ></Icon>
        </div>
      </header>
    </div>
  )
}

export default Header
