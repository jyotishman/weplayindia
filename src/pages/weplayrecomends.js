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
        <h1 style={style}>We Play Recommends</h1>
        <Image filename="pag-title-bg2.jpg" />
      </div>
    </div>
    <div className="container">
      <div className="main-content-wrapper container">
        <h1>We Play Recommends</h1>
        <p style={{color: "#666", lineHeight: 2}}>
          As an enterprise committed to sports and better sporting performance,
          We Play India will enable you to make a wise decision in terms of
          choosing the perfect sporting gear. As per players of different levels
          & age, our experts will help you make the best choice of quality
          sporting gear manufactured by leading global brands. Based on body
          stamina and physical strength, our senior coaches and trained experts
          will assess the need and propose the right gear to further propel your
          dreams
        </p>
        <div className="main-img-wrapper flex">
          <div className="img-wrapper">
            <Image filename="wilson racket.jpg" />
          </div>
          <div className="img-wrapper">
            <Image filename="yonex.png" />
          </div>
          <div className="img-wrapper">
            <Image filename="kookaburra-cricket-kit-500x500.jpeg" />
          </div>
          <div className="img-wrapper">
            <Image filename="1570984353-structure22-1570984337" />
          </div>
          <div className="img-wrapper">
            <Image filename="rq1hj7wsqbqd8jhg08fa.png" />
          </div>
          <div className="img-wrapper">
            <Image filename="MEN_TENNIS_SHOES_LOW_CK8612_1.jpg" />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </Layout>
)

export default IndexPage
