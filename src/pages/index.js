import React from "react"
import About from "../components/about"
import Client from "../components/clients"
import Hero from "../components/hero"
import Layout from "../components/layout"
import PricingPlan from "../components/pricing"
import SEO from "../components/seo"
import TrainingPrograms from "../components/trainingPrograms"
import Services from "../components/services"
import Quotes from "../components/quotes"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-wrapper">
      <Hero />
    </div>
    <About />
    <Services />
    <TrainingPrograms />
    <Client />
    {/* <Quotes /> */}
    <PricingPlan />
  </Layout>
)

export default IndexPage