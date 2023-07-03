import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const Melasma = () => {
  return (
    <>
      <Header />

      <div className="about-header" id="the-visit-header">
          <h1>Melasma</h1>
        </div>
      {/* <div className="main">
        <ul class="cards-new-1" style={{ zIndex: "-10" }}>
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/before12.jpg" />
              </div>
            </div>
          </li>
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/mal.webp" />
              </div>
            </div>
          </li>
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/mal1.webp" />
              </div>
            </div>
          </li>
        </ul>
      </div> */}

      <div className="" style={{ padding: "2rem" }}>
        <h2>Melasma</h2>
        <br />
        <p>
          Melasma is a skin condition that causes patches and spots, usually on
          the face, which are darker than your natural skin tone.
        </p>
        <img src="./images/melasma.jpeg" height="200vh" className="treatment-new-image"/>
        <h4>Melasma causes and risk </h4>
        {/* <h4>What is the procedure like?</h4> */}
        <p>
          It may be due to the malfunction of the melanocytes (the color-making
          cells) in the skin, causing them to produce too much color in certain
          spots. As a result, people with light brown skin to darker skin tones
          may be more likely to develop melasma as they have more melanocytes
          than people with lighter skin do. Risk factors can include Trusted
          Source:
        </p>
        <li>Sun exposure. Frequent exposure to UV rays can trigger melasma.</li>
        <li>
          Skin color. Melasma occurs most commonly in people with light brown
          skin tones, particularly if they live in areas with high levels of sun
          exposure.
        </li>
        <li>
          Female sex. Melasma affects females about 9 times more than it does
          males.
        </li>
        <li>
          Pregnancy. Melasma is more common during pregnancy, affecting 15% to
          50% of pregnant people. This may be due to pregnancy hormones.
        </li>
        <li>
          Genetics. Up to 50% of people with melasma report that close relatives
          also have the condition.
        </li>
        <br />
        {/* <p>
          You may experience a slight redness or swelling on your skin for a
          couple of days. But it will fade away.
        </p> */}
        {/* <h4>What can i get out of this ?</h4> */}
        <p>Potential triggers for melasma can include:</p>
        <li>changes in hormones during pregnancy (chloasma)</li>
        <li>hormone treatment or taking birth control pills</li>
        <li>sun exposure</li>
        <li>certain skin care products, if they irritate a person’s skin</li>
        <li>
          some medications, including anti-seizure medications and those that
          make the skin more sensitive to sun exposure, such as includes
          retinoids, some blood pressure medications, and certain antibiotics.
        </li>
        <br />
        <h4>Symptoms of melasma</h4>
        <p>
          The primary symptom of melasma is hyperpigmentation — the development
          of discolored patches of skin or uneven skin tone. These patches are
          typically flat and appear darker than an individual’s skin tone, often
          brown or gray in color. While melasma does not cause any other
          physical symptoms, some people may find the appearance of these
          patches bothersome. Patches caused by melasma should not cause
          physical pain. Patches most commonly appear on the face. Common
          locations include the upper lips, bridge of the nose, cheeks, and
          forehead. Less commonly, a person may also have patches on their arms
          and neck. It is important to note that melasma is not a form of skin
          cancer, though it may sometimes look like other skin conditions. It is
          best to consult a dermatologist for diagnosis and treatment.
        </p>
        <h4>Diagnosing melasma</h4>
        <p>
          Dermatologists find most cases of melasma easy to diagnose during a
          visual examination. However, since melasma can resemble other skin
          conditions, a dermatologist may take a small biopsy during the initial
          visit. This may help rule out other conditions. A biopsy involves
          removing a very small portion of the skin for further examination in a
          laboratory. A doctor may also use a device called a Wood’s light to
          look more closely at the skin.
        </p>

        <h4>Treatment and prevention of melasma</h4>
        <p>
          Treatment is not always necessary for melasma. If hormonal changes,
          such as those that occur during pregnancy or while taking birth
          control pills, have caused melasma, it will fade after delivery or
          once a person stops taking the pills. To prevent melasma, a
          dermatologist will likely recommend a high-SPF sunscreen. For other
          people, melasma can last for years or even for the rest of their
          lives. If melasma does not fade over time, a person can seek treatment
          to help remove or fade the patches. However, not all treatments work
          for everyone, and melasma may come back even after successful
          treatment. Treatment options for melasma can include:
        </p>

        <li>Hydroquinone</li>
        <br />
        <p>
          Doctors often use hydroquinone as the first line of treatment for
          melasma. Hydroquinone is available as a lotion, cream, or gel. It
          works by lightening the color of the skin patches. A person can apply
          the hydroquinone product directly to the patches of skin that are
          discolored or uneven. Hydroquinone is available as a prescription.
        </p>
        <li>Corticosteroids and tretinoin</li>
        <br />
        <p>
          Corticosteroids and tretinoin come in creams, lotions, or gels. Both
          corticosteroids and tretinoin can help lighten the color of the
          melasma patches.
        </p>
        <li>Combined creams</li>
        <br />
        <p>
          In some cases, a dermatologist may choose to prescribe combination
          creams that may contain hydroquinone, corticosteroids, and tretinoin
          in one. These are called triple creams. Additional topical medications
          In addition to or instead of other medicated creams, a dermatologist
          may also prescribe azelaic acid or kojic acid. These acids work to
          lighten the dark areas of skin. Medical procedures If topical
          medications do not work, a dermatologist may recommend procedures such
          as:
        </p>
        <li>microdermabrasion</li>
        <li>chemical peel</li>
        <li>laser treatment</li>
        <li>light therapy</li>
        <li>dermabrasion</li>
        <br />
        <p>
          Some of these treatment options have side effects or may cause
          additional skin problems. It is best to speak with a doctor or
          dermatologist about possible risks.
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
      {/* <Footer /> */}
    </>
  );
};

export default Melasma;
