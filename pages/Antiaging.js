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

const Antiaging = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Anti Aging Treatments</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>ANTI AGEING</h2>
          <p>
            Age is just a number and not the number of wrinkles or frown lines
            on your face. The idea of ‘anti-ageing’ is not to freeze your face,
            to wash-out every crease and make your skin look artificially
            stretched – having you end up looking expressionless or others
            looking at you wondering what went wrong? The goal is to help you
            look your natural-best, at every age. Every time we smile, laugh,
            frown or form an expression, the facial muscles stretch and pull the
            skin with it. Gradually, as we age, this results in the formation of
            wrinkles. Even the bony structure of your face – responsible for
            giving it shape – also changes as we grow older. These changes
            result in changing the very shape and structure of your face over
            time. And it’s not just your face; you’ll notice the skin on your
            hands and neck change as well over time. Even your hair will look
            different. Your hair cycle alters as you grow older. At Dr R kumar
            we help you revive and rejuvenate your skin so you radiate a healthy
            youthful glow. Your skin is treated with the most innovative
            techniques and the best cosmetic technologies to erase fine lines
            and wrinkles, tighten sagging skin and restore a luminous glow;
            empowering you to age gracefully and on your own terms.
          </p>
          <p>
            What is a peel and how does it works? A peel is an acid or
            combination of acids which have a great deal of benefits for your
            skin, body, face and scalp – depending on which combination your
            doctor chooses. We at Ra ensure the best possible results and also
            keep in mind that we choose acids and the application process where
            downtime is minimum.
          </p>
          <h4>What is the procedure like ?</h4>
          <li>We cleanse your skin.</li>
          <li>
            Then a gel/fluid is applied with an applicator and allowed to rest
            on your skin for some time.
          </li>
          <li>Later, your skin is again cleansed or neutralised.</li>
          <li>
            Some peels are applied on your skin and you go home with them,
            letting them stay on for longer hours.
          </li><br/>
          <h4>What can i expect from peels ?</h4><br/>
          <p>When used for the skin :</p>
          <li>Clear skin</li>
          <li>Glowing skin</li>
          <li>Hydrated skin</li>
          <li>Even toned skin</li>
          <li>Reduction in melasma</li>
          <li>Reduction in tan</li>
          <li>Pigmentation gets lighter</li>
          <li>Lighter complexion</li>
          <li>Collagen stimulation, etc.</li><br/>
          <p>Some specific peels like:</p>
          <li>
            Salicylic acid, Mandelic acid, Black peel works wonders on active
            acne
          </li>
          <li>Yellow peel is great for post acne scars and tan removal</li>
          <li>Retinol peel diminishes stretch marks</li>
          <li>Melas and claze peel work very well for pigmentation on skin.</li><br/>
          <p>When used on the scalp:</p>
          <li>Treats chronic dandruff and flaky scalp</li>
          <li>Treats oily scalp</li>
          <li>Stimulates hair growth</li><br/>
          <p>When i do see the results? </p>
          <li>
            It depends on the peel – some results are visible instantly and some
            over a period of time after repeated sittings.
          </li><br/>
          <p>
            What are thecpost treatment care and instruction that i need to know
            ?
          </p>
          <li>
            Aerobic exercise or vigorous physical activity or water sports
            should be avoided for the first 48 hours.
          </li>
          <li>
            Direct sunlight is to be completely avoided immediately following
            the treatment specially between 11 am to 4 pm, including any other
            sources of strong UV light exposure and tanning beds.
          </li>
          <li>
            Apply sunscreen with an SPF of 30 or greater. Sunscreen (with at
            least an SPF of 15) should become a part of your daily skin care
            regimen as your skin will become more sensitive to the sun as a
            result of this treatment.
          </li>
          <li>Cleanse your face with water or a mild cleanser.</li>
          <li>
            Gently moisturize your face with a moisturizer, a minimum of 2-3
            times a day.
          </li>
          <li>
            Do NOT peel, rub or scratch your skin at any time, whatsoever. This
            will otherwise cause damage and compromise your results as well as
            lead to possible scarring.
          </li>
          <li>
            Redness could be simple sensitivity to the procedure you have had.
            Please moisturize your skin.
          </li>
          <p>
            Stop using all skin care creams including anti-ageing, skin
            lightening, acne treatment creams for the next two days and let us
            know of the same.
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

export default Antiaging;
