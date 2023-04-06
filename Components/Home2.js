import React from "react";
import Link from "next/link";
import Card from "./Card";

const Home2 = () => {
  return (
    <>
      <div className="home-2">
        <div className="card-image-1">
          <img src="./img1/home-achieve.jpeg" />
        </div>
        <div className="card1">
          {/* <h5>MEDICAL – SURGICAL – COSMETIC</h5> */}
          <p className="light-bold">DR. KUMAR SKIN & LASER CLINIC</p>
          <p className="light-size">
          <h5>Conultant - Dermatologist ,Trichologist &Laser expert</h5>
                  <ul>
                  <li> - Ex-Consultant Kaya Skin Clinic ,Mumbai</li>
                  <li> - Ex-Consultant Tinplate Hospital,Jamshedpur</li>
                  <li> - Presently Chief Consultant</li>
                  <li>-Dr.kumar skin& Laser Clinic ,Jamshedpur</li>
                  </ul>
<br />
                  <ul>
                  <li className="bold" style={{color:"black"}}>DR. KUMAR SKIN & LASER CLINIC</li>
                    <li>-DVD -Dermatologist - Skin Specialist</li>
                    <li>-Dr.R.Kumar DVD in Dermatology – is a renowned skin specialist and a cosmetologist in jamshedpur ,Jharkhand .</li>
                    <p className="light-size">
                  He completed his MBBS in 2005from SKMC muzaffarpur College, Bihar .Then he pursued his post-graduation in dermatology from Rajendra institute of medical sciences (RIMS) in 2012 from Ranchi, Jharkhand.
          </p>
                  </ul>
                  
                 </p>
                  
          {/* <p className="light-size">Post completion of his Post-graduation, he also pursued a fellowship in Laser Aesthetic &Medicines from venkat charmalya Bengaluru ,under the guidance of the famous skin specialist Dr. Venkat ram mysoore . 
He joined the Kaya skin clinic for few months in andheri mumbai.</p>
<p className="light-size">He understands the importance of looking beautiful despite our stressful lifestyle today. That’s what motivated him to start the “Dr kumar skin and laser clinic in 2012,</p> */}

<div className="btn-div" >
          <Link style={{color:"black" , border:"2px solid" ,padding:'.5rem', textDecoration: "none"}} href="/theclinic">LEARN MORE</Link>
          <Link style={{color:"white" , border:"2px solid" ,padding:'.5rem', textDecoration: "none",backgroundColor:"black"}} href="/Form">BOOK APPOINTMENT</Link>
            {/* <button className="btn-2">BOOK APPOINTMENT</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
