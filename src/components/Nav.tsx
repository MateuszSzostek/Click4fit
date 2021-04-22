import React from "react"
import GoUpButton from "./GoUpButton"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <>
      <ul className="nav-elements">
        <li className="nav-item">FUNKCJE</li>
        <li className="nav-item">JAK TO DZIAŁA</li>
        <li className="nav-item">CENNIK</li>
        <Link to="/blog">
          <li className="nav-item">BLOG</li>
        </Link>
        <li className="nav-item">KONTAKT</li>
      </ul>
      <GoUpButton />
    </>
  )
}

export default Nav
