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
        Dr kumar clinic Dr kumar skin and laser clinic is an advanced medical facility located in the heart of City jamshedpur . Golmuri clinic providing a wide range of dermatological & aesthetic solutions. 
        </p>

        <div className="btn-div">
          <button className="btn-1">LEARN MORE</button>
          {/* <button className="btn-2">BOOK APPOINTMENT</button> */}
        </div>
      </div>
    
      </div>
    </>
  );
};

export default Home1;
