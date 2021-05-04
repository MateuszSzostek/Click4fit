import React from "react"
import { Icon } from "@iconify/react"
import arrowUpCircle from "@iconify-icons/feather/arrow-up-circle"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const GoUpButton = () => {
  return (
    <AnchorLink to={"/#landing"} className="go-up-button">
      <Icon className="arrow-up-button" icon={arrowUpCircle}></Icon>
    </AnchorLink>
  )
}

export default GoUpButton
