import React, { PropsWithChildren, useState, useEffect } from "react"
import { IButtonProps } from "../helpers/helpers"

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { children, isAnimated, animatedText, slug } = props
  const [animated, setAnimated] = useState<boolean>(false)
  const [buttonText, setButtonText] = useState<string>("")

  useEffect(() => {
    if (typeof isAnimated === "undefined") {
      setAnimated(false)
    } else {
      setAnimated(isAnimated as boolean)
    }
    if (typeof animatedText === "undefined") {
      setButtonText("")
    } else {
      setButtonText(animatedText as string)
    }
  }, [])

  return (
    <>
      {isAnimated ? (
        <a href={slug} className="animated-button">
          <div className="first-text"> {children}</div>
          <div className="second-text">{animatedText}</div>
        </a>
      ) : (
        <a href={slug} className="button">
          <div className="button-text">{children}</div>
        </a>
      )}
    </>
  )
}

export default Button
