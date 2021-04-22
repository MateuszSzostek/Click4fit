import FeatureCard from "../components/FeatureCard"
import { cardsData } from "../data/featureCardsData"
import React, { useEffect } from "react"
import { IPositionProps } from "../helpers/helpers"

const Features = (props: IPositionProps) => {
  const { whereToGo, scrollToFunc } = props
  useEffect(() => {
    if (whereToGo === 1) {
      scrollToFunc(whereToGo)
    }
  }, [whereToGo])

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
