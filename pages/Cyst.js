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

const Cyst = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Cyst Removal</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Cyst Removal</h2><br/>
          <h4>Cyst Removal</h4>
          <p>
          Epidermoid cysts are asymptomatic, dome-shaped lesions that often arise from the hair follicle. Rarely, multiple epidermoid cysts may be associated with pre-cancerous polyps in the colon.
                  </p>
                  <h4>What is an epidermoid cyst?</h4>
                  <p>Epidermoid cysts are asymptomatic, dome-shaped lesions that often arise from the hair follicle. The cysts contain soft, white material that is unpleasant and foul smelling. Most cysts are simple lesions. Rarely, multiple epidermoid cysts may be associated with pre-cancerous polyps in the colon. </p>
                  <h4>Other types of cyst</h4><br/>
                  <li>Pilar Cyst</li>
                  <p>These cysts occur predominantly on the scalp, are odorless and more firm than epidermoid cysts. They are very amenable to removal by the mini-scar excision technique.</p>
                  <li>Dermoid Cyst</li>
                  <p>These congenital cysts occur in the lines of cleavage around the eyes and on the base of the nose. The lesions can extend into and beneath the skull bone and thus a CT scan before surgery is needed.</p>
                  <li>Steatocystoma Multiplex</li>
                  <p>This is a genetic disorder with multiple, white / yellow small cysts (a few millimeters in diameter) found on the trunk, upper arms, axilla and thighs. The multitude of lesions makes total and complete cyst removal impossible. What is commonly done is to selectively remove a few of the biggest and most annoying lesions from time to time.</p>
          <h4>What will happen to these cysts?</h4>
          <p>Some cysts will remain the same size throughout; some will gradually enlarge over time while others become infected spontaneously. When the cysts are infected and inflamed, it is necessary to remove them surgically and treat it with antibiotics.</p>
          <h4>How are they removed?</h4>
          <p>Simple incision and drainage of cysts (uninfected) frequently results in recurrence. Complete surgical excision can ensure removal of the lining sac of the cyst and prevent recurrence. Mini-scar technique can be used for average size epidermoid cyst. The cyst can be extracted through a tiny wound which can then be closed with 1 or 2 sutures. All surgically removed cysts will be sent for laboratory analysis and follow up reviews will be arranged for discussion of the test result, as well as wound review and stitches removal.</p>

          
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

export default Cyst;
