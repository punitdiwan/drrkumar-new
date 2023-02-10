import React from "react";
import { FaFacebookSquare, FaYoutube,FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-1">
          {/* <img src="./images/bg-02.jpg" /> */}
          <h1>DR. KUMAR SKIN & LASER CLINIC</h1>
          <div className="footer-child">
            <Link href='/theclinic'>The Clinic</Link>
            <Link href='/theteam'>The Team</Link>
            <Link href='/thevisit'>The Visit</Link>
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
        </div>
        <div className="footer-2">
          <p>© 2023 DR. KUMAR SKIN & LASER CLINIC.</p>
          <div className="footer-icon">
            <a href='https://www.facebook.com/drkumarskinandlaserclinic/' target="_blank"><FaFacebookSquare /></a>
            <FaYoutube />
            <a href="http://instagram.com/drrajurims" target="_blank"><FaInstagram/></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
