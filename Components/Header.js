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
        <img src="./img1/logo.png" alt="logo" />
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
          </li>
          <li>
            <Link href="">Cosmetic Dermatology</Link>
            <ul className="dropdown">
              <li>
                <Link href="Acnescar">Acne Scar Treatment</Link>
              </li>
              <li>
                <Link href="/Melasma">Melasma Treatments </Link>
              </li>
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
          </li>
          <li>
            <Link href="/Certificates">Certificates</Link>
          </li>
          <li>
            <Link href="/Beforeafter">Before & After</Link>
          </li>
          <li>
            <Link href="">About</Link>
            <ul className="dropdown " id="new-header">
              <li>
                <Link href="/theclinic">The Clinic</Link>
              </li>
              <li>
                <Link href="/theteam">The Team</Link>
              </li>
              <li>
                <Link href="/Mediareleases">Media Releases</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/Contactus">Contact us</Link>
          </li>
        </ul>
      </nav>
      <div ref={menuRef} className="responsive-nav">
        {/* <h4>DR. KUMAR SKIN & LASER CLINIC </h4> */}
        <img src="./img1/logo.png" />
        <span onClick={() => setShow(!show)} className="bars">
          <FaBars />
        </span>
        {show ? <Navigationbar /> : show}
      </div>
    </>
  );
};

export default Header;
