import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Beforeafter from "../Components/Results/Beforeafter";
import Cards from "../Components/Cards";
import { FaCalendarAlt,FaRegClock,FaReply,FaCheck,FaHeart,FaBolt,FaUserAlt,FaDollarSign    } from "react-icons/fa";
import Accordion from "../Components/Accordion";
import Form from "../Components/Form";

const Childrenderma =()=>{
    return (<>
    <Header/>
    <section>
    <div className="about-header" id="children-derma">
          <h1> Childrens Dermatology</h1>
        </div>
        <div className="acnesolutions-1">
          <h3>
            
Our consultants are trained in children’s dermatology. They will provide expert treatment of your child’s skin disease. An accurate diagnosis and management plan will promptly improve the quality of life for you & your child.
          </h3>
        </div>
        <div className="children-card">
        
        <div className="children-card-1" >
          <h1>Cutis Dermatology offers a variety of active Childrens Dermatology treatment options.</h1>
          <div className="children-main">
            <div className="children-1">
              <a>
                <span>-</span> Eczema Management
              </a>
              <a>
                <span>-</span> Acne treatments</a>
              <a>
                <span>-</span> Birthmark treatments
              </a>
              <a>
                <span>-</span> Hair Loss Alopecia Areata</a>
                          <a>
                <span>-</span> Pityriasis Rosea Management</a>
              <a>
                <span>-</span> Perioral Dermatitis</a>
            </div>
                  
              
          </div>
        </div>
        <div className='children-image'>
        <img src="./images/img-03.jpg" />
        </div>
      </div>
      
      <Beforeafter/>
      <Cards/>
      <div className="about-header" id="the-visit-header">
          <p>Cutis Dermatology has 4 consultant dermatologists who specialize in paediatric dermatology. Dr Heba Jibreal also sees complex cases at Brisbane’s Children Hospital.</p>
        </div>
        <Accordion/>
        <Form/>

    <Footer/>
    </section>
    </>)
}


export default Childrenderma;