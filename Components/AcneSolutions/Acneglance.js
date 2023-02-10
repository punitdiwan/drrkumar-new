import React from "react";
import { FaCalendarAlt,FaRegClock,FaReply,FaCheck,FaHeart,FaBolt,FaUserAlt,FaDollarSign    } from "react-icons/fa";

const Acneglance = () => {
  return (
    <>
        <div className="acne-glance-main">
            <h2>Our Acne Solutions Clinic at a glance</h2>
            <div className='acne-glance-div'>
            <div className='acne-glance-1'>
                <span><FaCalendarAlt/> <p> Best outcomes: 2-4 sessions</p></span>
                <span><FaRegClock/> <p>  Procedure time: 30-45 minutes </p></span>
                <span><FaCheck/> <p> Duration of results: Variable </p></span>
                <span><FaReply/> <p> Back to work: Immediately </p> </span>
            </div>
            <div className='acne-glance-1'>
                <span><FaHeart/> <p > Best outcomes: 2-4 sessions </p></span> 
                <span><FaBolt/> <p> Procedure time: 30-45 minutes </p> </span>
                <span><FaUserAlt/> <p> Duration of results: Variable </p> </span>
                <span><FaDollarSign/> <p> Back to work: Immediately </p> </span>
            </div>
            </div>
              
      </div>
    </>
  );
};

export default Acneglance;
    