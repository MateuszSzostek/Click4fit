import * as React from "react"
import Layout from "../components/Layout"
import Landing from "../components/Landing"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Offer from "../components/Offer"
import ContactForm from "../components/ContactForm"

const IndexPage = () => {
  return (
    <Layout>
      <div id="landing">
        <Landing />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="howitworks">
        <HowItWorks />
      </div>
      <div id="offer">
        <Offer />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </Layout>
  )
}

export default IndexPage
