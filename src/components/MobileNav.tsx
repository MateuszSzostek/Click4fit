import React from "react"
import { Link } from "gatsby"

interface IMenuActive {
  menuActive: boolean
}

const MobileNav = (props: IMenuActive) => {
  const { menuActive } = props
  return (
    <div>
      <ul
        className={menuActive ? "mob-nav-elements-active" : "mob-nav-elements"}
      >
        <li className="mob-nav-item">FUNKCJE</li>
        <li className="mob-nav-item">JAK TO DZIAŁA</li>
        <li className="mob-nav-item">CENNIK</li>
        <Link to="/blog">
          <li className="mob-nav-item">BLOG</li>
        </Link>
        <li className="mob-nav-item">KONTAKT</li>
      </ul>
    </div>
  )
}

export default MobileNav
