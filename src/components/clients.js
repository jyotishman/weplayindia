import React from "react"
import Image from "./image"

export default function Clients({}) {
  return (
    <div
      className="client-main-wrap main-wrapper"
    >
      <div className="container">
        <h2 style={{ textAlign: "center" }} className="main-heading">
          Trusted by companies
        </h2>
        <p className="subheading">
          Monotonectally grow strategic process improvements vis-a-vis
          integrated resources.
        </p>
        <div className="clients-wrap">
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="Allianz-symbol.jpg" />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="DELOITTE.jpeg" />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="IBM.png" />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="mckinsey_logo.png" />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="kpmg.png" />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="rq1hj7wsqbqd8jhg08fa.png" />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="benetton logo.png" />
          </div>
          <div className="img-wrapper">
            <Image
              alt="Gatsby in Space"
              filename="AXP_BlueBoxLogo_EXTRALARGEscale_RGB_DIGITAL_1600x1600.png"
            />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="AIRTEL LOGO.jpg" />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="ACCENTURE LOGO.png" />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="OPPO_LOGO_2019.png" />
          </div>
          <div className="img-wrapper">
            <Image
              alt="Gatsby in Space"
              filename="Maruti-Suzuki-Logo-2019.jpg"
            />
          </div>
          <div className="img-wrapper">
            <Image alt="Gatsby in Space" filename="walmart.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
