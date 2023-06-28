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

const Wart = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Wart</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Wart</h2><br/>
          <h4>Warts</h4>
          <p>
          Warts are skin-colored growths, scaly and rough to the touch, but they can be also dark, flat, and smooth.  They are non-cancerous skin growths caused by a viral infection in the top layer of the skin. Viruses that cause warts are called Human Papillomavirus (HPV).
                  </p>
                  <h4>
How many kinds of Warts are there?</h4>
                  <p>There are several kinds of warts including ; Common warts,Foot (Plantar) warts, Flat warts and Genital warts. They are most common on the hands, feet and face but they can grow almost anywhere in the body. They are infectious and some people are more susceptible to this infection than others. </p>
                  <h4>Common warts</h4>
                  <p>Usually grow on the fingers, around the nails, and on the backs of the hands. These are often called “seed” warts because the blood vessels to the wart produce black dots that look like seeds.</p>
                  <h4>Foot warts</h4>
                  <p>Are usually on the soles of the feet and are called plantar warts. Most plantar warts do not stick out above the surface like common warts because the pressure of walking flattens them and pushes them back into the skin. Plantar warts can be painful, feeling like a stone in the shoe.</p>
                  <h4>Flat warts</h4>
                  <p>Are smaller and smoother than other warts. They tend to grow in large numbers, 20 to 100 at any one time. They can occur anywhere, but in children, they are most common on the face. In adults, they are often found in the beard area in men and on the legs in women. Virus seeding from shaving probably accounts for this.</p>
          <h4>Genital warts</h4>
          <p>Usually sexually transmitted and they can be rough or smooth surfaced and are typically flesh colored. Genital warts may be large or small and can be found as a single growth or in a group. They can appear on the external genital skin, inside the vagina, or in the anus. Only a small percentage of people infected with HPV will develop genital warts. Many people are “carriers” of HPV and may never develop warts; but may still be able to pass HPV to their sexual partners. Although the incubation period from contracting HPV until the development of warts is usually several months, some people may not develop warts until 1-2 years later.</p>
          <h4>How do Dermatologists remove warts?</h4>
          <p>Warts are caused by Human Papillomavirus infection. Whilst the patient is concerned about the warts, Dermatologist sees not just the warts but also the presence of the virus on the warts and the surrounding skin. In order to remove the warts, we need to stimulate the body’s immune system to produce antibodies to kill the virus. The immune system can be stimulated via cryotherapy, electrosurgery or chemical treatment e.g. topical creams.</p>
          <h4>Dr R kumar Approach for Wart Removal</h4><br/>
          <li>Cryotherapy (freezing)</li>
          <p>Cryotherapy is the most common physical treatment to treat warts. We used a cryo gun to spray liquid nitrogen focally on the warts for 6 to 10 seconds. The treated area is frozen to as low as -120 degree Celsius and it is slightly painful but bearable. The treated area may blister up sometimes and blood blister may also develop. The treated area will dry or scab up and heal in 7 to 10 days time. Repeat treatments at two to four-weekly intervals are often necessary. The total number of sessions required can range from 1 to 10 and it really varies from patient to patient. Cryotherapy is the preferred treatment for nearly all dermatologists because it is easy to administer and relatively hassle free for the patient. Cryotherapy is always carried out as an outpatient procedure as the whole treatment takes less than 5 minutes. The success rate is decent though not 100%. </p>
          <li>Electrosurgery or Laser surgery</li>
          <p>These are the alternative treatments that Dermatologists use on warts that have not responded well to cryotherapy. After burning the wart, the base of the wart is exposed. Dr kumar an now treat any visible recurrence of the wart with medication to enhance the success rate of the treatment. Electrosurgery can be done as an outpatient procedure or in the hospital day surgery operating theatre. In this treatment, local anaesthesia injection is required. After the wart is electrodessicated, the patient will end up with a wound. Wound review will be scheduled to check for wart recurrence and for change of dressing. In comparison to cryotherapy, electrosurgery of warts is more tedious, takes slightly longer time for the wound to heal. This is especially so for the plantar warts, the deeper wound created from electrosurgery may take up to 4 weeks to heal at times. Even though the success rate is generally higher than cryotherapy, the injection, the wound management, the need for dressing and the longer healing time make this treatment the second choice option in the treatment for warts.</p>
          <li>Topical medications</li>
          <p>Topical salicylate acid is often used. There is minimal discomfort but it can take many weeks or months for treatment to succeed. Treatment should be stopped temporarily if the wart becomes sore. Dr kumar also uses topical immunomodulator cream to stimulate the body’s own immune system to eliminate the Human Papillomavirus. Other applications like tretinoin and glycolic acid are often used for treating multiple flat warts.</p>

          
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

export default Wart;
