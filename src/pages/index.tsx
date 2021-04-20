import * as React from "react"
import Layout from "../components/layout"
import Landing from "../components/Landing"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Offer from "../components/Offer"
import ContactForm from "../components/ContactForm"

const IndexPage = () => (
  <Layout>
    <Landing />
    <Features />
    <HowItWorks />
    <Offer />
    <ContactForm />
  </Layout>
)

export default IndexPage
