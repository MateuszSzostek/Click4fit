import React from "react"

const Button = ({ children }) => {
  return (
    <div className="button">
      <a href="" className="button-text">
        {children}
      </a>
    </div>
  )
}

export default Button
