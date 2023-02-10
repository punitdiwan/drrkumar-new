import React from "react";
import { FaRegWindowMinimize } from "react-icons/fa";

const Acnecard = () => {
  return (
    <>
      <div className="acne-card">
        <div className="acne-card-1">
          <h3>Important Facts on the Acne Solutions Clinic</h3>
          <div className="facial-main">
            <div className="facial-1">
              <p className='light-size'>
                <span><FaRegWindowMinimize/></span> Specialist acne solutions by expert dermatology
                nurses
              </p>
              <p className='light-size'>
                <span><FaRegWindowMinimize/></span> You will be given advise in regards to product
                use
              </p>
              <p className='light-size'>
                <span><FaRegWindowMinimize/></span> A complimentary and customised chemical peel will
                be conducted at the end of this assessment followed by an
                ongoing treatment plan
              </p>
              <p className='light-size'>
                <span><FaRegWindowMinimize/></span> The type of chemical peel you will receive will
                be dependent on your acne type and skin type
              </p>
              <p className='light-size'>
                <span><FaRegWindowMinimize/></span> Our Specialists use either an alpha hydroxy acid
                peel, or a beta hydroxy acid peel. Concentrations are customised
                according to your skin type
              </p>
              <p className='light-size'>
                <span><FaRegWindowMinimize/></span> $120 gets you assessed, advised, and a chemical
                peel for your acne
              </p>
            </div>
          </div>
        </div>
        <div className="new-main-div">
          <img src="./images/acne-card.jpg" />
        </div>
      </div>
    </>
  );
};

export default Acnecard;
