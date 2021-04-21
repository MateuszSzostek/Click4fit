import React from "react"
import { PropsWithChildren, useState, useEffect } from "react"

interface IButtonProps {
  isAnimated?: boolean
  animatedText?: string
}

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { children, isAnimated, animatedText } = props
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
        <a className="animated-button">
          <div className="first-text"> {children}</div>
          <div className="second-text">{animatedText}</div>
        </a>
      ) : (
        <a href="" className="button">
          <div className="button-text">{children}</div>
        </a>
      )}
    </>
  )
}

export default Button
