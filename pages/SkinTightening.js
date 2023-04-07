import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SkinTightening = () => {
  return (
    <>
      <Header />

      <div style={{ textAlign: "center" }}>
        <h1>Skin Tightening</h1>
      </div>
      <div className='main'>
        <ul class="cards-new-1">
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/before18.jpg" />
              </div>
            </div>
          </li>
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/tig.webp" />
              </div>
            </div>
          </li>
          <li class="cards_item-1">
            <div class="card_new-1">
              <div class="card_image">
                <img src="./images/tig1.jpeg" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default SkinTightening