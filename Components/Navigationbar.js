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
        <ul style={{ listStyle: "none" }}>
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
                  <Link href="/Melasma">Melasma Treatments </Link>
                </li>
                <li>
                  <Link href="/Allergy">Allergy</Link>
                </li>
                <li>
                  <Link href="/Fungalinfection">Fungal infection</Link>
                </li>
                <li>
                  <Link href="/Nailproblems">Nail problems</Link>
                </li>
                <li>
                  <Link href="/Acne">Acne</Link>
                </li>
                <li>
                  <Link href="/Newborn">New born condition</Link>
                </li>
                <li>
                  <Link href="/Psoriasis">Psoriasis</Link>
                </li>
                <li>
                  <Link href="/Hairproblems">Hair problems</Link>
                </li>
                <li>
                  <Link href="/pregnacyskin">pregnacy skin conditions</Link>
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
                  <Link href="Acnescar">Acne Scar Treatment</Link>
                </li>
                {/* <li>
                <Link href="/Melasma">Melasma Treatments </Link>
              </li> */}
                <li>
                  <Link href="/prp">PRP ( platelet rich plasma)</Link>
                </li>

                <li>
                  <Link href="/keloid">keloid</Link>
                </li>
                <li>
                  <Link href="/laserhairremoval">Laser Hair Removal</Link>
                </li>
                <li>
                  <Link href="/Freckles"> Freckles/Lentigens </Link>
                </li>
                <li>
                  <Link href="/Nevus">Nevus of otta</Link>
                </li>
                <li>
                  <Link href="/Antiaging">Anti-Aging Treatments </Link>
                </li>
                <li>
                  <Link href="Toenails">Ingrown Toe Nails</Link>
                </li>
                <li>
                  <Link href="Cyst">Cyst Removals</Link>
                </li>
                <li>
                  <Link href="Wart">Wart</Link>
                </li>
                <li>
                  <Link href="Moles">Moles</Link>
                </li>
                <li>
                  <Link href="Tattooremoval">Laser tatto removal</Link>
                </li>
                <li>
                  <Link href="Skintags">Skin tags</Link>
                </li>
                <li>
                  <Link href="/microneedling">Microneedling</Link>
                </li>
              </ul>
            ) : (
              show
            )}
          </li>
          <li>
            <Link href="/Certificates" className="nav_link1">
              Certificates
            </Link>
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
                  <Link href="/Mediareleases">Media Releases</Link>
                </li>
                {/* <li>
                  <Link href="/thevisit">The Visit</Link>
                </li> */}
              </ul>
            ) : (
              show3
            )}
          </li>
          <li>
            <Link href="/contact" className="nav_link1">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigationbar;
