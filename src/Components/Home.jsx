import React from 'react';
import wind1 from "../Images/wind2.svg";
import trustWorthy from "../Images/trust (2) 1.png";
import inspiredByNature from "../Images/planet-earth 1.svg";
import hero1 from "../Images/Hero img 1 1.png";
import hero2 from "../Images/Hero img 2 1.png";
import wind2 from "../Images/wind1 1.png";
import circle from "../Images/circle2.png"
import "../Styles.css"
const Home = () => {
  return (
    <div className='row pl-3 heroRow' id="home">

      <div className='col-lg-6 col-md-12 heroSection'>
        <img src={wind1} alt="1" />
        <p style={{ fontSize: "35px" }}>START YOUR NEW JOURNEY</p>
        <p style={{ fontSize: "35px" }}>WITH <span style={{ color: "#008080" }}>BREATHE MATTERS</span></p>
        <p style={{ color: "#888888", fontSize: "20px" }}>Elevating well-being through innovative solutions, where every breath unfolds a path to tranquility and vibrant living.</p>
        <div className='d-flex heroSection1' style={{ gap: "25px" }}>
          <button style={{ backgroundColor: "#008080", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", border: "none", borderRadius: "8px", padding: "10px 80px" }}>Join Us</button>
          <div className='d-flex flex-column justify-content-center' style={{ alignItems: "center" }}>
            <img style={{ width: "20px" }} src={trustWorthy} alt="t" />
            <div >Trustworthy</div>
          </div>
          <div className='d-flex flex-column justify-content-center' style={{ alignItems: "center" }}>
            <img style={{ width: "20px" }} src={inspiredByNature} alt="a" />
            <div >Inspired by nature</div>
          </div>
        </div>
      </div>

      <div className='col-lg-6 col-md-12'>
        <div style={{ position: "relative" }}>
          <img
            className='herobackground'
            // style={{ w }}
            src={circle}
            alt="Placeholder"
          />
        </div>
        {/* {[
          { width: "207px", height: "497px", left: "10rem", top: "374px", img: hero1 },
          { width: "207px", height: "540px", left: "10rem", top: "94px", img: hero2 },
          { width: "28px", height: "240px", left: "10rem", top: "529px", img: wind2 },
        ].map((img, index) => (
          <> */}
        <img
          className='heroFirstImage'
          src={hero2}
          alt="Placeholder"
        />
        <img
          className='heroSecondImage'
          src={hero1}
          alt="Placeholder"
        />
        <img
          className='heroThirdImage'
          src={wind2}
          alt="Placeholder"
        />
        {/* </>
        ))} */}
        {/* <img src={hero2} />
        <img src={hero1} /> */}
      </div>

    </div>
  )
}

export default Home