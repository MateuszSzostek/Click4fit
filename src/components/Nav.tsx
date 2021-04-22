import React from "react"
import GoUpButton from "./GoUpButton"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <>
      <ul className="nav-elements">
        <Link to="/" state={{ whereToGo: 1 }}>
          <li className="nav-item">FUNKCJE</li>
        </Link>
        <Link to="/" state={{ whereToGo: 2 }}>
          <li className="nav-item">JAK TO DZIAŁA</li>
        </Link>
        <Link to="/" state={{ whereToGo: 3 }}>
          <li className="nav-item">CENNIK</li>
        </Link>
        <Link to="/blog">
          <li className="nav-item">BLOG</li>
        </Link>
        <Link to="/" state={{ whereToGo: 4 }}>
          <li className="nav-item">KONTAKT</li>
        </Link>
      </ul>
      <GoUpButton />
    </>
  )
}

export default Nav
