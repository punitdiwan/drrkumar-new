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

const Skintags = () => {
  return (
    <>
      <section style={{fontSize:"12px"}}>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Skin tags</h1>
        </div>
        <div className="" style={{ padding: "2rem" }}>
          <h2>Skin tags</h2><br/>
          <h4>What are Skin Tags?</h4>
          <p>
          Skin tags (also known as acrochordons, cutaneous papilloma, cutaneous tag among other names) are small, benign growths that are attached to the underlying skin by a thin stalk. They are formed by a layer of fibre, blood vessels and collaged wrapped in a thin layer of epidermis. They are very common and generally occur after midlife, on overweight people and pregnant women. Both men and women are equally affected and a person can develop hundreds of skin tags during their lifetime.
Skin tags can occur anywhere on the body, but are especially prone to developing around folds of skin, where skin rubs on skin (such as eyelids, neck, armpits, groin or underneath breasts) or areas of the body that frequently rubs against clothing (such as on the back, along hips and the back of the neck). Skin tags most often appear brownish or flesh-toned. They start of as small raised bumps, but grow larger with repeated friction on the area. Some skin tags fall off over time painlessly whilst others grow bigger until they burst under pressure.
                  </p>
                  <img
            src="./images/skin-tags.jpeg"
            height="200vh"
            className="treatment-new-image"
          />
                  <h4>Causes of Skin Tags</h4>
                  <p>Skin tags are usually caused by friction – where skin rubs against itself or when skin rubs against clothing etc. Thus, skin tags are usually found on overweight people who have excess folds of skin or wear clothing that’s too tight causing chaffing on the skin surface. Hormone elevations such as during pregnancy can also cause formation of skin tags. Studies have also shown that people with type 2 diabetes and those with HPV (Human Papilloma Virus) are also more susceptible to skin tags. In people with Crohn’s disease can develop skin tags around the anal opening (perianal skin tags), while others may inherit predisposition to skin tags. </p>
                  <h4>Skin Tags vs Warts</h4>
                  <p>Skin tags are different from warts, although they can sometimes be misdiagnosed as such. Warts are infectious skin lesions caused by a virus and can spread if untreated. Warts tend to have a rougher and more irregular surface whereas skin tags tend to be smooth and soft.</p>
                  <h4>Treating Skin Tags</h4>
                  <p>As skin tags are benign, there is no necessity to remove them. However, some people tend to find them unsightly and chose to have them removed for aesthetic reasons, especially when they are on skin surfaces easily seen by others (such as on eyelids). Other times, you may chose to have skin tags removed if they cause discomfort due to their location around areas which come into contact with frequent friction from clothes or adjacent skin – frequent rubbing on the existing skin tag may cause irritation and pain along with bleeding.
Skin tags are easily removed through a minor surgical procedure under topical or local anaesthesia. They are usually snipped off or cauterised. Surgical methods have the advantage of removing the skin tag completely, but the treated skin can be a bit red and scabbed for about 10 days after the procedure. In some instances, cryotherapy with liquid nitrogen can be used. Topical medications are not effective for skin tags.
Do not attempt to remove skin tags by yourself – it should only be done by a professional. Consult to dr r kumar  who will advise on the best method of skin tag removal.</p>
                  
          
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

export default Skintags;
