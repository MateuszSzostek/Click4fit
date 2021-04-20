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
              <label>Imię</label>
              <input type="text" placeholder="Twoje imię..."></input>
              <label>Nazwisko</label>
              <input type="text" placeholder="Twoje nazwisko..."></input>
              <label>Email</label>
              <input type="text" placeholder="Twoj email..."></input>
              <label>Telefon</label>
              <input type="text" placeholder="Twoje numer telefonu..."></input>
              <Button>WYŚLIJ</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
