import React from "react"
import GoUpButton from "./GoUpButton"

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="nav-elements">
          <li className="nav-item">FUNKCJE</li>
          <li className="nav-item">JAK TO DZIAŁA</li>
          <li className="nav-item">CENNIK</li>
          <li className="nav-item">BLOG</li>
          <li className="nav-item">KONTAKT</li>
        </ul>
      </nav>
      <GoUpButton />
    </>
  )
}

export default Nav
