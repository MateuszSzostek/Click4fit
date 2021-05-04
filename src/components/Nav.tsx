import React from "react"
import GoUpButton from "./GoUpButton"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

interface INavProps {
  toggleMenu?: Function
}

const Nav = (props: INavProps) => {
  const { toggleMenu } = props
  return (
    <>
      <ul className="nav-elements">
        <AnchorLink to="/#features" title="Our team">
          <li className="nav-item">FUNKCJE</li>
        </AnchorLink>
        <AnchorLink to="/#howitworks" title="Our team">
          <li className="nav-item">JAK TO DZIAŁA?</li>
        </AnchorLink>
        <AnchorLink to="/#offer" title="Our team">
          <li className="nav-item">CENNIK</li>
        </AnchorLink>
        <Link to="/blog">
          <li className="nav-item">BLOG</li>
        </Link>
        <AnchorLink to="/#contact" title="Our team">
          <li className="nav-item">KONTAKT</li>
        </AnchorLink>
      </ul>
      <GoUpButton />
    </>
  )
}

export default Nav
