import React, { useState } from "react";
import { FaCaretRight, FaBars, FaCaretDown } from "react-icons/fa";
import Link from "next/link";

const Navigationbar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <Link href="/" className="nav_link1">
              Home
            </Link>
          </li>
          <li>
            <span onClick={() => setShow1(!show1)}>
              Medical Dermatology <FaCaretDown />
            </span>
            {show1 ? (
              <ul className="dropdown-new">
                <li>
                  <Link href="/Acnesolutionclinic">Acne Solutions Clinic</Link>
                </li>
                <li>
                  <span onClick={() => setShow2(!show2)}>
                    Acne Treatments <FaCaretDown />
                  </span>
                  {show2 ? (
                    <ul className="dropdown-child">
                      <li>
                        <Link href="">Acne Cyst</Link>
                      </li>
                      <li>
                        <Link href="">Acne in Children</Link>
                      </li>
                      <li>
                        <Link href="">Acne in pregnancy</Link>
                      </li>
                    </ul>
                  ) : (
                    show2
                  )}
                </li>
                <li>
                  <Link href="/Laparoscopic" className="nav_link1">
                    Birth Mark Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/Childrenderma" className="nav_link1">
                    Children's Dermatology
                  </Link>
                </li>
                <li>
                  <Link href="/adenomyosis" className="nav_link1">
                    DVA Skin Checks
                  </Link>
                </li>
                <li>
                  <Link href="/hysterectomy" className="nav_link1">
                    Eczema Treatment
                  </Link>
                </li>
                <li>
                  <Link href="/vaginalcosmetic" className="nav_link1">
                    Excessive Sweating
                  </Link>
                </li>
                <li>
                  <Link href="/Infertility" className="nav_link1">
                    Female Dermatology
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Genital Skn Rashes & Conditions in Men
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Hair Loss in Men
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Hair Loss in Women
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Psoriasis Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Rosacea Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Skin Cancer
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Sunspots
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Vitiligo Treatments
                  </Link>
                </li>
              </ul>
            ) : (
              show1
            )}
          </li>
          <li>
            <span onClick={() => setShow(!show)} className="">
              Cosmetic Dermatology <FaCaretDown />
            </span>
            {show ? (
              <ul className="dropdown-new">
                <li>
                  <Link href="/obstetrics" className="nav_link1">
                    Acne Scar Treatment
                  </Link>
                </li>
                <li>
                  <Link href="/gynaecology" className="nav_link1">
                    Melasma Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/Laparoscopic" className="nav_link1">
                    Pigmentation
                  </Link>
                </li>
                <li>
                  <Link href="/fibroids" className="nav_link1">
                    Skin Tightening
                  </Link>
                </li>
                <li>
                  <Link href="/adenomyosis" className="nav_link1">
                    Eye Rejuvanation
                  </Link>
                </li>
                <li>
                  <Link href="/hysterectomy" className="nav_link1">
                    Neck, Chest and Dec Rejuvanation
                  </Link>
                </li>
                <li>
                  <Link href="/vaginalcosmetic" className="nav_link1">
                    Anti-Aging Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/Infertility" className="nav_link1">
                    Anti-Wrinkles Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Chemicals Peels
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Dermal Fillers
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Enlarged Pores
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Ethnic Skin Rejuvenation
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Fat Reduction
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    Lasers
                  </Link>
                </li>
              </ul>
            ) : (
              show
            )}
          </li>
          <li>
            <Link href="/Beforeafter" className="nav_link1">
              Before & Afters
            </Link>
          </li>
          <li>
            <span href="/contact" onClick={() => setShow3(!show3)}>
              About <FaCaretDown />
            </span>
            {show3 ? (
              <ul className="dropdown-new">
                <li>
                  <Link href="/theclinic">The Clinic </Link>
                </li>
                <li>
                  <Link href="/theteam">The Team</Link>
                </li>
                <li>
                  <Link href="/thevisit">The Visit</Link>
                </li>
              </ul>
            ) : (
              show3
            )}
          </li>
          <li>
            <Link href="/" className="nav_link1">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigationbar;
