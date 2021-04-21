import React from "react"
import Button from "../components/Button"
import { Icon, InlineIcon } from "@iconify/react"
import circleCheck from "@iconify-icons/akar-icons/circle-check"
import plusIcon from "@iconify-icons/fa-solid/plus"

const Offer = () => {
  return (
    <>
      <section>
        <div className="offer-container">
          <div className="offer-card">
            <h2 className="offer-title">CENA PODSTAWOWA</h2>
            <div>
              <span className="offer-price">49</span>
              <span className="offer-price-desc">zł</span>
            </div>
            <span className="offer-price-desc">miesięcznie</span>
            <br />
            <div className="offer-text-description">
              <Icon className="offer-icon" icon={circleCheck}></Icon>
              <span> 30 nagrań w bibliotece</span>
            </div>
            <div className="offer-text-description">
              <Icon className="offer-icon" icon={circleCheck}></Icon>
              <span> do 5 jednoczesnych uczestniczących w live</span>
            </div>
            <div className="offer-text-description">
              <Icon className="offer-icon" icon={plusIcon}></Icon>
              <span> 1 nagranie w bibliotece - 1 zł za miesiąc</span>
            </div>
            <div className="offer-text-description">
              <Icon className="offer-icon" icon={plusIcon}></Icon>
              <span> 1 uczestnik treningu live - 5 zł za miesiąc</span>
            </div>
            <br />
            <Button>ZAREJESTRUJ SIĘ</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer
