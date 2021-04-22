import * as React from "react"
import { useRef } from "react"
import Layout from "../components/layout"
import Landing from "../components/Landing"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Offer from "../components/Offer"
import ContactForm from "../components/ContactForm"

import { useScrollBy } from "react-use-window-scroll"

const IndexPage = location => {
  let scroll = useScrollBy()

  let landingRef = useRef<HTMLDivElement>()
  let featuresRef = useRef<HTMLDivElement>()
  let howItWorksRef = useRef<HTMLDivElement>()
  let offerRef = useRef<HTMLDivElement>()
  let contactRef = useRef<HTMLDivElement>()

  function scrollFunc(where: number) {
    if (locations[where].current != null) {
      scroll({
        top: locations[where].current.getBoundingClientRect().y - 50,
        left: 0,
        behavior: "smooth",
      })
    }
  }

  let locations = [landingRef, featuresRef, howItWorksRef, offerRef, contactRef]

  return (
    <Layout>
      <div ref={landingRef}>
        <Landing />
      </div>
      <div ref={featuresRef}>
        <Features
          whereToGo={location.location.state.whereToGo}
          scrollToFunc={scrollFunc}
        />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorks
          whereToGo={location.location.state.whereToGo}
          scrollToFunc={scrollFunc}
        />
      </div>
      <div ref={offerRef}>
        <Offer
          whereToGo={location.location.state.whereToGo}
          scrollToFunc={scrollFunc}
        />
      </div>
      <div ref={contactRef}>
        <ContactForm
          whereToGo={location.location.state.whereToGo}
          scrollToFunc={scrollFunc}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
