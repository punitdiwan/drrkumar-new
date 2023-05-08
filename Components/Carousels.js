import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Components/Card";

const Carousels = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} infinite={true} className="carousel">
        {/* <div><Card/></div> */}
        {/* <div className="carousel-image">
          <li class="cards_item" id="carousel-item" style={{ height: "85% " }}>
            <div class="card_new" id="card_new">
              <div class="card_image">
                <img
                  src="./images/Skin-tightening.jpg"
                  style={{ height: "300px", width: "fit-content" }}
                />
              </div>
              <div class="card_content">
                <h2 class="card_title">Skin Tightening</h2>
                <p className="light-size">
                  The clinicians at our clinics are experts with
                  <strong> all forms of skin tightening</strong> techniques. We
                  take into account your clinical findings, ethnicity, lifestyle
                  & goals to come up with a
                </p>
              </div>
            </div>
          </li>
        </div> */}
        {/*<div className="carousel-image">
          <li class="cards_item" id="carousel-item">
            <div class="card_new">
               <div class="card_image">
                <img
                  src="./images/Eye-rejuvenation.jpg"
                  style={{ height: "300px", width: "fit-content" }}
                />
              </div>
              <div class="card_content">
                <h2 class="card_title">Eye Rejuvenation</h2>
                <p className="light-size">
                  Dermatologists at DR. KUMAR SKIN & LASER CLINIC have{" "}
                  <b>over 10 years</b> of clinical expertise in the field of{" "}
                  <b>
                    cosmetic dermatology. Our expert team covers all aspects of
                  </b>
                  <b> eye rejuvenation</b> including surgical, injectable &
                  energy-based devices.
                </p>
              </div>
            </div> 
          </li>
        </div>*/}
        <div className="carousel-image">
          <li class="cards_item" id="carousel-item">
            <div class="card_new">
              <div class="card_image">
                <img
                  src="./images/Pigmentation.jpg"
                  style={{ height: "300px", width: "fit-content" }}
                />
              </div>
              <div class="card_content">
                <h2 class="card_title">Pigmentation</h2>
                <p className="light-size">
                  Lasers are excellent for treating pigmentation. Our portfolio
                  ranges from zero downtime procedures to skin resurfacing for
                  highly sun-damaged skin. The procedure of choice depends on
                  your goals & type of pigmentation you have.
                </p>
              </div>
            </div>
          </li>
        </div>
        <div className="carousel-image">
          <li class="cards_item" id="carousel-item">
            <div class="card_new">
              <div class="card_image">
                <img
                  src="./images/injectable-treatents.jpg"
                  style={{ height: "300px", width: "fit-content" }}
                />
              </div>
              <div class="card_content">
                <h2 class="card_title">Cosmetic Injectables</h2>
                <p className="light-size">
                  At DR. KUMAR SKIN & LASER CLINIC our skilful injectors will
                  provide effective & safe solutions for fighting wrinkles &
                  lines. Rest assured the results that you will receive will be
                  the most natural to you. We listen to your concerns & will
                  provide a bespoke treatment plan.
                </p>
              </div>
            </div>
          </li>
        </div>
        <div className="carousel-image">
          <li class="cards_item" id="carousel-item">
            <div class="card_new">
              <div class="card_image">
                <img
                  src="./images/Acne-Treatments.jpg"
                  style={{ height: "300px", width: "fit-content" }}
                />
              </div>
              <div class="card_content">
                <h2 class="card_title">Acne Treatments</h2>
                <p className="light-size">
                  <b>Struggling with acne?</b> Our dermatologist and clinicians
                  can help you treat acne fast and efficiently. In most cases we
                  will find a <b>permanent solution.</b> DR. KUMAR SKIN & LASER
                  CLINIC deals with all types of acne, including teenage acne,
                  through to hormonal acne, cystic acne and paediatric cases.
                </p>
              </div>
            </div>
          </li>
        </div>
        <div className="carousel-image">
          <li class="cards_item" id="carousel-item">
            <div class="card_new">
              <div class="card_image">
                <img
                  src="./images/Laser-resurfacing.jpg"
                  style={{ height: "300px", width: "fit-content" }}
                />
              </div>
              <div class="card_content">
                <h2 class="card_title">Laser Surfacing</h2>
                <p className="light-size">
                  The dermatologists at our clinics love
                  using fractional lasers to deliver exceptional skin
                  rejuvenation results. Fractional lasers provide
                </p>
              </div>
            </div>
          </li>
        </div>
      </Carousel>
    </>
  );
};

export default Carousels;
