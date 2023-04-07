import React from "react";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {



  return (
    <>

      <div className="form-div">
        <img src="./images/grlsimg.jpg" alt="" />
        <form autoComplete="off">
          <h2>Book Appointment</h2>
          Patient Name :
          <label>

            <input type="text" name="name" id="name" />
          </label>
          <br />
          Appointment Date :
          <label>
            <input type="text" name="name" id="name" />
          </label>
          <br />
          Patient Mobile :
          <label>

            <input type="text" name="number" id="number" />
          </label>
          <br />
          Patient Age :
          <label>

            <input type="text" name="number" id="number" />
          </label>
          <br />
          Patient Gender :
          <label>

            <input type="text" name="message" id="message" />

            {/* <input type="radio" name="gender" value="male">  */}
            {/* <input type="radio" name="gender" value="female">  */}



          </label>
          <button className="form-btn">Submit</button>
        </form>
      </div>


      <section className="footer" >
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
            <span >
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

    </>
  );
};

export default Footer;
