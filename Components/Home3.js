import React from "react";
import Link from "next/link";

const Home3 = () => {
  return (
    <>
      <div className="home-3">
        <img src="./images/cutis-dermatology-brisbane-before-after-1.jpg" />
        <div className="card2" >
          <h5>TRANSFORMING SKIN SINCE 1994</h5>
          <h1>Our results speak for themselves</h1>
          {/* <p>
            Cutis Dermatology in Brisbane, Australia is a specialist practice
            with a mission to provide a full range of dermatologic services
            including medical, cosmetic & surgical dermatology. Our team cover
            all aspects of skin treatments; from skin & hair disorders to the
            very latest in laser technology.
          </p> */}

          <div className="btn-div">
            <Link  href='/Beforeafter'className="btn-2">VIEW RESULTS</Link>
            {/* <button className="btn-2">BOOK APPOINTMENT</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3;
