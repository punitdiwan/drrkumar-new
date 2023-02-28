import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { FaCaretRight, FaBars, FaCaretDown } from "react-icons/fa";
import Navigationbar from "./Navigationbar";

const Header = () => {
  const [show, setShow] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (menuRef?.current && !menuRef.current.contains(event.target)) {
        setShow(false);
      }
    });
  });

  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const mainHeader = document.getElementById("mainHeader");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add("fixedTop");
      } else {
        mainHeader.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-main">
          <span>RESOURCES |</span>
          <span>+91 9204438764 |</span>
          <span>BOOK NOW</span>
        </div>
      </header>
      <nav className="navigation-bar" id="mainHeader" ref={stickyHeader}>
        <img src="./img1/logo1.png" alt="logo" />
        {/* <h3>DR. KUMAR SKIN & LASER CLINIC</h3> */}
        <ul>
          <li>
            <Link href="/" className="buttons">
              Home
            </Link>
          </li>
          <li>
            <Link href="">Medical Dermatology</Link>
            <ul className="dropdown">
              <li>
                <Link href="/Acnesolutionclinic"> Acne Solutions Clinic</Link>
              </li>
              <li>
                <Link href="/Acnesolutionclinic"> Acne Treatments</Link>
                <FaCaretRight />
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnecyst"> Acne Cyst </Link>
                  </li>
                  <li>
                    <Link href="/Acnecyst"> Acne in children </Link>
                  </li>
                  <li>
                    <Link href="/Acnecyst"> Acne in Pregnancy </Link>
                  </li>
                  <li>
                    <Link href="/Acnecyst"> Avi Clear Laser </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Birth Mark Treatments
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnecyst"> Ota Birth Marks</Link>
                  </li>
                  <li>
                    <Link href="/Acnecyst"> Port Wine Stain Treatments </Link>
                  </li>
                  <li>
                    <Link href="/Acnecyst"> Syringoma Removal</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Childrenderma"> Children's Dermatology</Link>
              </li>
              <li>
                <Link href="/Acnesolutionclinic"> DVA Skin Checks</Link>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Eczema Treatment
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnecyst">
                      Skin Allergies & Patch Treatment
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnecyst"> Sensitive Skin Skincare </Link>
                  </li>
                  <li>
                    <Link href="/Acnecyst">Perioral Dermatitis</Link>
                  </li>
                  <li>
                    <Link href="/Acnecyst">Pityriasis Rosea</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Excessive Sweating
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Anti-Sweat Injections
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Antiperspirants</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">CBT</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">ETS Surgery</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Facial Sweating</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">MiraDry</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Tablets</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Surgical Producers</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic"> Female Dermatology</Link>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Genital Skn Rashes & Conditions in Men
                </Link>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Hair Loss In Men
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnesolutionclinic">Alopecia Areata</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Growth Factor Injections
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Laser Hair Restoration
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Male Pattern Hair Loss
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Hair Loss In Women
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnesolutionclinic">Alopecia Areata</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Female Hair Loss</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Frontal Fibrosing Alopecia
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Lichen Planopilaris</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Telogen Effluvium</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Psoriasis Treatments
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnesolutionclinic">Creams for Psoriasis</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Guttate Psoriasis</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Psoriasis Diet</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Tablets for Psoriasis
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Vitamin A for Psoriasis
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Vitamin D for Psoriasis
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Rosacea treatments
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnesolutionclinic">Rhinophyma Rosacea</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Rosacea Medications</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Rosacea Skin Rejuvanation
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Rosacea Tiggers & Skincare
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Skin Cancer
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Bascal Cell Carcinoma Treatment
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Melonoma Skin Check</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Mole Removal</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Skincare Check</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Photodynamic Therapy - PDT
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Seborrheic Keratosis</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Squamous Cell Cancer Treatments
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Sunspots
                  <FaCaretRight />
                </Link>
                <ul className="dropdown1">
                  <li>
                    <Link href="/Acnesolutionclinic">
                      Actinic Cheilitis Treatments
                    </Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Efudix Treatments</Link>
                  </li>
                  <li>
                    <Link href="/Acnesolutionclinic">Fraxel for sun spots</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/Acnesolutionclinic">
                  Vitiligo Treatment
                  <FaCaretRight />
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="">Cosmetic Dermatology</Link>
            <ul className="dropdown">
              <li>
                <Link href="">Acne Scar Treatment</Link>
              </li>
              <li>
                <Link href="">Melasma Treatments </Link>
              </li>
              <li>
                <Link href="">Pigmentation</Link>
              </li>
              <li>
                <Link href="">Skin Tightening</Link>
              </li>
              <li>
                <Link href=""> Eye Rejuvanation </Link>
              </li>
              <li>
                <Link href="">Neck, Chest and Dec Rejuvanation</Link>
              </li>
              <li>
                <Link href="">Anti-Aging Treatments </Link>
              </li>
              <li>
                <Link href="">Anti-Wrinkles Treatments</Link>
              </li>
              <li>
                <Link href="">Chemicals Peels</Link>
              </li>
              <li>
                <Link href="">Dermal Filters</Link>
              </li>
              <li>
                <Link href="">Enlarged Pores</Link>
              </li>
              <li>
                <Link href="">Ehnic Skin Rewjuvanation</Link>
              </li>
              <li>
                <Link href="">Fat Reduction</Link>
              </li>
              <li>
                <Link href="">Lasers</Link>
              </li>
              <li>
                <Link href="">Lip Wrinkles & Rejuvanation</Link>
              </li>
              <li>
                <Link href="">Male Rejuvanation</Link>
              </li>
              <li>
                <Link href="">Scar Removal</Link>
              </li>
              <li>
                <Link href="">Skin Maintenance</Link>
              </li>
              <li>
                <Link href="">Skin Care & Anti-Aging by age </Link>
              </li>
              <li>
                <Link href="">Tattoo Removal</Link>
              </li>
              <li>
                <Link href="">Stretch Marks treatments</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/Beforeafter">Before & After</Link>
          </li>
          <li>
            <Link href="">About</Link>
            <ul className="dropdown " id ="new-header">
              <li>
                <Link href="/theclinic">The Clinic</Link>
              </li>
              <li>
                <Link href="/theteam">The Team</Link>
              </li>
              <li>
                <Link href="/thevisit">The Visit</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="">Contact us</Link>
          </li>
        </ul>
      </nav>
      <div ref={menuRef} className="responsive-nav">
        {/* <h4>DR. KUMAR SKIN & LASER CLINIC </h4> */}
        <img src="./images/Dr.RKumar_logo.png"/>
        <span onClick={() => setShow(!show)} className="bars">
          <FaBars />
        </span>
        {show ? <Navigationbar /> : show}
      </div>
    </>
  );
};

export default Header;
