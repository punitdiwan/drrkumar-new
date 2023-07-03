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

const keloid = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Keloid</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Keloid</h2>
          <br />
          <h4>What is a Keloid?</h4>
          <p>
          A keloid is a raised overgrowth of scar tissue that occurs at the site of a skin injury and grows beyond the area of initial injury. They occur where trauma, surgery, blisters, vaccinations, acne or body piercing have injured the skin. It usually has a smooth top and a pink, red or red-brown color. Keloids are irregularly shaped and tend to enlarge progressively. Unlike fresh raised scars, keloids do not subside over time.
                  </p>
                  <img
            src="./images/keloid.jpeg"
            height="200vh"
            className="treatment-new-image"
          />
                  <h4>Why do keloids occur?</h4>
                  <p>People of Asian and African descent are more prone to keloid scars, so genetic factors are likely to be important. Individuals who already have keloid scars are more prone to further keloids, and should be cautious about unnecessary surgery and cosmetic procedures. Certain sites, such as chest, back, shoulders, jawline and ears are more prone to keloid scars. Wound infection also makes the scar more likely to become keloid. Use of silicone gel sheets or silicone gel after surgery or skin injury helps to reduce the chances of developing a keloid scar. </p>
                  <h4>Can keloids be treated?</h4>
                  <p>Keloid scars that are red and itchy, painful or sensitive to touch are the most satisfying to treat as the symptoms tend to resolve quickly with appropriate treatment. They may also soften and flatten with repeated treatments, but have a tendency to recur, especially in the young.</p>
                  <h4>How are keloids treated?</h4>
                  <p>There is no single treatment for keloids, and most treatments do not give completely satisfactory results. Two or more treatments may be combined for better results.
For itchy or painful keloids, steroid injections into the scar provide good resolution of itch and /or pain, and may be sufficient to flatten smaller keloid scars. To debulk a large keloid, laser or surgical excision may be considered but requires follow up treatment to prevent recurrence of keloid at the surgical site. A useful combination that is clinically proven is laser therapy with steroid injections.
If you decide to pursue removal treatment for a keloid scar, you will have the best results if you start treatment soon after the keloid appears.</p>
                  
          
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

export default keloid;
