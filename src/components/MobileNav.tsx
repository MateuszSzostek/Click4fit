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
        <Link to="/" state={{ whereToGo: 1 }}>
          <li className="mob-nav-item">FUNKCJE</li>
        </Link>
        <Link to="/" state={{ whereToGo: 2 }}>
          <li className="mob-nav-item">JAK TO DZIAŁA</li>
        </Link>
        <Link to="/" state={{ whereToGo: 3 }}>
          <li className="mob-nav-item">CENNIK</li>
        </Link>
        <Link to="/blog">
          <li className="mob-nav-item">BLOG</li>
        </Link>
        <Link to="/" state={{ whereToGo: 4 }}>
          <li className="mob-nav-item">KONTAKT</li>
        </Link>
      </ul>
    </div>
  )
}

export default MobileNav
