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

const Toenails = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Ingrown Toe Nails</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Ingrown Toe Nails</h2>
          <br />
          <h4>Ingrown Toenail and Surgery</h4>
          <p>
            An ingrown toenail is a common disorder that affects the big toe. It
            is always painful with swelling, redness and sometimes infection.
            Very often, the patient will have difficulty walking or sleeping
            because of pain
          </p>
          <img
            src="./images/toe-nail.jpeg"
            height="300vh"
            className="treatment-new-image"
          />
          <h4>What is an Ingrown toenail?</h4>
          <p>
            An ingrown toenail is a common disorder that affects the big toe. It
            happens when the corners of the nail curves and digs into the soft
            flesh, hence; the name ingrown nail. It is always painful with
            swelling, redness and sometimes infection. Very often, the patient
            will have difficulty walking or sleeping because of pain.
          </p>
          <h4>What causes ingrown toenail?</h4>
          <p>Common causes of ingrown toenails are:</p>
          <li>Toenail trauma, such as stubbing your toe</li>
          <li>Wearing shoes that are too tight</li>
          <li>Cutting toenails too short</li>
          <li>Cutting toenails at an angle</li>
          <br />
          <h4>How are they treated?</h4>
          <p>
            Common treatments include antibiotic cream, oral antibiotic and pain
            relief medications. When medication is not enough to solve the
            problem, Dr R kumar will advise the patient to surgically remove
            part of the ingrown nail so that the skin or infection can heal.
            Performing surgery to destroy the matrix where the nail is being
            formed will also decrease the recurrence rate of ingrown toenail.
            People with diabetes, poor blood supply of the toes have higher risk
            of complications because ingrown toenail can lead to serious
            infections and the risk of losing a limb.
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

export default Toenails;
