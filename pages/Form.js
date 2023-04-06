import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Form = () => {
  return (
    <>
    <Header />
      <div className="form-div">
        <img src="./images/grlsimg.jpg" alt="" />
        <form autoComplete="off">
          <h2>Appointment Details</h2>
          <label>
          Patient Name :  
            <input type="text" name="name" id="name" />
          </label>
          <label>
          Appointment Date :  
            <input type="text" name="name" id="name" />
          </label>
          <label>
          Patient Mobile :
            <input type="text" name="number" id="number" />
          </label>
          <label>
          Patient Age :    
          <input type="text" name="number" id="number" />
          </label>
          
          <label>
          Patient Gender :  
            <input type="text" name="message" id="message" />

            {/* <input type="radio" name="gender" value="male">  */}
            {/* <input type="radio" name="gender" value="female">  */}



          </label>
          <button className="form-btn">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Form;
