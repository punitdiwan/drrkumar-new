import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Accordion from "../Components/Accordion";
import Form from "../Components/Form";
import Link from "next/link";

const Mediareleases = () => {



  const images = [{src :"./images/media.jpg"},{src :"./images/media1.jpg"},{src :"./images/media2.jpg"},{src :"./images/media3.jpg"},{src :"./images/media4.jpg"},{src :"./images/media5.jpg"},{src :"./images/media6.jpg"},{src :"./images/media7.jpg"},{src :"./images/media8.jpg"},{src :"./images/media9.jpg"},{src :"./images/media10.jpg"},{src :"./images/media11.jpg"},{src :"./images/media12.jpg"},{src :"./images/media13.jpg"},{src :"./images/media14.jpg"},{src :"./images/media15.jpg"},{src :"./images/media16.jpg"},{src :"./images/media17.jpg"},{src :"./images/media18.jpg"},{src :"./images/media19.jpg"},{src :"./images/media20.jpg"},{src :"./images/media21.jpg"},{src :"./images/media22.jpg"},{src :"./images/media23.jpg"},{src :"./images/media24.jpg"},{src :"./images/media25.jpg"},{src :"./images/media26.jpg"},{src :"./images/media27.jpg"},{src :"./images/media28.jpg"},{src :"./images/media29.jpg"},{src :"./images/media30.jpg"},{src :"./images/media31.jpg"},{src :"./images/media32.jpg"},{src :"./images/media33.jpg"},{src :"./images/media34.jpg"},{src :"./images/media35.jpg"},{src :"./images/media36.jpg"}]




  return (
    <>
      <section>
        <Header />
        <div className="about-header" id="the-visit-header">
          <h1>Media Releases</h1>
        </div>



        <div className='main'>
          <ul className="cards-new-1">

            {
              images.map((item)=>{
                return (<>
                 <li className="cards_item-1">
          <div className="card_new-1" id ="media-images">
            <div class="card_image">
              <img src={item.src} />
              {/* <h1>Acne Scars</h1> */}
            </div>
            {/* <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/AcneScars">Acne Scars</Link> */}
          </div>
        </li>
                </>)
              })
            }




            



        {/* <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media.jpg" />
              <h1>Acne Scars</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/AcneScars">Acne Scars</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media1.jpg" />
              <h1>Acne Treatments</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/AcneTreatments">Acne Treatments</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media2.jpg" />
              <h1>Anti-Wrinkle</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/AntiWrinkle">Anti-Wrinkle</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media3.jpg" />
              <h1>Birth Marks</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/BirthMarks">Birth Marks</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media4.jpg" />
              <h1>Cool Sculpting</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/CoolSculpting">Cool Sculpting</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media5.jpg" />
              <h1>Dermal Filler</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/DermalFiller">Dermal Filler</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media6.jpg" />
              <h1>Eye Rejuvanation</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/EyeRejuvanation">Eye Rejuvanation</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media7.jpg" />
              <h1>Hair Loss</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/HairLoss">Hair Loss</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media8.jpg" />
              <h1>Laser Resurfacing </h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/LaserResurfacing">Laser Resurfacing</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media9.jpg" />
              <h1>Main Gallery</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/MainGallery">Main Gallery</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media10.jpg"  />
              <h1>Melasma + Pigmentation</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/Melasma">Melasma + Pigmentation</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media11.jpg" />
              <h1>Psoriasis</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/Psoriasis">Psoriasis</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media12.jpg" />
              <h1>Rosacea</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/Rosacea">Rosacea</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media13.jpg" />
              <h1>Scars</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/Scars">Scars</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media14.jpg" />
              <h1>Skin Cancer</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/SkinCancer">Skin Cancer</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media15.jpg" />
              <h1>Acne Maintenance</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/AcneMaintenance">Acne Maintenance</Link>
          </div>
        </li>
        <li class="cards_item-1">
          <div class="card_new-1">
            <div class="card_image">
              <img src="./images/media16.jpg" />
              <h1>Skin Tightening</h1>
            </div>
            <Link style={{textAlign: "center",textDecoration: "none",
            margin:"5px", color:"black", border:"2px solid"}} href="/SkinTightening">Skin Tightening</Link>
          </div>
        </li> */}
      </ul>
      </div>

{/* 
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
          <img src="./images/the-visit-last.jpg" />
          <img src="./img1/v2.jpeg" />
        </div> */}
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

export default Mediareleases;
