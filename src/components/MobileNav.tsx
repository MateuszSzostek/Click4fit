import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { IMenuActive } from "../helpers/helpers"

const MobileNav = (props: IMenuActive) => {
  const { menuActive } = props
  return (
    <div>
      <ul
        className={menuActive ? "mob-nav-elements-active" : "mob-nav-elements"}
      >
        <AnchorLink to="/#features">
          <li className="mob-nav-item">FUNKCJE</li>
        </AnchorLink>
        <AnchorLink to="/#howitworks">
          <li className="mob-nav-item">JAK TO DZIAŁA</li>
        </AnchorLink>
        <AnchorLink to="/#offer">
          <li className="mob-nav-item">CENNIK</li>
        </AnchorLink>
        <Link to="/blog">
          <li className="mob-nav-item">BLOG</li>
        </Link>
        <AnchorLink to="/#contact">
          <li className="mob-nav-item">KONTAKT</li>
        </AnchorLink>
      </ul>
    </div>
  )
}

export default MobileNav
