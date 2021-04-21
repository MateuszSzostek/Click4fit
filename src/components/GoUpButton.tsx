import React from "react"
import { Icon } from "@iconify/react"
import arrowUpCircle from "@iconify-icons/feather/arrow-up-circle"

const GoUpButton = () => {
  return (
    <div className="go-up-button">
      <Icon className="arrow-up-button" icon={arrowUpCircle}></Icon>
    </div>
  )
}

export default GoUpButton
