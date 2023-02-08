import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Acnecard from "../Components/AcneSolutions/Acnecard";
import Form from "../Components/Form";
import Accordion from "../Components/Accordion";
import Acneglance from "../Components/AcneSolutions/Acneglance";

const Acnesolutionclinic = () => {
  return (
    <>
      <section>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Acne Solutions Clinic</h1>
        </div>
        <div className="acnesolutions-1">
          <p>
            The Acne Solutions Clinic is a specialist nurse-led clinic that will
            provide you with expert advice in regard to skincare, make-up, acne
            treatments and scar treatments. As part of this service, you will
            receive a free customized chemical peel. This is an excellent acne
            solution for patients who would like to take the step to clearer,
            cleaner acne-free skin without the wait times to see a Specialist
            Dermatologists.
          </p>
        </div>
        <Acnecard />
        <Acneglance />
        <Accordion />
        <Form />

        <Footer />
      </section>
    </>
  );
};

export default Acnesolutionclinic;
