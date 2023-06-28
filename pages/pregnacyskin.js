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

const pregnacyskin = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>pregnacy skin conditions </h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>pregnacy skin conditions</h2><br/>
          <h4>What are Pregnancy Skin Conditions?</h4>
          <p>
            During pregnancy, the woman’s body goes through many physical
            changes, some of which affect her skin. Many expectant moms
            experience skin conditions, or a worsening of existing skin
            conditions during their pregnancy. During pregnancy, the body
            produces a significant amount of hormones and has a higher blood
            flow through the blood vessels. This gives pregnant women their
            characteristic “rosy glow” but also other skin conditions that are
            not as complimentary to her appearance. These include blotches on
            skin, higher amount of acne, spider angiomas, dark spots on breasts,
            nipples and inner thighs, stretch marks, linea negra, spider and
            varicose veins among others. Many of these skin conditions are
            considered normal during pregnancy and usually disappear soon after
            birth when the hormones and blood flow settle back to pre-pregnancy
            levels.
          </p>
          <p>Common Pregnancy Skin Conditions and How to Treat Them</p>
          <h4>Varicose and Spider Veins</h4>
          <p>
            Spider veins (spider angiomas) are thin, small red veins that appear
            on the face, neck and arms whereas varicose veins are enlarged veins
            that appear on the lower part of the body – namely legs, vulva and
            rectum. The former is caused by pregnancy-induced hormonal changes
            and the latter by increased weight gain and uterine pressure during
            pregnancy. Both spider and varicose veins revert to normal
            appearances after delivery of the baby.
          </p>
          <p>
            TREATING VARICOSE AND SPIDER VEINS Spider veins, if they persist
            after pregnancy can be treated with lasers. The effects of varicose
            veins can be kept to a minimum by taking these precautions –
          </p>
          <li>
            Limiting periods of standing and sitting to ensure pressure doesn’t
            build up in veins
          </li>
          <li>Not crossing legs if sitting for long periods</li>
          <li>
            Keeping legs elevated when seated or lying down to reduce pressure
            on veins
          </li>
          <li>
            Using pressure socks or support hose to evenly distribute pressure
            on legs
          </li><br/>
          <h4>Striae Gravidarum (Stretch Marks)</h4>
          {/* <li>Male Pattern Hair Loss</li> */}
          <p>
          Stretch marks appear as pink-purple lines or bands around the belly, the upper thighs, buttocks and around breasts during pregnancy – about 90% of all women gain stretch marks during pregnancy. Their appearance is linked to stretching of the skin around these areas of the body due to the growth of the foetus pushing out the skin as well as hormonal changes affecting the skin’s elastic fibres. Stretch marks rarely disappear completely after pregnancy, although they do mostly shrink considerably after delivery.
TREATING STRIAE GRAVIDARUM (STRETCH MARKS)
Some stretch marks can be treated with laser therapy after pregnancy. Prescription creams and moisturising lotions that keep the skin hydrated and supple during pregnancy can help alleviate the symptoms. However, stretch marks can’t be removed completely even if they can have a reduced appearance.
          </p>
          <h4>Acne</h4>
          <p>
          Women can experience an outbreak of adult acne during pregnancy as well. This is normally triggered by the release of androgens which are hormones that can prompt sebaceous glands to boost production of sebum, which is an oily substance that can combine with shed skin cells and block the pores – leading to inflammation and acne breakouts.
TREATING ACNE
It is good practice to follow general hygienic practices throughout pregnancy – keep the body and face clean by showering regularly with mild cleansing soaps. 
          </p>
          <h4>Rashes and Itchy Skin</h4>
          <p>
          Approximately 20% of pregnant women experience itchy skin and rashes. Itchiness around the belly and breasts is especially common as the skin around this area stretches during pregnancy. These areas are also more prone to dryness which contributes to the itchiness.
TREATING RASHES AND ITCHY SKIN
Most itchy skin or rashes are mild and can be treated with moisturising lotions. Applying cold compress on the belly and breasts can also help alleviate the itchiness. Having the occasional oatmeal bath has been known to help as well. However, if you experience an itchy rash or severely itchy palms and/or feet they could be symptoms of more serious conditions. You should consult your gynaecologist should you experience such symptoms.
          </p>
          <h4>Hyperpigmentation</h4>
          <p>
          Most women experience some form of hyperpigmentation during pregnancy. The common forms of hyperpigmentation include darkened areolae and genitals, linea nigra (the dark line that forms vertically across the belly button) and melasma. Melasma affects up to 70% of pregnant woman and is a result of hormonal changes during pregnancy. It commonly manifests itself as dark splotches of skin, usually around the face, forearms and other parts of the body exposed to the sun.
TREATING HYPERPIGMENTATION
Hyperpigmentation during pregnancy is caused by increased melanin production due to hormonal changes and usually disappears after childbirth, even without treatment. However, it is advisable to apply sunscreen protection to reduce the appearance of melasma as it is aggravated by sun exposure. Switching to hypoallergenic skincare products also helps as products that cause skin irritation can make melasma worse. Stop waxing during pregnancy as this may cause skin irritation/inflammation that can worsen melasma.
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

export default pregnacyskin;
