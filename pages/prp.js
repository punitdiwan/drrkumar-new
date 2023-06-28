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

const prp = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>PRP ( platelet rich plasma)</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>PRP ( platelet rich plasma)</h2><br />
          <h4>what is PRP for skin and hair ? How does it work ? </h4>
          <p>
            
PRP is an abbreviation for Platelet Rich Plasma. Platelets are rich in growth factors, thus stimulating the tissue that it is injected into.
We use only FDA approved test tubes and ingredients.
Dr. R.kumar believes in giving you the best. He adds her own mixes to the plasma to give your skin the most healthy even toned glow and give your hair the nourishment and boost to grow better.
          </p>
          <h4>What is procedure like ? </h4>
          <p>Your blood is drawn, fed into a sealed test tube, centrifuged in-house and the separated plasma is mixed with actives. This is then injected into the layers of your skin on your face, body or scalp.
Dr.kumar personally injects the area of treatment since injecting it to the right layer and depth is most crucial.</p>
<h4>How long do the results last?</h4>
<p>Depending on the number of sittings and frequency of treatment which will be decided by Dr R.kumar  at consultation (and maybe altered as the treatment progresses), results may last up to a year.</p>
    <h4>What can  i hope to get out of this treatment ?</h4>
          <li>Skin hydration </li>
          <li>Soft and nourished skin</li>
          <li>Reduction in fine lines</li>
          <li>Improved collagen</li>
          <li>Restoration of youthful skin</li>
          <li>Reduction of under eye fine lines and darkness</li>
          <li>Hair fall reduction</li>
          <li>Healthier individual strands of hair</li>
          <li>Regrowth of hair on the scalp when combined with appropriate medicines .</li><br />

          <h4>What are the post treatment care and instruction that i need to know after PRP for hair and skin on the face and neck or any other part of the body?</h4>




          <li>PRP for hair involves tiny injections all over which create multiple small injuries to the scalp and skin, so please treat it as such .</li>
          <li>Do not take a shower or undertake any activity that might cause you to perspire for at least 8 hours after the treatment.</li>
          <li>Do not sunbathe for at least 2 days after the treatment.</li>
          <li>Do not undergo any other hair treatment or skin treatment for a week after a meso or PRP hair treatment.</li>
          <li>Avoid washing your hair or applying any type of hair product for at least 12 hours after the treatment. Do not apply any skin care products with out checking with Dr R.kumar</li>
          <li>Two days after the treatment, use plenty of moisturiser and a simple sunscreen</li>
          <li>Make up is ok but use only your fingertips for the application.</li>
          <li>Please avoid creams like anti acne or anti-ageing for the next 2 days and nights.</li>
          <li>You may experience a slight redness and possibly minimal swelling due to sensitivity to the procedure. It should resolve by itself and fade away within minutes to hours after the treatment. Please do not pick on your skin.</li>
          
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

export default prp;
