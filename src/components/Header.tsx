import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Button from "./Button"
import { Icon } from "@iconify/react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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
        <AnchorLink to="/#landing">
          <StaticImage
            src="../images/click4fit_logo_black.png"
            alt="logo"
            width={130}
          />
        </AnchorLink>
        <nav>
          <Nav />
          <MobileNav menuActive={menuActive} />
        </nav>
        <div className="pc-promo-button-wrapper">
          <Button
            slug={"https://app.click4fit.me/register-to-create-organisation"}
            isAnimated={true}
            animatedText="PRZEZ DWA TYGODNIE"
          >
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
