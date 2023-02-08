import React from "react";
// import Card from "./Card";

const Home2 = () => {
  return (
    <>
      <div className="home-2">
        <div className='card-image-1'>
        <img src="./images/Cutis-Dermatology-Brisbane-Nurse-Photo-hp.jpg" />
          
          </div>
        <div className="card1">
          {/* <h5>MEDICAL – SURGICAL – COSMETIC</h5> */}
          <h1>Cutis: Latin for Skin, Dermatology</h1>
          <p>
            Led by notable and accomplished dermatologists, our ethos is to
            provide truly personalised services tailored to each individual
            patient, for natural, subtle, and stunning results. Our approach of
            integrating the very latest in lasers, energy devices and advanced
            injectables, coupled with our decades of experience make our clinic
            one of the most innovative dermatology centers in the world
          </p>

          <div className="btn-div">
            <button className="btn-2">LEARN MORE</button>
            {/* <button className="btn-2">BOOK APPOINTMENT</button> */}
          </div>
        </div>

      </div>
    </>
  );
};

export default Home2;
