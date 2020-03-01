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
        <h1 style={style}>About us</h1>
        <Image filename="pag-title-bg2.jpg" />
      </div>
    </div>
    <div className="container">
      <div className="main-content-wrapper container">
        <h1>About us</h1>
        <p className="content">
          We Play India is a sporting dream that is powered by a billion dreams.
          Making this dream a reality is our core focus as our dedicated sports
          professionals are leaving no stone unturned to breed and nurture the
          spirit of sports enthusiasts across all age groups.
        </p>
        <h2 style={{ color: "#ff9800" }}>
          THE SPORTING STALWART WHO IS SHAPING CHAMPIONS
        </h2>
        <div className="pro-img-wrapper">
          <div className="img-wrap">
            <Image filename="hqdefault.jpg" />
          </div>
          <div className="details">
            <h5>Mr. Raj Hazarika</h5>
            <h5>Founder & Director</h5>
            <h5>Ryder's Sports Academy</h5>
          </div>
        </div>
        <p className="content">
          A national level tennis player, Mr. Raj Hazarika has been recognised
          by CNBC as a young entrepreneur and has been the bestowed the title of
          'Young Turk' in one of their flagship Television Programmes. It takes
          an indomitable spirit and a gush of adrenaline to steer the
          magnanimous effort of shaping the sporting destinies of countless
          young sports prodigies. As a young achiever, he has successfully
          established 7 multi-sports complexes in Delhi & Gurugram from ground
          zero and has been ably running them with a team of 200 staff members.
        </p>
        <br />
        <hr />
        <br />
        <h2 style={{ color: "#10c70f" }}>
          NURTURING INTELLECT OF YOUNG ACHIEVERS WITH SHARP MIND GAMES
        </h2>
        <div className="pro-img-wrapper">
          <div className="img-wrap" style={{ borderColor: "#10c70f" }}>
            <Image filename="deepak-ryders.png" />
          </div>
          <div className="details">
            <h5>Mr. Deepak Arora</h5>
            <p className="content">
              {" "}
              Deepak Arora, a graduate from IIT Delhi has 27 years of experience
              working in the IT Industry with leading Fortune 500 companies like
              IBM & American Express.
            </p>
          </div>
        </div>
        <p className="content">
          A national level tennis player, Mr. Raj Hazarika has been recognised
          by CNBC as a young entrepreneur and has been the bestowed the title of
          'Young Turk' in one of their flagship Television Programmes. It takes
          an indomitable spirit and a gush of adrenaline to steer the
          magnanimous effort of shaping the sporting destinies of countless
          young sports prodigies. As a young achiever, he has successfully
          established 7 multi-sports complexes in Delhi & Gurugram from ground
          zero and has been ably running them with a team of 200 staff members.
        </p>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </Layout>
)

export default IndexPage
