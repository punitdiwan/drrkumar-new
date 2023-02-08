import React, {useState} from 'react';
import {FaMinusCircle,FaPlusCircle} from "react-icons/fa";


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
          <div className="title"  >
            <h2>{item.title}</h2>
            <span>{selected === i ? <FaMinusCircle/> : <FaPlusCircle/>}</span>
          </div>
          <div className={selected === i ? "content show" : "content"}>{item.answer}</div>
        </div>
      ))}
    </div>
  </div>
  </>
  )
}

const data = [
    {
      title: " What are the fees?",
      answer:
        "Cutis Dermatology is a private billing practice. Every effort is made to ensure that our professional fees are reasonable. They reflect our expertise, time, commitment & equipment levels required to provide you with the best standards of specialist care.",
    },
    {
      title: "What's are the parking & access like",
      answer:
        "Free street parking is available nearby and a limited number of car parking spaces are provided onsite. There is a time limit of 2 hours, which is plenty.",
    },
    {
      title: " Will private health insurance cover any treatments?",
      answer:
        "In most cases no, as most of our procedures do not require hospital stay. Some overseas health insurance companies will partially cover treatments.",
    },
    {
      title: " question 4",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nulla nam eius et voluptatem laboriosam placeat voluptatibus enim. Harum omnis debitis eos quae incidunt explicabo aspernatur voluptas exercitationem optio dolores?",
    },
  ];

export default Accordion
