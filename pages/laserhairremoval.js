import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Acnecard from "../Components/AcneSolutions/Acnecard";
import Form from "../Components/Form";
import Accordion from "../Components/Accordion";
import Acneglance from "../Components/AcneSolutions/Acneglance";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const laserhairremoval = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Laser Hair Removal</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Laser Hair Removal</h2><br />
          <h4>
What is laser hair removal? </h4>
          <p>
            
          Imagine a world with no more razors, waxing or painful electrolysis! Thanks to modern laser hair removal systems such as Alma soprano ice you can bid goodbye to constant shaving and waxing, and say hello to soft and silky-smooth skin, minus the pain and discomfort. Safe and effective, our laser hair removal provides a quicker and a more comfortable way to deal with unwanted hair without damaging the skin
          </p>
          <h4>How does laser hair removal work?</h4>
          <p>Lasers work by emitting a specialized light that is passed through the skin and preferentially absorbed by the hair. The laser used in hair removal targets the melanin in the hair follicle, thus damaging the follicle and removing the hair.
What areas of the body can be treated by laser hair removal?
Laser hair removal is safe enough to be used on all body parts including the face, upper lip, back, underarms, arms, bikini line and legs.</p>
<h4>How do I prepare myself before the laser hair removal procedure?</h4>
<p>You are advised to follow these instructions prior to your laser hair removal appointment:</p>
    {/* <h4>What can  i hope to get out of this treatment ?</h4> */}
          <li>Stay out of the sun and avoid self-tanning at least six weeks before the session. If sun exposure is unavoidable, make sure to apply full-spectrum sunscreen.</li>
          <li>Shave or trim the treatment site one day before the procedure. Doing so allows the lasers to better reach the follicles and reduces risk of skin damage from burnt hairs.</li>
          <li>Avoid other hair removal methods like plucking, waxing or electrolysis four weeks before scheduled treatment, as these can damage the hair follicles and reduce the effectiveness of the laser treatment.</li>
          <li>Avoid applying skincare and cosmetic products prior to the treatment. These may contain chemicals that can irritate the skin following the procedure.</li>
          <li>Wear loose and comfortable clothing. Tight garments can cause mild discomfort or irritation after the treatment.</li><br />
          {/* <li>Reduction of under eye fine lines and darkness</li>
          <li>Hair fall reduction</li>
          <li>Healthier individual strands of hair</li>
          <li>Regrowth of hair on the scalp when combined with appropriate medicines .</li> */}

                  <h4>What can I expect with the laser hair removal procedure?</h4>
                  <p>Laser hair removal gives a prickly or a light rubber-band snapping sensation. You may not need any type of anesthesia for your treatments. However, if larger or sensitive areas are to be treated, a topical anesthesia cream may be applied one hour before treatment. No specific care is needed after the treatment. The treated hair may not completely fall out until 2 weeks later. Mild redness and swelling after the treatment are expected. These reactions subside within a few hours to 1 - 2 days.</p>

                  <h4>How long does each laser hair removal session take?</h4>
                  




          <li>The upper lip and chin can be done in 5 minutes. Underarms or bikini lines usually take 10-15 minutes. Legs and back will take a longer time.</li><br />

                  <h4>Is the hair removal permanent?</h4>
                  <p>Permanent reduction in hair growth is achieved in 70 - 80% of individuals treated, and the best results are achieved after multiple treatments. You may have few hairs re-grow over a period of time so ‘touch-up’ treatment may be needed from time to time.</p>
                  <h4>How many sessions do I need for laser hair removal?</h4>
                  <p>Hair goes through different growth phases and lasers work most effectively against hair that is in the active growth phase. Initially, it is recommended that you undergo a series of four to eight treatments at four to eight-week intervals depending on the area treated. Arm and leg hair tend to be the easiest to remove compared to those on the face, upper lip and chin</p>
                  <h4>What are the benefits of getting laser hair removal?</h4>
                  <p>Among the many hair removal methods available today, laser hair removal largely remains the preferred choice and with good reason. Its benefits include:</p>


                  
          <li>Minimal to no side effects. Side effects are mostly temporary and very rare. There is also no occurrence of ingrown hairs.</li>
          <li>Cost-efficient. It saves more time and money as compared to countless hours of plucking or shaving, and buying razors, shaving creams and wax treatments.</li>
          <li>Precision. Lasers are designed to target the hair follicles without damaging the surrounding skin.</li>
          <li>Speed. The laser can work on several follicles in a single pulse, which takes a fraction of a second. The procedure is very quick, depending on the size of the treatment site.</li>
          <li>Effective. In most patients, permanent hair loss was achieved after three to seven laser hair removal sessions.</li>
          {/* <li>Make up is ok but use only your fingertips for the application.</li>
          <li>Please avoid creams like anti acne or anti-ageing for the next 2 days and nights.</li>
          <li>You may experience a slight redness and possibly minimal swelling due to sensitivity to the procedure. It should resolve by itself and fade away within minutes to hours after the treatment. Please do not pick on your skin.</li> */}
          
        </div>

        <section className="footer">
          <div className="footer-1">
            <img src="./img1/logo.png" />
            {/* <h1>DR. KUMAR SKIN & LASER CLINIC</h1> */}
            <div className="footer-child">
              <Link href="/theclinic">The Clinic</Link>
              <Link href="/theteam">The Team</Link>
              <Link href="/thevisit">The Visit</Link>
            </div>
            <div className="footer-child">
              <a>Our Fees</a>
              <a>For Referrers</a>
              <a>Skin Care Tips</a>
            </div>
            <div className="footer-child">
              <a>Contact us</a>
              <a>Disclaimer</a>
              <a>Privacy Policy</a>
            </div>
            <div className="footer-child  footer1-child">
              <span>
                
                <a
                  href="https://www.facebook.com/drkumarskinandlaserclinic/"
                  target="_blank"
                >
                  <FaFacebookSquare />
                </a>
              </span>
              <span>
                
                <FaYoutube />
              </span>
              <span>
                
                <a href="http://instagram.com/drrajurims" target="_blank">
                  <FaInstagram />
                </a>
              </span>
            </div>
          </div>

          <div className="footer-2">
            <div className="policy" id="footer-policy">
              <div className="policy-row">
                <div className="policy-col">
                  {/* <p>Copyright © Dr. Saket Agrawal</p> */}
                  <p>© 2023 DR. KUMAR SKIN & LASER CLINIC.</p>
                </div>
                <div className="policy-col">
                  <p>
                    Design with
                    <span>
                      <FaHeart />
                    </span>
                    by&nbsp;
                    <a href="https://maitretech.com/">maitretech.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default laserhairremoval;
