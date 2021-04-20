import React from "react"
import Button from "../components/Button"

const Offer = () => {
  return (
    <>
      <section>
        <div className="offer-container">
          <div className="offer-card">
            <h2 className="offer-title">CENA PODSTAWOWA</h2>
            <div>
              <span className="offer-price">49</span>
              <span>zł</span>
            </div>
            <span>miesięcznie</span>
            <span>30 nagrań w bibliotece</span>
            <span>do 5 jednoczesnych uczestniczących w live</span>
            <span>1 nagranie w bibliotece - 1 zł za miesiąc</span>
            <span>1 uczestnik treningu live - 5 zł za miesiąc</span>
            <Button>ZAREJESTRUJ SIĘ</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer
