import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Theteam = () => {
  return (
    <>
      <section className="the-team-main">
        <Header />
        <div className="about-header " id="the-team-header">
          <h1>The Team</h1>
        </div>
        <div className="the-clinic-two">
          {/* <img src="./images/Our-Team-1.jpg" /> */}
          <img src="./img1/team-1.jpeg" />
          <div className="the-clinic-card-1">
            <h5>
              DR. KUMAR SKIN & LASER CLINIC is conveniently located at 3rd floor
              , akasdeep plaza , golmuri.
            </h5>
            <br />
            <p>
              You will find  yourself in a very comfortable & welcoming
              environment where our experienced staff are equipped to assist
              with your medical, skin cancer, & cosmetic skin treatments,
              providing the best results possible for your skin.
            </p>
          </div>
        </div>
        <div className="the-team-cards">
          <h3>Meet Our Doctors</h3>

          <ul class="cards-new card_items">
            <li class="cards_item ">
              <div class="card_new">
                <div class="card_image">
                  {/* <img
                    src="./images/the-team-card.webp"
                    style={{ height: "300px", width: "300px" }}
                  /> */}
                  <img
                    src="./img1/v2.jpeg"
                    style={{ height: "400px", width: "400px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Dr Raju Kumar</h2>
                  <h5>Conultant - Dermatologist ,Trichologist</h5>
                  <h5>&Laser expert</h5>
                  <ul>
                    <li> - Ex-Consultant Kaya Skin Clinic </li>
                    <li>,Mumbai</li>

                    <li> - Ex-Consultant Tinplate Hospital,Jamshedpur</li>
                    <li> - Presently Chief Consultant</li>
                    <li>-Dr.kumar skin& Laser Clinic ,Jamshedpur</li>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul>
                </div>
              </div>
            </li>
            {/* <li class="cards_item">
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
            </li> */}
            {/* <li class="cards_item">
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
            </li> */}
            {/* <li class="cards_item">
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
            </li> */}
          </ul>
        </div>
        <div className="the-team-cards">
          <h3>Meet Our Skin Therapist</h3>
          <ul class="cards-new">
            {/* <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./images/the-team-card.webp"
                    style={{ height: "300px", width: "300px" }}
                  />
                  <img
                    src="./img1/t1.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Chandresh Kumar Naresh</h2>
                  <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul>
                </div>
              </div>
            </li> */}
            {/* <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/t2.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Sumeet Kumar</h2>
                  <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul>
                </div>
              </div>
            </li> */}
            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/t3.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Sheetal </h2>
                  {/* <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul> */}
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/t4.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Priyanka </h2>
                  {/* <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul> */}
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/t5.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Varsha</h2>
                  {/* <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul> */}
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/t6.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Bhumi </h2>
                  {/* <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul> */}
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/t7.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Kajal</h2>
                  {/* <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul> */}
                </div>
              </div>
            </li>
            {/* <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/t8.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Rajesh Kumar </h2>
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
             */}
          </ul>
        </div>

        {/* <div className="the-team-cards">
          <h3>Meet Our Pathologist  Team</h3>
          <ul class="cards-new">


            <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/sumit.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Dr Sumit Kumar</h2>
                  <h5>Pathologist </h5>
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

        <div className="the-team-cards">
          <h3>Meet Our Pathologist  Team</h3>

          <ul class="cards-new card_items">
            <li class="cards_item ">
              <div class="card_new">
                <div class="card_image">

                  <img
                    src="./img1/sumit.jpeg"
                    style={{ height: "300px", width: "310px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Dr Sumit Kumar</h2>
                  <h5>Pathologist </h5>
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
        </div>


        <div className="the-team-cards">
          <h3>Meet Our Management Team</h3>

          <ul class="cards-new card_items">
            <li class="cards_item ">
              <div class="card_new">
                <div class="card_image">

                  <img
                    src="./img1/rajesh.jpeg"
                    style={{ height: "300px", width: "310px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Rajesh Kumar</h2>
                </div>
              </div>
            </li>
          </ul>
        </div>











        {/* <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/sangam.jpeg"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Dr Sangam</h2>
                  <h5>Dermatologist </h5>
                  <ul>
                    <li>- Rosacea</li>
                    <li>- Skin cancer management </li>
                    <li>- Acne</li>
                    <li>- Skin rejuvenation</li>
                  </ul>
                </div>
              </div>
            </li> */}
        {/* <li class="cards_item">
              <div class="card_new">
                <div class="card_image">
                  <img
                    src="./img1/m4.jpeg"
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
            </li> */}

        {/* <div className="the-team-cards">
          <h3>Latest News</h3>
          <ul class="cards-new">
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
                    src="./img1/d4.jpeg"
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

export default Theteam;
