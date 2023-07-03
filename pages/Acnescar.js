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

const Acnescar = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Acne Scar</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Acne Scar</h2><br />
          <h4>Common Acne Scars</h4>
          <p>
            
          Every individual may develop severe acne, however, they may scar in a different way. Your acne scar depends on what type of acne you’ve had and for how long.
                  </p>
                  <img src="./images/acne-scar.jpeg" height="200vh" className="treatment-new-image" />
                  <li>Ice Pick Scars</li>
                  <li>Rolling Scars</li>
                  <li>Boxcar Scars</li>
                  <li>Keloid Scars</li><br />
          <h4>What is an Acne Scar?</h4>
          <p>Acne scars are the result of the skin’s repair of wounds caused by acne inflammation. They are disfiguring, disheartening and affect one’s self-confidence.
Importance of Early Intervention
In scar treatment, prevention is most important. This is achieved through early medical intervention which includes preventing acne outbreaks and educating teenagers against scratching their acne.
Our Preferred Treatment Methods
For Acne Scar Removal
In many cases, different types of scars appear together on the face, thus there is a need to combine different treatments to achieve the optimal result. Every treatment has its own unique advantage and strength and addresses the specific type of scar or underlying skin issue.</p>

<li>Fractional CO2</li>
<li>(All Acne Scars)Fractional CO2 laser utilizes a very narrow laser microbeam to initiate a quick wound healing response and develops new collagen on the treated skin.This laser significantly helps to improve and smooth appropriate acne scars.TCA Cross</li>
<li>(Ice Pick & Boxcar Scars)TCA CROSS stands for Tri-Chloracetic Acid Chemical Reconstruction of Scarring. It uses 80-100% TCA to improve the appearance of pore-like scars and acne scars that are either ice pick, punch out or box-like.Scars Subcision</li>
<li>(All Scars)In scars subcision, a needle-blade is inserted from the edge of the scars into the base of the acne scars to cut and free the fibrous-like scars. Where necessary, Dr.R .Kumar will combine this procedure with other treatments to obtain optimum results.Surgical Excision of Isolated Scars</li>
<li>(Small & Linear Scars)This method is best suited for small and linear scars. Dr.R.Kumar will remove the scar surgically and re-join the normal skin. The skin will heal neatly into a less obvious scar.ND-YAG Laser</li>
<li>(Hyperpigmented Acne Scars)For patients who are eager to improve their “acne marks” quickly, ND-YAG laser treatment is invaluable. Generally, two to five sessions of treatments will be sufficient to lighten or completely clear the hyperpigmented acne marks.Chemical Peels</li>
<li>(Atrophic Acne Scars)Chemical peels remove the top layer of the skin with a medical-grade chemical acid to smooth depressed and superficial scars. Different chemicals can be used to peel the skin at varying depth.</li>

          
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

export default Acnescar;
