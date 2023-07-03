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

const Freckles = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Freckles and Lentigens</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Freckles and Lentigens</h2>
          <br />
          <h4>What are Freckles?</h4>
          <p>
            Freckles are 1-2 mm brown spots, commonly seen on the face,
            shoulders, back of people with fair skin. Some people find them
            cute, while others find them a beauty blemish. Family history,
            genetic factors, and cumulative sun exposure affect the extent and
            severity of freckles, with sun being the single most important
            factor. Hence, careful and thorough sun protection is essential in
            preventing freckles.
          </p>
          <img
            src="./images/freckles.jpeg"
            height="300vh"
            className="treatment-new-image"
          />
          <h4>What are Lentigines?</h4>
          <p>
            Lentigines have a strong association with sun exposure and are
            commonly known as the “sun-spots” or “solar lentigines”. Careful and
            thorough sun protection will reduce the numbers and severity of
            lentigines, but not all can be prevented. It is most common on the
            face and arms and appears as single or multiple round patches of
            pigmentation. They can be treated with topical creams or Q-switched
            YAG laser, all with excellent results! Temporary darkening of the
            skin (post-inflammatory hyperpigmentation) may occur especially with
            laser treatment. However, this usually settles over time or with
            lightening cream treatment.  
          </p>
          <h4>Laser treatment</h4>
          <p>
            Laser treatment is a good alternative. These include Q-switched
            Nd:YAG, ruby laser, and alexandrite laser. But the risk of
            post-inflammatory hyperpigmentation is slightly higher with the use
            of laser treatment. Good maintenance is prudent and this is done
            through good sun protection and intermittent OPT treatment. In
            essence, removing freckles is fairly straightforward. The challenge
            lies in the prevention of its recurrence and we cannot overemphasize
            the importance of good suncare!
          </p>
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

export default Freckles;
