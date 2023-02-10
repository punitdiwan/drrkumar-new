import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Beforeafter from "../Components/Results/Beforeafter";
import Cards from "../Components/Cards";
import {
  FaCalendarAlt,
  FaRegClock,
  FaReply,
  FaCheck,
  FaHeart,
  FaBolt,
  FaUserAlt,
  FaDollarSign,
} from "react-icons/fa";
import Accordion from "../Components/Accordion";
import Form from "../Components/Form";
import { FaRegWindowMinimize } from "react-icons/fa";

const Childrenderma = () => {
  return (
    <>
      <Header />
      <section>
        <div className="about-header" id="children-derma">
          <h1> Childrens Dermatology</h1>
        </div>
        <div className="acnesolutions-1">
          <h3>
            Our consultants are trained in children’s dermatology. They will
            provide expert treatment of your child’s skin disease. An accurate
            diagnosis and management plan will promptly improve the quality of
            life for you & your child.
          </h3>
        </div>
        <div className="children-card">
          <div className="children-card-1">
            <h3>
              DR. KUMAR SKIN & LASER CLINIC offers a variety of active Childrens
              Dermatology treatment options.
            </h3>
            <div className="children-main">
                <h5>Paediatric Dermatology Treatments:</h5><br/>
              <div className="children-1">
                <p className='light-size'>
                  <span><FaRegWindowMinimize/></span> Eczema Management
                </p>
                <p className='light-size'>
                  <span><FaRegWindowMinimize/></span> Acne treatments
                </p>
                <p className='light-size'>
                  <span><FaRegWindowMinimize/></span> Birthmark treatments
                </p>
                <p className='light-size'>
                  <span><FaRegWindowMinimize/></span> Hair Loss Alopecia Areata
                </p>
                <p className='light-size'>
                  <span><FaRegWindowMinimize/></span> Pityriasis Rosea Management
                </p>
                <p className='light-size'>
                  <span><FaRegWindowMinimize/></span> Perioral Dermatitis
                </p>
              </div>
            </div>
          </div>
          <div className="children-image">
            <img src="./images/img-03.jpg" />
          </div>
        </div>

        <Beforeafter />
        <Cards />
        <div className="about-header" id="the-visit-header">
          <p>
            DR. KUMAR SKIN & LASER CLINIC has 4 consultant dermatologists who
            specialize in paediatric dermatology.
          </p>
        </div>
        <Accordion />
        <Form />

        <Footer />
      </section>
    </>
  );
};

export default Childrenderma;
