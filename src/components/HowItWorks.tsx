import Sport from "../videos/Sport.mp4"
import React from "react"

const HowItWorks = () => {
  return (
    <>
      <section className="dark-gray-background">
        <div className="double-container">
          <div className="double-grid">
            <div>
              <h2 className="section-title-light">ZOBACZ JAK DZIAŁA</h2>
              <p className="description-text-white">
                Obejrzyj, jak działa platforma Click4fit
              </p>
            </div>
            <div>
              <video className="example-video" controls>
                <source src={Sport} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks
