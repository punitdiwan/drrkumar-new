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

const Moles = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Moles</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Moles</h2><br/>
          <h4>Moles</h4>
          <p>
          Moles can be round, oval, flat, or raised. They can occur singly or in clusters on any part of the body. Most moles are brown, but colors can range from pinkish flesh tones to yellow, dark blue, or black. They may be present at birth, but most appear later.
                  </p>
                  <img
            src="./images/mole.jpeg"
            height="200vh"
            className="treatment-new-image"
          />
                  <h4>What cause Moles?</h4>
                  <p>The exact reasons why moles develop are not fully understood at present. However, many types seem to run in families, particularly dysplastic naevi. The likelihood of having lots of moles also seems to be inherited. You are more likely to have moles if you spend lots of time in the sun, especially if you have done so since childhood. </p>
                  <p>Moles can also appear because of changes in your hormones. This commonly occurs:</p>
                  <li>during adolescence</li>
                  <li>if you are taking the contraceptive pill</li>
                  <li>during pregnancy</li>
                  <li>during the menopause</li>
                  <p>It's a good idea to check your moles regularly so that you are aware if any of them change shape or colour. You should see a dermatologist if you notice:</p>
                  <li>growth of an existing mole</li>
                  <li>a mole with a ragged/uneven edge</li>
                  <li>a mole of varying shades of colour</li>
                  <li>a mole that bleeds, oozes or crusts</li>
                  <li>a mole that feels painful or itches</li>
                  <li>a mole where the two halves don't look the same</li><br/>
          <h4>How can I remove my Moles?</h4>
          <p>Many people remove moles for cosmetic .For cosmetic reasons, smaller moles can easily be removed by electrosurgery or CO2 laser surgery. Electrosurgery uses radio-frequency instruments to burn the moles. Similarly, CO2 laser removes moles with high powered laser beams and burns them into vapour (aka vapourization). Dr R kumar default choice for mole removal is electrosurgery because it gives better precision and control and it is also more affordable. However, if you prefer laser removal, Dr kumar can do it too! Bigger moles are best removed by surgical excision. When a mole is atypical and cancerous looking, it is best to surgically excise the suspicious moles for laboratory analysis.</p>

          
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

export default Moles;
