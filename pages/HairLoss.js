import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HairLoss = () => {
  return (
    <>
      <Header />

      <div style={{ textAlign: "center" }}>
        <h1>Hair Loss</h1>
      </div>
      <div className='main'>
        <ul class="cards-new-1">
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/before8.jpg" />
              </div>
            </div>
          </li>
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/hair.jpg" />
              </div>
            </div>
          </li>
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/hair.webp" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default HairLoss