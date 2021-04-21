import React from "react"
import FeatureCard from "../components/FeatureCard"
import { cardsData } from "../data/featureCardsData"

const Features = () => {
  return (
    <>
      <section className="gray-background">
        <div className="features-container">
          <h2 className="section-title">FUNKCJE</h2>
          <div className="feature-grid-container">
            {cardsData.map(s => (
              <FeatureCard
                key={s.id}
                name={s.name}
                description={s.description}
                icon={s.icon}
                secondIcon={s.secondIcon}
              ></FeatureCard>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
