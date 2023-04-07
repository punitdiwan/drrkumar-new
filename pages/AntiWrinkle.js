import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AntiWrinkle = () => {
  return (
    <>
      <Header />

      <div style={{ textAlign: "center" }}>
        <h1>Anti-Wrinkle</h1>
      </div>
      <div className='main'>
        <ul class="cards-new-1">
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/wrink.jpg" />
              </div>
            </div>
          </li>
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/before3.jpg" />
              </div>
            </div>
          </li>
          {/* <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/Wrink2.jpeg" />
              </div>
            </div>
          </li> */}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default AntiWrinkle