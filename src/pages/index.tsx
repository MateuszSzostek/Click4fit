import * as React from "react"
import { useRef, useState, useEffect } from "react"
import Layout from "../components/layout"
import Landing from "../components/Landing"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Offer from "../components/Offer"
import ContactForm from "../components/ContactForm"

import { useScrollBy } from "react-use-window-scroll"

const IndexPage = location => {
  let scroll = useScrollBy()
  const [position, setPosition] = useState<number>(0)
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

  useEffect(() => {
    if (location.location.state === null) {
      setPosition(0)
    } else {
      setPosition(location.location.state.whereToGo)
    }
  }, [position])

  let locations = [landingRef, featuresRef, howItWorksRef, offerRef, contactRef]

  return (
    <Layout>
      <div ref={landingRef}>
        <Landing />
      </div>
      <div ref={featuresRef}>
        <Features whereToGo={position} scrollToFunc={scrollFunc} />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorks whereToGo={position} scrollToFunc={scrollFunc} />
      </div>
      <div ref={offerRef}>
        <Offer whereToGo={position} scrollToFunc={scrollFunc} />
      </div>
      <div ref={contactRef}>
        <ContactForm whereToGo={position} scrollToFunc={scrollFunc} />
      </div>
    </Layout>
  )
}

export default IndexPage
