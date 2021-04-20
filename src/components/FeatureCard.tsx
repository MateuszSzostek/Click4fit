import React from "react"

interface IFeatureCardProps {
  name: string
  description: string
}

const FeatureCard = (props: IFeatureCardProps) => {
  const { name, description } = props
  return (
    <div className="feature-card">
      <div className="card-icons-container ">
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "lightgray",
          }}
          className=""
        ></div>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "lightgray",
          }}
          className=""
        ></div>
      </div>
      <h4 className="card-title">{name}</h4>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard
