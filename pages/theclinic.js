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
             DR. KUMAR SKIN & LASER CLINIC is conveniently located in the Western Suburbs
              of Brisbane, 10 minutes from the CBD & 20 minutes from the
              airport.
            </h5>
            <p>
              You will find yourself in a very comfortable & welcoming
              environment where our experienced staff are equipped to assist
              with your  medical, skin cancer, & cosmetic skin treatments,
              providing the best results possible for your skin.
            </p>
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
            <p>3rd floor , akasdeep plaza , golmuri </p>
            <button className="btn-2">BOOK INDOOROOPILLY</button>
          </div>
          <div className="the-clinic-card-one">
            <h3>DR. KUMAR SKIN & LASER CLINIC</h3>
            <p>Jd modi tower , beside canara bank Near kharkae bridge , aditypur</p>
            <button className="btn-2">BOOK INDOOROOPILLY</button>
          </div>
          <div className="the-clinic-card-one">
            <h3>DR. KUMAR SKIN & LASER CLINIC</h3>
            <p>Beside jio office , near kanchandeep Payal takies road,mango Jamshedpur </p>
            <button className="btn-2">BOOK INDOOROOPILLY</button>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29425.55746665961!2d86.223877!3d22.795249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36081b6060fbf505!2sDr.%20Kumar%20Skin%20%26%20Laser%20Clinic%2FBest%20Dermatologist%20%26%20skin%20specialist%20in%20jamshedpur!5e0!3m2!1sen!2sin!4v1675858778590!5m2!1sen!2sin" width="90%"
          height="450"
          style={{ border: "2px solid black", marginBottom:"3rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.157231415347!2d77.34502081439877!3d23.273735912735827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67bdaf59b5af%3A0xf8d39d37fc7189ff!2sMaitretech!5e0!3m2!1sen!2sin!4v1675501876820!5m2!1sen!2sin"
          width="90%"
          height="450"
          style={{ border: "2px solid black", marginBottom:"3rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <Footer />
      </section>
    </>
  );
};

export default Aboutus;
