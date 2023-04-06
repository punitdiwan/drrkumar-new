import React from "react";
import Card from "./Card";
import Link from "next/link";

const Home1 = () => {
  return (
    <>
      <div className="home-main">
        <div className="home-image-div">
          {/* <img src="./images/cutis-dermatologist-brisbane-scaled.jpeg" /> */}
          <img src="./img1/home.jpeg" />
        </div>
        <div className="card">
          <h5>DR KUMAR SKIN  AND LASER   CLINIC</h5>
          <h6 className="light-bold">
            Healthy, beautiful skin makes the best first impression
          </h6>
          <p className="light-size">
          Dr. Kumar skin & Laser clinics an advanced medical facility located in the heart of city Jamshedpur. This clinic providing a wide range of dermatological & aesthetic solutions.
          </p>

          <div className="btn-div" >
          <Link style={{color:"black" , border:"2px solid" ,padding:'.5rem', textDecoration: "none"}} href="/theclinic">LEARN MORE</Link>
            {/* <a href="/theclinic">LEARN MORE</a> */}
            
            {/* <button className="btn-2">BOOK APPOINTMENT</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1;
