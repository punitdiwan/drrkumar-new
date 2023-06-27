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

const Microneedling = () => {
  return (
    <>
      <section>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Microneedling</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Microneedling</h2>
          <p>What is microneddling ? How doe it work ?</p>
          ravindra@maitretech.com
          ravindra
          <p>
            Micro needling involves causing multiple small injuries to the skin
            using needles on a hand held roller, called Derma Roller, or by
            using a more sophisticated automated equipment. This treatment can
            also be conducted in combination with radio frequency.
          </p>
          <p>What is the procedure like?</p>
          <p>The procedure is as follows:</p>
          <li>A numbing cream is applied after cleaning the skin.</li>
          <li>The needles are then rolled or stamped on the skin</li>
          <li>Post that, the area is cleansed again or actives are applied.</li>
          <p>You may experience a slight redness or swelling on your skin for a couple of days. But it will fade away.</p>
          <p>What can i get out of this ?</p>
          <p>Micro needling offers the following benefits:</p>
          <li>It improves the texture of your skin and smoothens it.</li>
          <li>It works great on acne scars, especially the pitted ones.</li>
          <li>It stimulates collagen and is an economical yet effective anti-aging treatment that tightens skin and reduces facial lines and open pores.</li>
          <li>It works well for oily, acne prone skin and stretch marks when combined with radio frequency .</li>
          <p>What are the post treatmet care I need to know after treatment ?</p>
          <li>Make sure you wash your skin and keep it clean.</li>
          <li>Ensure the pillowcase you use is fresh and clean.</li>
          <li>Avoid dust and pets near your skin.</li>
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
                {" "}
                <a
                  href="https://www.facebook.com/drkumarskinandlaserclinic/"
                  target="_blank"
                >
                  <FaFacebookSquare />
                </a>
              </span>
              <span>
                {" "}
                <FaYoutube />
              </span>
              <span>
                {" "}
                <a href="http://instagram.com/drrajurims" target="_blank">
                  <FaInstagram />
                </a>
              </span>
            </div>
            {/* <Link style={{ color: "white", border: "2px solid", padding: '.5rem', textDecoration: "none", backgroundColor: "black", height: "2.5rem", margin: ".5rem 0" }} href="/Form">FOR BOOK APPOINTMENT</Link> */}
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
                    Design with{" "}
                    <span>
                      <FaHeart />
                    </span>{" "}
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

export default Microneedling;
