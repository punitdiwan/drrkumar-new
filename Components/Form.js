import React from "react";

const Form = () => {
  return (
    <>
      <div className="form-div">
        <img src="./images/cutis-form.jpg" alt="" />
        <form autoComplete="off">
          <h2>Ask us more about this treatment</h2>
          <label>
            Your Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Your Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Your Number
            <input type="text" name="number" id="number" />
          </label>
          <label>
            Your Message
            <input type="text" name="message" id="message" />
          </label>
          <button className="form-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
