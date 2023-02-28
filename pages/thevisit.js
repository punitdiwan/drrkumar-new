import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Accordion from "../Components/Accordion";
import Form from "../Components/Form";

const thevisit = () => {
  return (
    <>
      <section>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>The Visit</h1>
        </div>

        <div className="the-clinic-two" id="the-visit-two">
          <img src="./images/new-image.jpeg" />
          <div className="the-clinic-card-1">
            <h5>
            DR. KUMAR SKIN & LASER CLINIC has three locations. Take
              note of which clinic you will be visiting.
            </h5>
            <p>
              <b>PLEASE BRING THE FOLLOWING FOR THE FIRST APPOINTMENT:</b>
            </p>
            <ul className="disc">
              <li>Referral letter (if you have one)</li>
              <li>Medicare or DVA Card</li>
              <li>Completed new patient registration form</li>
            </ul>
          </div>
        </div>
        <div className="the-visit-main">
          <div className="the-visit-1">
            <h4>​BEFORE YOUR APPOINTMENT:</h4>
            <ul>
              <li>
                It is important not to wear a make-up if your condition involves
                your ace or you need a skin check.
              </li>
              <li>
                Copies of any relevant blood tests, biopsy or test results that
                may be relevant to your consultation
              </li>
              <li>Obtain pictures of your problem if you have taken any.</li>
            </ul>
          </div>
          <div className="the-visit-1">
            <h4>RUNNING LATE? </h4>
            <p>
              Please arrive 10-15 minutes before your initial appointment as the
              patient registration process does take time. Please call the
              practice if you are running late as this will impact patient
              appointments following your own appointment. Depending on the time
              constraints, the next patient may be seen before you,
              alternatively your appointment may need to be rescheduled.
            </p>
          </div>
          <div className="the-visit-1">
            <h4>SORRY, WE’RE RUNNING LATE</h4>
            <p>
              Our clinical staff will make every effort to run on time, but
              delays are possible due to unavoidable patient circumstances. The
              most common reason is that the patient/s before you were late,
              giving a flow on effect. Other rare causes of delay include
              extended procedural times.
            </p>
          </div>
        </div>
        <div className="the-clinic-two" id="the-visit-last">
          <div className="the-clinic-card-1">
            <h5>
            DR. KUMAR SKIN & LASER CLINIC is conveniently located at 3rd floor , akasdeep plaza , golmuri.
            </h5>
            <p>
              You will find yourself in a very comfortable & welcoming
              environment where our experienced staff are equipped to assist
              with your medical, skin cancer, & cosmetic skin treatments,
              providing the best results possible for your skin.
            </p>
          </div>
          {/* <img src="./images/the-visit-last.jpg" /> */}
          <img src="./img1/v2.jpeg" />
        </div>
        {/* <Accordion /> */}
        <Form />
        {/* <div className="the-team-cards">
          <h3>Latest News</h3>
          <ul class="cards-new">
            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                <img
                    src="./img1/d3.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Dr Eshini Perera</h2>
                  <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  
                  <img
                    src="./img1/d1.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Dr Eshini Perera</h2>
                  <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                <img
                    src="./img1/d2.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Dr Eshini Perera</h2>
                  <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
        <Footer />
      </section>
    </>
  );
};

export default thevisit;
