import React from "react"
import Sport from "../videos/Sport.mp4"
import Button from "../components/Button"

const Landing = () => {
  return (
    <>
      <section>
        <div className="landing-container">
          <video className="video-background" autoPlay muted loop>
            <source src={Sport} type="video/mp4"></source>
          </video>
          <div className="landing-text">
            <h1 className="landing-heading">
              KOMPLEKSOWA PLATFORMA DO TRENINGÓW ONLINE
            </h1>
            <h2 className="landing-description">
              BUDUJ LOJALNĄ SPOŁECZNOŚĆ NIEZALEŻNIE OD SYTUACJI
            </h2>
            <Button>WYPRÓBUJ ZA DARMO PRZEZ 2 TYGODNIE</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="description-section">
          <h1 className="section-title">
            PROWADŹ I NAGRYWAJ
            <br />
            AUTORSKIE ĆWICZENIA SPORTOWE DLA ZAREJESTROWANYCH UŻYTKOWNIKÓW
          </h1>
          <h3 className="description-text">
            Platforma Click4fit wychodzi naprzeciw współczesnym potrzebom
            trenerów personalnych, instruktorów sportowych oraz studiów fitness.
            Prowadzenie treningów online, nawet dla większych grup, jeszcze
            nigdy nie było tak proste i wygodne!
          </h3>
        </div>
      </section>
    </>
  )
}

export default Landing
