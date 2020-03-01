import React, { Component } from "react"
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
export default class Pricing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTab: "routine",
    }
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoPlay: true,
      autoplaySpeed: 1000,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }]
    }
    return (
      <div className="main-wrapper pricing-wrapper">
        <div className="container">
          <div
            className="pricing-plan-wrap"
            style={{ overflow: "hidden", position: "relative" }}
          >
            <h2
              style={{
                textAlign: "center",
                textAlign: "center",
                fontSize: "28px",
                color: "#2c2d2d",
                marginBottom: 10,
              }}
            >
              Afforadble Pricing and Packages
            </h2>
            <p className="subheading">
            A Fun way to stay fit & functional
            </p>
            <div>
              <Slider {...settings}>
                <div>
                  <div className="middle-wrap">
                    <div className="highlight">
                      <p>Price starting at</p>
                      <span>Rs 1199/- per month</span>
                    </div>
                    <h3>Routine Workout Plan</h3>

                    <div className="plan-details">
                      {/* <ul>
                    <li>Rs 18,990/ per year </li>
                    <li>Rs 12,990/ per month </li>
                    <li>Rs 8,990/ per 3 month </li>
                    <li>Rs 3,999/ per month </li>
                  </ul> */}
                      <ul>
                        <li>
                          <Image filename="tick.png" /> Functional Training
                        </li>
                        <li>
                          <Image filename="tick.png" /> Calisthenics & Studio
                          Training
                        </li>
                        <li>
                          <Image filename="tick.png" /> Sports Workout & Play
                        </li>
                        <li>
                          <Image filename="tick.png" /> Includes Gym Membership
                          + Sports
                        </li>
                        <li>
                          <Image filename="tick.png" /> 5 days a week Sports &
                          Gym Workout
                        </li>
                      </ul>
                    </div>
                    <button className="cta-btn">View More</button>
                  </div>
                </div>

                <div>
                  <div className="middle-wrap">
                    <div className="highlight">
                      <p>Price starting at</p>
                      <span>Rs 799/- per person</span>
                    </div>
                    <h3>Office Sports Day</h3>
                    <ul>
                      {/* <li>Rs 799/- for 150 minimum pax </li>
                  <li>Rs 899/- for 80-100 pax </li>
                  <li>Rs 999/- for 60-80 pax </li> */}
                      <li>
                        <Image filename="tick.png" />
                        Sports Include: Cricket, Football, Basketball, American
                        Handball, Badminton etc
                      </li>
                      <li>
                        <Image filename="tick.png" />
                        Arrangement Incudes: Complete Catering Arrangement
                        Sports Coordinator & Referees etc
                      </li>
                      <li>
                        <Image filename="tick.png" /> DJ Sound for Music &
                        Commentary
                      </li>
                    </ul>
                    <button className="cta-btn">View More</button>
                  </div>
                </div>

                <div style={{ backgroundColor: "#ff9800" }}>
                  <div className="middle-wrap">
                    <div className="highlight">
                      <p>Price starting at</p>
                      <span>Rs 49/- per person</span>
                    </div>
                    <h3>Corporate Card</h3>
                    {/* <ul>
                  <li>Rs 11,990/ per year </li>
                  <li>Rs 8,490/ per 6 month </li>
                  <li>Rs 5,490/ per 3 month </li>
                </ul>
                <p>Tariff for a subscription of minimum 25 cards</p>
                <ul>
                  <li>Rs 24,990/ per year </li>
                  <li>Rs 19,499/ per 6 month </li>
                  <li>Rs 12,990/ per 3 month </li>
                </ul> */}
                    <ul>
                      <li>
                        <Image filename="tick.png" /> Get Gym Membership +
                        Sports
                      </li>
                      <li>
                        <Image filename="tick.png" /> Multi user access cards
                      </li>
                      <li>
                        <Image filename="tick.png" /> Access to sports centers
                        or Gym nearby
                      </li>
                      <li>
                        <Image filename="tick.png" /> Play any day any sport
                      </li>
                      <li>
                        <Image filename="tick.png" /> Play any day any sport
                      </li>
                      <li>
                        <Image filename="tick.png" /> Match Play and group
                        classes
                      </li>
                    </ul>
                    <button className="cta-btn">View More</button>
                  </div>
                </div>

                <div>
                  <div className="middle-wrap">
                    <div className="highlight">
                      <p>Price starting at</p>
                      <span>Rs 69/- per person</span>
                    </div>
                    <h3 style={{maxWidth: "70%"}}>In-House Fitness Program</h3>
                    {/* <ul>
                  <li>Rs 69/- a day for 100-150 participation</li>
                  <li>Rs 89/- a day for 75-100 participation </li>
                  <li>Rs 99/- a day for 50 minimum participation </li>
                </ul> */}
                    <ul>
                      <li>
                        <Image filename="tick.png" /> Pre work and after work
                        studio programme
                      </li>
                      <li>
                        <Image filename="tick.png" />
                        MMA Fitness, Cardio workout inspired from karate,
                        Taekwondo,Tai Chi & Muay Thai Afro-Zumba & Bhangra
                        Workout
                      </li>
                      <li>
                        <Image filename="tick.png" /> Functional Training
                        (In-house Bootcamp Workout)
                      </li>
                      <li>
                        <Image filename="tick.png" />
                        Outdoor / Offsite Group Activities: 5-a side football,
                        Box Cricket, American Handball ,Mat Kabaddi
                      </li>
                    </ul>
                    <button className="cta-btn">View More</button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
