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

const Fungalinfection = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Fungal Infection</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Fungal Infection</h2><br/>
          <h4>Fungal Infection</h4>
          <p>
            Fungal Infections is most commonly caused by a type of fungus called
            a dermophyte that infects the top layer of the skin, hair or nails.
            Dermatophyte infection of the skin is known as ringworm (tinea).
          </p>

          <h4>There are many types of ringworm, including:</h4>
          <li>Body Ringworm (Tinea Corporis)</li>
          <li>Jock Itch (Tinea Cruris)</li>
          <li>Athlete's Foot (Tinea Pedis)</li>
          <li>Scalp Ringworm (Tinea Capitis)</li>
          <li>Nail Ringworm (Tinea Unguium)</li>
          <li>and Beard Ringworm (Tinea Barbae), Which is rare.</li>
          <p>
            Yeast, another type of fungus, can also cause fungal infections in
            the form of white spots or brown spots known as tinea versicolor, or
            redness and itching in the area around the vagina, in the groin and
            under the breasts, particularly in people with diabetes.
          </p>
          <h4>What causes Fungal Infections?</h4>
          <p>Fungal Infections such as ringworm are caused by types of fungi that like warm, moist areas of the skin, such as between the toes or fingers, in the groin, and on other parts of the body where there are folds of skin. Ringworm is not caused by a worm. The fungus can be carried by kittens and puppies, combs, brushes, pillows, hats, and towels, and is found in areas that are warm and moist, such as locker rooms and showers.
Yeasts such as candida are commonly found on the skin and in the vagina where they are usually saprophytes (live peaceably without causing harm to the host) – in such cases, there is no need to treat the yeast. Sometimes, they can multiply and change to a form that causes itching and rashes – in such situations, treatment is warranted.
Treatment of Fungal Infections
Depending on the site and severity, fungal infections may be treated with anti-fungal creams or tablets. It is important to keep the affected area clean and dry, and to avoid scratching.</p>
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

export default Fungalinfection;
