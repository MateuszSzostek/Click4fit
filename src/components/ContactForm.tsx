import React from "react"
import Button from "../components/Button"

const ContactForm = () => {
  return (
    <>
      <section className="gray-background">
        <div className="double-container">
          <div className="double-grid">
            <div>
              <h2 className="section-title">KONTAKT</h2>
              <p className="description-text">
                Zamów bezpłatny 2 tygodniowy okres próbny. Wypełnij formularz –
                skontaktujemy się z Tobą!
              </p>
            </div>
            <form className="contact-form">
              <label className="bold-text" htmlFor="name">
                Imię
              </label>
              <input
                type="text"
                name="name"
                placeholder="Twoje imię..."
              ></input>
              <label className="bold-text" htmlFor="surname">
                Nazwisko
              </label>
              <input
                type="text"
                name="surname"
                placeholder="Twoje nazwisko..."
              ></input>
              <label className="bold-text" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Twoj email..."
              ></input>
              <label className="bold-text" htmlFor="phone">
                Telefon
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Twoje numer telefonu..."
              ></input>
              <br />
              <Button>WYŚLIJ</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
