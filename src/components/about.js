import React from "react"
import Image from "./image"

export default function About() {
  const styles = {
    mainWrap: {
      display: "flex",
    },
    leftWrap: {
      flex: 1,
      position: "relative",
    },
    rightWrap: {
      flex: 1,
      paddingLeft: 90,
    },
  }

  return (
    <div className="about-wrap main-wrapper">
      <div className="container">
        <div className="main-wrap flex">
          <div className="left-wrap" style={styles.leftWrap}>
            <div className="inner-wrap">
              <Image filename="playmulti.jpeg" />
            </div>
          </div>
          <div className="right-wrap" style={styles.rightWrap}>
            <h2 className="heading">
              A vision of making india a true sporting super power
            </h2>
            <p className="sub-heading">About us</p>
            <span className="content">
              {" "}
              We Play India is a sporting dream that is powered by a billion
              dreams. Making this dream a reality is our core focus as our
              dedicated sports professionals are leaving no stone unturned to
              breed and nurture the spirit of sports enthusiasts across all age
              groups.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
