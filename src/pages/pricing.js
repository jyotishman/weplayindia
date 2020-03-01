import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(" + -50 + "%, " + -50 + "%)",
  zIndex: 99,
  color: "#fff",
}

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about-hero-wrapper">
      <div
        className="about-img-wrapper"
        style={{ height: 400, overflow: "hidden", position: "relative" }}
      >
        <h1 style={style}>Afforadble Pricing and Packages</h1>
        <Image filename="pag-title-bg2.jpg" />
      </div>
    </div>
    <div className="main-content-wrapper container">
      <h1>Find The Perfect Plan</h1>
      <div className="package-item">
        <h2>WEPLAY Routine Workout Program</h2>
        <ul>
          <li>Rs 18,990/- for 1 year subscription Rs</li>
          <li>
            12,990/- for 6 months subscription Rs 8,990/- for 3 month
            subscription
          </li>
          <li>Rs 3,999/- for 1 month</li>
        </ul>
      </div>
      <div className="package-item">
        <h2>WEPLAY Office Sports Day</h2>
        <ul>
          <li>Rs 799/- for 150 minimum pax</li>
          <li>Rs 899/- for 80-100 pax</li>
          <li>Rs 999/- for 60-80 pax</li>
        </ul>
      </div>
      <div className="package-item">
        <h2>WEPLAY Corporate Card</h2>
        <h5>Tariff for a subscription of above 50 cards</h5>
        <ul>
          <li>Rs 49/- per session for a 1 year subscription of Rs 11,990/-</li>
          <li>Rs 69/- per session for a for 6 months subscription- Rs 8,490/-</li>
          <li>Rs 79/- per session for a for 3 month subscription- Rs 5,490/-</li>
        </ul>
        <h5>Tariff for a subscription of minimum 25 cards</h5>
        <ul>
          <li>Rs 99/- for 1 year subscription- Rs 24,990/-</li>
          <li>Rs 149/- for 6 months subscription- Rs 19,499/-</li>
          <li>Rs 199/- for 3 month subscription- Rs 12,990/-</li>
        </ul>
      </div>
      <div className="package-item">
        <h2>WEPLAY In-House Fitness Program</h2>
        <ul>
          <li>Rs 69/- a day for 100-150 participation</li>
          <li>Rs 89/- a day for 75-100 participation</li>
          <li>Rs 99/- a day for 50 minimum participation</li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  </Layout>
)

export default IndexPage
