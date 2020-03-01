import React from "react"
import Image from "./image"
import Slider from "react-slick"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={"slick-arrow slick-next"} onClick={onClick}>
      <Image filename="next.png" />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className={"slick-arrow slick-prev"} onClick={onClick}>
      <Image filename="back.png" />
    </div>
  )
}

export default function Hero() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const next = () => {
    this.slider.slickNext()
  }
  const previous = () => {
    this.slider.slickPrev()
  }

  return (
    <div
      className="hero-section"
      style={{ height: "100vh", overflow: "hidden", position: "relative" }}
    >
      {/* <Image filename="playmulti.jpeg" /> */}
      <Slider {...settings}>
        <div>
          <Image filename="man-about-to-lift-barbell-2261477.jpg" />
          <p className="legend">
            POWERING THE FUTURE OF SPORTS WITH INCLUSIVE PARTICIPATION
          </p>
        </div>
        <div>
          <Image filename="AdobeStock_297528198.jpeg" />
          <p className="legend">
            A vision of making india a true sporting super power
          </p>
        </div>
        <div>
        <Image filename="pag-title-bg2.jpg" />

          <p className="legend">A Fun way to stay fit & functional</p>
        </div>
      </Slider>
    </div>
  )
}
