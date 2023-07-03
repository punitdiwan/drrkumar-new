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

const Newborn = () => {
  return (
    <>
      <section style={{ fontSize: "12px" }}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>New born condition</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>New born condition</h2><br/>
          <h4>New Born Skin Condition</h4>
          <p>
            Babies are prone to rashes, but the good news about your newborn’s
            rashes is that most cause no harm and go away on their own. In order
            to allay anxiety, it is important to recognise some of the common
            skin conditions we see in toddlers and learn how to manage them.
          </p>
          <img src="./images/new-born.jpeg" height="200vh" className="treatment-new-image" />
          <li>Diaper Rash</li>
          <p>
            Most Diaper Rashes occur because of skin irritation due to diapers
            that are too tight, wet diapers left on for too long, or a
            particular brand of detergent, diapers, or baby wipes. The skin can
            become very red and inflamed and it can cause itch and irritation.
            Avoid it by keeping the diaper area open to the air as long as
            possible, changing your baby’s diaper as soon as it is wet, washing
            with a warm cloth, and applying zinc oxide cream.
          </p>
          <li>Pimples and Whiteheads</li>
          <p>
            Babies can actually develop acne on the face, because of the
            exposure to mum’s hormones. This causes oil production in the facial
            glands and can result in clogging of the openings. Pimples on baby’s
            nose and cheeks usually clear up by themselves in a few weeks. If
            the pimples are very large or extensive, topical agents can be used
            for a short period of time until everything clears. You should see
            your doctor if the toddler’s acne does not go away after a few
            weeks, and continues to persist for months. This is unusual and may
            occasionally indicate an underlying medical issue.
          </p>
          <li>Cradle Cap</li>
          <p>
            Cradle Cap can show up during baby’s first or second month, it
            usually clears up within the first year. It is also called
            Seborrheic dermatitis. Cradle Cap is caused by excess oil and shows
            up as a scaly, waxy, red rash on the scalp, eyebrows, eyelids, the
            sides of the nose, or behind the ears. Gentle shampoos, and the use
            of olive oil to dislodge some of the stuck on scales usually
            suffice.
          </p>
          <li>Prickly Heat</li>
          <p>
            Showing up as small pinkish-red bumps, Prickly Heat usually appears
            on the parts of your baby’s body that are prone to sweating, like
            the neck, diaper area, armpits, and skin folds. A cool, dry
            environment, and loose-fitting clothes are all you need to treat
            Prickly Heat rash.
          </p>
          <li>Milia</li>
          <p>
            Half of all newborns get the little white bumps known as Milia.
            These usually appear on the nose and cheeks, and can look a little
            bit like can. They are caused by skin flakes blocking oil glands,
            trapping the contents within. As the baby’s glands open up over the
            course of a few days or weeks, the bumps will disappear, and there
            is no need for any treatment.
          </p>
          <li>Atopic Eczema</li>
          <p>
            Atopic Eczema is the mostcommon skin condition affecting babies and
            children that we deal with. It is due to inflammation within the
            skin, and there is often a genetic predisposition (one or both
            parents may have a history of Eczema, Asthma or Allergic Rhinitis).
          </p>
          <p>
            There are some clues as to the diagnosis, the baby has dry skin, and
            when Eczema flares up, it causes a red itchy rash to appear on
            various parts of the body, including the cheeks and skin folds. In
            toddlers, it also commonly causes fissures, or what looks like tiny
            cuts, at the base of the earlobes.
          </p>
          <p>
            When Eczema flares, it can look oozy and have a wet appearance. When
            it is more chronic, the skin appears dry and can be thickened.
            Besides seeing your doctor to get the right diagnosis and treatment,
            it is a good idea to use moisturisers and non-soap cleansers daily.
          </p>
          <p>Anti-histamines may be given when required to relieve itching, and topical steroids may need to be applied to the red and rough areas until the rash clears. Although there may be some concern about possible side effects of topical steroids, in most cases they are very safe and effective, provided the appropriate strength is prescribed and you follow the instructions.</p>

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

export default Newborn;
