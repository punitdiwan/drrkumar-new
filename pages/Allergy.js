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

const Allergy = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Allergy</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Allergy</h2>
          <br />
          <h4>Allergy</h4>
          <p>
            An allergy is an exaggerated immune response or reaction to
            substances that are generally not harmful. The allergen may be taken
            in internally (e.g. food, drugs, airborne allergens), or may be from
            external contact (e.g. fragrance, rubber latex, bonesetter’s herbs)
            -- the rash that then develops is known as allergic contact
            dermatitis.
          </p>
          <img
            src="./images/allergy.jpeg"
            height="200vh"
            className="treatment-new-image"
          />
          <h4>What causes allergies?</h4>
          <p>
            Both genetics and environmental factors play a role. In a person
            with allergies, the immune response is oversensitive. When it
            recognizes an allergen, it releases chemicals, such as histamines.
            This causes itching, swelling, mucus production, muscle spasms,
            hives, rashes, and other symptoms, which vary from person to person.
            Common allergens include pollen, mould, pet dander, and house dust
            mites. Food and drug allergies are common. Allergic skin reactions
            can also be caused by insect bites, fragrances, costume jewellery,
            cosmetics, and other substances. Treatment Most allergies can be
            easily treated with medication and avoidance. The best way to reduce
            symptoms is to try and avoid what causes your allergies in the first
            place. This is especially important for food and drug allergies.
            Allergy tests (e.g. patch test, blood tests) are available to help
            confirm some suspected allergies. There are several types of
            medications available to prevent and treat allergies. Your doctor
            will recommend suitable medications depend on the type and severity
            of your symptoms, your age, and overall health.{" "}
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

export default Allergy;
