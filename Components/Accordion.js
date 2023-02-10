import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <div className="wrapper">
        <h2>The Visit FAQs</h2>
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item" onClick={() => toggle(i)}>
              <div className="title">
                <h5>{item.title}</h5>
                <span>
                  {selected === i ? <FaMinusCircle /> : <FaPlusCircle />}
                </span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const data = [
  // {
  //   title: " What are the fees?",
  //   answer:
  //     "Cutis Dermatology is a private billing practice. Every effort is made to ensure that our professional fees are reasonable. They reflect our expertise, time, commitment & equipment levels required to provide you with the best standards of specialist care.",
  // },
  {
    title: "Who is the ideal patient for the Acne Solutions Clinic",
    answer:
      "This clinic is suited for patients who would like to undertake acne treatments without prescription medications, or patients who exhibit mild acne. Often a simple change of product, makeup and simple chemical peels can reduce annoying breakouts without the need to see a Dermatologist.",
  },
  {
    title: " Will private health insurance cover any treatments?",
    answer:
      "In most cases no, as most of our procedures do not require hospital stay. Some overseas health insurance companies will partially cover treatments.",
  },
  {
    title: " What happens if my acne does not improve",
    answer:
      "If your acne does not improve, or if you exhibit scarring, you may elect to see a dermatologist for further management. Specialist Dermatologists can tailor a solution based upon your acne, your previous acne treatments and most importantly your lifestyle. Solutions are always possible.",
  },
  {
    title:
      "What active acne treatments are available thru Acne Solutions Clnic ",
    answer:
      "This is a Specialist Nurse led clinic for patients who suffer from mild to moderate acne, who often will benefit from advice on correct skin care and products. As part of our initial assessment we provide each patient with a complimentary chemical peel.",
  },
  {
    title: "What can be done in Acne Scarring ",
    answer:
      "Treating acne is very important, as effective and early treatment can reduce, prevent or even reverse acne scars.If you have acne and mild to moderate acne scars, our specialist laser nurses’ maybe the ideal first step in organising a scar revision plan.",
  },
  {
    title: "What can be done in Acne Scarring ",
    answer:
      "Treating acne is very important, as effective and early treatment can reduce, prevent or even reverse acne scars.If you have acne and mild to moderate acne scars, our specialist laser nurses’ maybe the ideal first step in organising a scar revision plan.",
  },
];

export default Accordion;
