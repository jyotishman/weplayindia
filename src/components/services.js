import React from "react"

export default function Services() {
  return (
    <div className="main-wrapper services-wrapper">
      <div className="container">
        <div className="inner-wrapper">
          <h2 className="main-heading">Area of Expertise</h2>
          <p className="subheading">
            The content delivery needs to be original & engrossing to hold the
            attention of the visitors.
          </p>
          <div className="services-wrap flex">
            <div className="left-wrap">
              <p>School Sports Training Programme</p>
              <p>Community Sports Meets</p>
              <p>
                Organise Corporate Sports Day, Sports fest and a host of other
                exciting activities
              </p>
              <p>Health Campaign & Marathon Runs</p>
              <p>
                Academy Training on various sports for both competitive training
                & recreational sports
              </p>
              <p>Design & Layout of Sporting Arenas</p>
            </div>
            <div className="center-wrap">
              <h1 style={{ margin: 0, textAlign: "center" }} className="logo">
                <div
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  <span>We</span>
                  <span>Play</span>
                  <span>India</span>
                </div>
              </h1>
            </div>
            <div className="right-wrap">
              <p>Sports themed Social Events</p>
              <p>
                Gym & Fitness training for athletes and daily fitness workout
              </p>
              <p>
                Facility Provider for various competitions, matches, school
                sportsfests & corporate sports events
              </p>
              <p>Coaches Training Programme</p>
              <p>
                Conduct National Level Tournaments, Inter School Sports Meet,
                Inter Corporate Leagues
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
