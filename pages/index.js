import React from "react";
import Header from "../Components/Header";
import Home1 from "../Components/Home1";
import Home2 from "../Components/Home2";
import Home3 from "../Components/Home3";
import Home4 from "../Components/Home4";
import Home5 from "../Components/Home5";
import Summer from "../Components/Summer";
import Footer from "../Components/Footer";
import Carousels from "../Components/Carousels";
import Instacard from "../Components/Instacard";


const index = () => {
  return (
    <>
      <Header />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      {/* <Summer /> */}
      <Carousels />
      {/* <Instacard/> */}
      <Footer />
    </>
  );
};

export default index;
