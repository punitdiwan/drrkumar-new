import React from "react";
import Card from './Card';

const Home1 = () => {
  return (
    <>
          <div className="home-main">
          <div className="home-image-div">
      <img src="./images/cutis-dermatologist-brisbane-scaled.jpeg" />
      </div>
          <div className="card">
        <h5>MEDICAL – SURGICAL – COSMETIC</h5>
        <h1>Healthy, beautiful skin makes the best first impression</h1>
        <p>
          Cutis Dermatology in Brisbane, Australia is a specialist practice with
          a mission to provide a full range of dermatologic services including
          medical, cosmetic & surgical dermatology. Our team cover all aspects
          of skin treatments; from skin & hair disorders to the very latest in
          laser technology.
        </p>

        <div className="btn-div">
          <button className="btn-1">LEARN MORE</button>
          <button className="btn-2">BOOK APPOINTMENT</button>
        </div>
      </div>
    
      </div>
    </>
  );
};

export default Home1;
