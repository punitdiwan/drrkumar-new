import React from "react";
import Link from "next/link";
import Card from "./Card";

const Home2 = () => {
  return (
    <>
      {/* <div className="home-2">
        <div className="card-image-1">
          <img src="./img1/home-achieve.jpeg" />
        </div>
        <div className="card1">
         
          <p className="light-bold">DR. R KUMAR </p>
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
              <li className="bold" style={{ color: "black" }}>DR. KUMAR SKIN & LASER CLINIC</li>
              <li>-DVD -Dermatologist - Skin Specialist</li>
              <li>-Dr.R.Kumar DVD in Dermatology – is a renowned skin specialist and a cosmetologist in jamshedpur ,Jharkhand .</li>

            </ul>
            <p>Dr kumar skin clinic is treating patients for Psoriasis, Keloid, Vitiligo, Excess Sweat, Viral Warts, Dandruff, Nail disorder, Fungal and sexually transmitted diseases (STD), etc.</p>
            <p>Dr kumar skin and laser Clinic is an excellent Clinic in jamshedpur jharkhand .It was started in the year 2012.
              This Clinic is devoted to provide patients with the best quality of care. It uses the latest skin innovations for Patients to provide safe and effective non-surgical and non-invasive treatments in Cosmetic and Skin rejuvenation.</p>
            <p>In Dr kumar clinic, our primary focus is to provide safe and medically directed treatments, which are customized to your needs and desires. This approach helps us to offer natural results which are faster with minimal downtime.
              We keep our patients informed regarding their skin condition through visuals and knowledge leaflets. This helps the patients to realize an entire understanding of their skin ailments.</p>
          </p>

          

          <div className="btn-div" >
            <Link style={{ color: "black", border: "2px solid", padding: '.5rem', textDecoration: "none" }} href="/theclinic">LEARN MORE</Link>
            <Link style={{ color: "white", border: "2px solid", padding: '.5rem', textDecoration: "none", backgroundColor: "black" }} href="/Form">BOOK APPOINTMENT</Link>
          
          </div>
        </div>
      </div> */}
      <div className="home-2">
        <div className="card-image-1">
          <img src="./img1/home-achieve.jpeg" />
        </div>
        <div className="card1">
          {/* <h5>MEDICAL – SURGICAL – COSMETIC</h5> */}
          <p className="light-bold " >DR. R KUMAR </p>
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
              <li className="bold" style={{ color: "black" }}>DR. KUMAR SKIN & LASER CLINIC</li>
              <li>DVD -Dermatologist - Skin Specialist</li>
              <li>Dr.R.Kumar DVD in Dermatology–is a renowned skin specialist and a cosmetologist in jamshedpur ,Jharkhand .</li>

            </ul>
            <p>.He completed his MBBS in 2005from SKMC muzaffarpur College, Bihar .Then he pursued his post-graduation in dermatology from Rajendra institute of medical sciences (RIMS) in 2012 from Ranchi, Jharkhand.Post completion of his Post-graduation, he also pursued a fellowship in Laser Aesthetic &Medicines from venkat charmalya Bengaluru ,under the guidance of the famous skin specialist Dr. Venkat ram mysoore . He joined the Kaya skin clinic for few months in andheri mumbai.</p>
            <p>He understands the importance of looking beautiful despite our stressful lifestyle today. That’s what motivated him to start the “Dr kumar skin and laser clinic in 2014 , his branch in centre of jamshedpur and, within 5 years Dr. kumar opened his 2nd clinic in mango.Today he is well acknowledged across the globe, and his practice is appreciated within the Industry. Patient Friendly</p>
            <p>Dr. R.kumar believes in following a holistic and patient-friendly approach. He gets to the root of the problem for his patients and then prescribes a tailor-made treatment for every patient. Because of his holistic approach toward treating his patients, Dr.kumar is now well-renowned nationally and has patients visiting him from various cities .</p>
            <p>He is also actively spreading awareness about skin-related issues by differentiating between the facts and myths attached to it. He is a sought-after Dermatologist who is registered with famous medical associations like IMA, ISPD, ACSI, and CDSI ,AAD and many more association related to dermats .He also travels a lot within India and internationally to attend workshops and conferences and was also invited once as a keynote speaker where he shared his knowledge with other doctors. He has also published his articles in various news paper and print media .</p>
          </p>

          {/* <p className="light-size">Post completion of his Post-graduation, he also pursued a fellowship in Laser Aesthetic &Medicines from venkat charmalya Bengaluru ,under the guidance of the famous skin specialist Dr. Venkat ram mysoore . 
He joined the Kaya skin clinic for few months in andheri mumbai.</p>
<p className="light-size">He understands the importance of looking beautiful despite our stressful lifestyle today. That’s what motivated him to start the “Dr kumar skin and laser clinic in 2012,</p> */}

          <div className="btn-div" >
            <Link style={{ color: "black", border: "2px solid", padding: '.5rem', textDecoration: "none" }} href="/theclinic">LEARN MORE</Link>
            <Link style={{ color: "white", border: "2px solid", padding: '.5rem', textDecoration: "none", backgroundColor: "black" }} href="/Form">BOOK APPOINTMENT</Link>
            {/* <button className="btn-2">BOOK APPOINTMENT</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
