import React, { useEffect } from "react"
import { IPositionProps } from "../helpers/helpers"

const ContactForm = (props: IPositionProps) => {
  const { whereToGo, scrollToFunc } = props
  useEffect(() => {
    if (whereToGo === 4) {
      scrollToFunc(whereToGo)
    }
  }, [whereToGo])

  return (
    <>
      <section className="gray-background">
        <address>
          <div className="contact-container">
            <h2 className="section-title">KONTAKT</h2>
            <h3 className="bold-text">Napisz do nas maila</h3>
            <p>info@click4fit.me</p>
            <h3 className="bold-text">Odwiedź nas</h3>
            <p>Żmigrodzka 244, 51-131, Wrocław, Poland</p>
            <h3 className="bold-text">Zadzwoń do nas</h3>
            <p>+48 535 124 505</p>
          </div>
        </address>
      </section>
    </>
  )
}

export default ContactForm
