import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Aboutus = () => {
  return (
    <>
      <section className="about-main">
        <Header />
        <div className="about-header">
          <h1>The Clinic</h1>
        </div>
        <div className="the-clinic-two">
          <img src="./images/The-clinic-2.jpg" />
          <div className="the-clinic-card-1">
            <h5>
              DR. KUMAR SKIN & LASER CLINIC is conveniently located in the
              Western Suburbs of Brisbane, 10 minutes from the CBD & 20 minutes
              from the airport.
            </h5>
            <p>
              You will find yourself in a very comfortable & welcoming
              environment where our experienced staff are equipped to assist
              with your medical, skin cancer, & cosmetic skin treatments,
              providing the best results possible for your skin.
            </p>
          </div>
        </div>
        <h4>We have three locations</h4>
        <div className="the-clinic-card">
          <div className="the-clinic-card-one">
            <h3>DR. KUMAR SKIN & LASER CLINIC</h3>
            <p>302, 3rd floor Akasdeep plaza , Golmuri jamshedpur </p>
            <a href="tel:9262791996" className="btn-2">
              CALL NOW
            </a>
          </div>
          <div className="the-clinic-card-one">
            <h3>DR. KUMAR SKIN & LASER CLINIC</h3>
            <p>
              Dc mandevillie court, chakarwarty compound, 1st floor, above
              meditek diagnostic , next to coctail bar , contractor's area ,
              Bistupur
            </p>
            <a href="tel:9262791997" className="btn-2">
              CALL NOW
            </a>
          </div>
          <div className="the-clinic-card-one">
            <h3>DR. KUMAR SKIN & LASER CLINIC</h3>
            <p>
              Ground floor, next to sound of music , beside jio outlet , payal
              talkies road , new purulia road mango
            </p>
            <a href="tel:9262791998" className="btn-2">
              CALL NOW
            </a>
          </div>
        </div>

        <div className="map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29425.55746665961!2d86.223877!3d22.795249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36081b6060fbf505!2sDr.%20Kumar%20Skin%20%26%20Laser%20Clinic%2FBest%20Dermatologist%20%26%20skin%20specialist%20in%20jamshedpur!5e0!3m2!1sen!2sin!4v1675858778590!5m2!1sen!2sin"
            // width="100%"
            height="400"
            style={{
              border: "2px solid black",
              marginBottom: "3rem",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29427.329610004323!2d86.17057!3d22.787037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42da1bca3784b692!2sDr%20R%20Kumar%20Adityapur%20Jamshedpur%20%2F%20Best%20Skin%20Specialist%20in%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1675924900820!5m2!1sen!2sin"
            // width="100%"
            height="400"
            style={{ border: "2px solid black", marginBottom: "3rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2186.6222628335527!2d86.21086015290585!3d22.82299626107004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x810ac4ce3a29a824!2zMjLCsDQ5JzIzLjQiTiA4NsKwMTInNDMuNCJF!5e0!3m2!1sen!2sin!4v1676707551267!5m2!1sen!2sin" height="400"
            style={{ border: "2px solid black", marginBottom: "3rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Aboutus;
