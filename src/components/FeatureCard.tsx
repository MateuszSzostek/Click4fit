import React from "react"

import { Icon, InlineIcon } from "@iconify/react"
import cameraIcon from "@iconify-icons/bytesize/camera"

interface IFeatureCardProps {
  name: string
  description: string
  icon: any
  secondIcon?: any
}

const FeatureCard = (props: IFeatureCardProps) => {
  const { name, description, icon, secondIcon } = props
  return (
    <div className="feature-card">
      <div className="card-icons-container ">
        <div>
          <Icon className="card-icon" icon={icon} />
        </div>
        <div>
          {secondIcon && <Icon className="card-icon" icon={secondIcon} />}
        </div>
      </div>
      <h4 className="card-title">{name}</h4>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard
