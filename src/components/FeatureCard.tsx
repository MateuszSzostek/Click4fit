import React, { useState } from "react"
import { Icon } from "@iconify/react"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import { IFeatureCardProps } from "../helpers/helpers"

const FeatureCard = (props: IFeatureCardProps) => {
  const { name, description, icon, secondIcon } = props

  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <div className="feature-card">
      <div className="card-icons-container ">
        <div>
          <Icon className="card-icon" icon={icon} />
        </div>
        <div>
          {secondIcon && (
            <div onClick={onOpenModal} className="icon-modal">
              <Icon className="card-icon" icon={secondIcon} />
            </div>
          )}
        </div>
      </div>
      <h4 className="card-title">{name}</h4>
      <p>{description}</p>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>FUNKCJE KALENDARZA TRENINGOWEGO:</h2>
        <ul>
          <li>sam ustalasz daty i godziny treningów</li>
          <li>
            użytkownicy mogą zapisać się na konkretny trening lub zaproponować
            inną datę i godzinę treningu indywidualnego
          </li>
          <li>
            treningi mogą mieć charakter otwarty i być dostępne dla wszystkich
            użytkowników Twojej platformy lub być dostępne wyłącznie po
            opłaceniu
          </li>
          <li>
            dostęp do treningów i nagrań treningowych możesz dowolnie
            konfigurować z poziomu kalendarza
          </li>
        </ul>
      </Modal>
    </div>
  )
}

export default FeatureCard
