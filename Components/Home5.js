import React from "react";
import Card from "./Card";

const Home5 = () => {
  return (
    <>
      <div className="home-5">
        <img src="./images/Skin-rejuvenation-treatment-Cutis-Dermatology.jpg" />
        <div className="card-5">
          <h1>Facial rejuvenation</h1>
          <p>
            The dermatologists and nurses at our Brisbane clinics love using
            lasers and injectables to deliver exceptional skin rejuvenation
            results. We formulate a customised treatment plan for each client –
            not a cookie-cutter approach.
          </p>
          <div className="facial-main">
            <div className="facial-1">
              <a>
                <span>-</span> Laser Rejuvenation
              </a>
              <a>
                <span>-</span> Dermal fillers
              </a>
              <a>
                <span>-</span> Eye rejuvenation
              </a>
            </div>
                      <div className="facial-1" >
                      <a>
                <span>-</span> Anti-wrinkle injections
                          </a>
                          <a>
                <span>-</span> Treating pigmentation
              </a>
              <a>
                <span>-</span> Clinical skin care
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home5;
