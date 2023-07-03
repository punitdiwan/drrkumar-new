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

const Tattooremoval = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Laser tatto removal</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Laser tatto removal</h2><br/>
          <h4>What is Laser Tattoo Removal?</h4>
          <p>
          One of the advances in tattoo treatment is to remove or lighten tattoos using a laser, e.g. Q-switch Nd-YAG laser. This Q-switch Nd-YAG laser delivers pulses of energy that are selectively absorbed by the tattoo pigment. The powerful laser beam breaks the tattoo pigment ink into tiny fragments, which are then cleared away by your body’s natural cleansing mechanism. Several sessions of treatment are required and the risk of scarring the skin is minimal. The treatment is painful and local anesthesia is usually given. InHowever, tattoos with green ink are more challenging and our clinic currently does not have the capability to remove green tattoos.
                  </p>
                  <img
            src="./images/laser-tattoo.jpeg"
            height="200vh"
            className="treatment-new-image"
          />
                  <h4>What should I do after the treatment?</h4>
                  <p>An antibacterial ointment and dressing will be applied to the treated area and it should be kept clean. A shower can be taken the next day, although the treated area should not be scrubbed. You will see a lightening of your tattoo after each treatment as your body disposes of more fragments of pigment. The results vary from complete disappearance to partial lightening after the first try. Traumatic tattoos and the amateurish tattoos that are done less professionally have the best response and result. However, large and heavily pigmented tattoos done by professional tattoo artist are more challenging and require many treatments for optimal results. Occasionally, loss of pigmentation or whitening of the skin may occur. But normal skin tone should return within 6-12 months, following your last session of treatment. </p>
                  <h4>How often do I need to repeat this treatment?</h4>
                  <p>The tattoo removal may take a number of sessions depending on the type of ink and depth of the tattoo. On average, professional tattoos require 8-12 treatments, while amateur tattoos require 3-5 treatments. Treatments are all spaced approximately 4 weeks apart, to allow your body to remove the maximum amount of tattoo pigment.</p>
                  
          
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

export default Tattooremoval;
