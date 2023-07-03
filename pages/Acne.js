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

const Acne = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Acne</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Acne</h2>
          <br />
          <h4>What is acne?</h4>
          <p>
            Acne (or pimple) is an affliction of the oil glands of the skin.
            Contrary to popular belief, acne problem is not confined to
            teenagers only. While most people outgrow acne by late teens, some
            continue to be affected for much longer. Acne can show up as
            whiteheads, blackheads, red bumps or pus-filled lumps. It most
            commonly occurs on the face but can also appear on the back, chest,
            shoulders and neck
          </p>
          <img
            src="./images/acne-new.jpeg"
            height="200vh"
            className="treatment-new-image"
          />

          <h4>How serious is acne?</h4>
          <p>
            There are 3 common groups of acne sufferers. The first group
            consists of common teenage acne that clears up after a few years.
            The second group concerns those who would experience the severe and
            stubborn inflamed kind, and warrant more aggressive treatment to
            eradicate the problem. The third group is the adult-onset acne who
            experiences acne outbreak for the first time as an adult.
          </p>
          <p>
            Acne eruptions do come and go, but unfortunately some are left with
            acne scars and marks that may be permanent if left untreated. And it
            is impossible to predict which patient will scar. Therefore, this
            condition is not a trivial matter and should be treated early and
            thoroughly.
          </p>
          <h4>Why am I getting acne?</h4>
          <li>
            There is an increase in the production of the sex hormones
            (androgens) during puberty. This results in an increase in the size
            and activity of the oil glands (sebaceous glands), especially those
            located on the face, neck and upper body. These glands produce an
            oily substance called sebum.
          </li>
          <li>
            Some skin cells lining the wall of the pore (hair follicle) become
            excessively sticky, therefore plugging up the pores and entrapping
            the sebum.
          </li>
          <li>
            The increased amount of sebum and dead skin cells contribute to the
            growth of bacteria deep in the pores. The bacteria in turn cause an
            inflammatory reaction that result in red painful lumps of acne.
          </li>
          <li>
            There is some tendency for the condition to occur in the same family
            members. This indicates a possible genetic predisposition for this
            condition.
          </li>
          <li>
            Use of inappropriate cosmetics and creams, or the oral consumption
            of certain medications and hormones are other causes of pimples.
          </li>
          <br />
          <h4>What else do I need to know about managing acne?</h4>
          <li>
            Do not squeeze or scratch pimples. Avoid facials, scrubs, masks and
            exfoliants when your acne is inflamed.
          </li>
          <li>
            Do not wash with harsh soaps. Wash away the surface oil with a good
            gentle soap.
          </li>
          <li>Have a well-balanced diet.</li>
          <li>Use reliable water-based, oil-free cosmetics.</li>
          <li>
            Stick close to your doctor’s prescription. Feel free to check with
            your doctor if you have any doubts about the treatment or side
            effects or for some reason, your condition is not improving.
          </li>
          <li>
            Certain birth control pills and hormone medications can worsen your
            skin condition. Do discuss with your skin doctor.
          </li>
          <li>Stress and lack of sleep may aggravate acne.</li>
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

export default Acne;
