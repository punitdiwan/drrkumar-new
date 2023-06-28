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

const Nailproblems = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Nailproblems</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Nailproblems</h2><br/>
          <h4>Nailproblems</h4>
          <p>
            Nail Problems affect people of all ages. Common causes of nail
            problems include trauma, fungal or bacterial infection, weathering,
            chemical damage and skin diseases such as eczema and psoriasis. Nail
            changes may sometimes reflect internal medical problems, such as
            kidney or thyroid disease, anaemia or low albumin. Diet is generally
            not responsible for abnormal nail changes, unless the person is
            suffering from severe malnutrition. A rare but serious cause of nail
            changes is melanoma, an aggressive form of skin cancer that may
            present as a black band in the nail.
          </p>

          <h4>Some of the more common nail changes include:</h4>
          <li>Discolouration (yellow, brown, black, greenish-black)</li>
          <li>Thickening</li>
          <li>Textural changes such as ridges, grooves and pits</li>
          <li>Splitting / brittle nails</li>
          <li>Lifted nail plate ('hollowed nail')</li>
          <li>Painful ingrown toenail</li>
          <li>
            Skin diseases of nail fold or nail bed affecting nail growth, e.g.
            rash, swelling, nodule, warts
          </li>
          <li>Haematoma (blood/bruise) under nail</li><br/>
          <h4>Treatment</h4>
          <p>
            Fingernail infections usually respond faster to treatment than
            toenail infections. Depending on the cause, treatment options may
            include:
          </p>
          <li>Antibiotics for bacterial infections</li>
          <li>
            Topical &/or oral anti-fungal preparations, for fungal infection of
            the nails
          </li>
          <li>
            Removal of part of or the whole nail together with targeted
            treatment of the underlying cause. Partial nail avulsion with
            segmental matrix horn cauterization is an effective but minimally-
            invasive treatment for painful ingrown toenails, with faster
            recovery time than traditional surgical methods. Destroying the
            nail-producing matrix at the targeted site prevents re-formation of
            the part of the nail that keeps becoming ingrown, while preserving
            the rest of the nail. This is done under nerve block anaesthesia
            which makes the procedure painless.
          </li>
          <li>
            Treatment for any contributing skin disease e.g. steroid lotion or
            injections, oral medication or biologic injections for nail
            psoriasis
          </li>
          <li>Laser excision of warts around or under the nails</li>
          <li>Advice on appropriate nail care</li>
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

export default Nailproblems;
