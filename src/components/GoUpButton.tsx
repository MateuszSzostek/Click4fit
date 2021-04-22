import React from "react"
import { Icon } from "@iconify/react"
import arrowUpCircle from "@iconify-icons/feather/arrow-up-circle"
import { useScrollTo } from "react-use-window-scroll"

const GoUpButton = () => {
  let scroll = useScrollTo()

  function scrollToTop() {
    scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <div onClick={() => scrollToTop()} className="go-up-button">
      <Icon className="arrow-up-button" icon={arrowUpCircle}></Icon>
    </div>
  )
}

export default GoUpButton
