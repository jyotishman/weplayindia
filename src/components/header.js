import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Image from "./image"

const Header = ({ siteTitle }) => {
  const [count, setCount] = useState(false)
  const next = () => {
    setCount(!count)
  }

  return (
    <header
      style={{
        position: "absolute",
        width: "100%",
        left: 0,
        top: 0,
        zIndex: 9,
        padding: "0 30px",
      }}
    >
      <div className="flex ">
        <h1 style={{ margin: 0 }} className="logo">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <span>We</span>
            <span>Play</span>
            <span>India</span>
          </Link>
        </h1>
        <div className="desktop-menu">
          <ul className="flex">
            <li>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Pricing & Packages
              </Link>
            </li>
            <li>
              <Link
                to="/weplayrecomends"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                We Play Recomends
              </Link>
            </li>
            
          </ul>
        </div>
        {count && (
          <div className="menu">
            <ul className="flex">
              <li>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/weplayrecomends"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  We Play Recomends
                </Link>
              </li>
              
            </ul>
          </div>
        )}
        <div className="menu-icon" onClick={() => next()}>
          <span>
            {" "}
            <Image filename="menu.png" />
          </span>
        </div>
      </div>
      {count && (<div className="overlay" onClick={() => next()}></div>)}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
