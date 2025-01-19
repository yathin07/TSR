import React from "react";
import Details from "../components/Details";
import Footer from "../components/Footer";
import ImageCorusel from "../components/ImageCorusel";
import Maintext from "../components/Maintext";
import Video from "../components/Video";
import Navbar from "../components/Navbar"
import About from "../components/About"


const HomePage = () => {
  return (
    <div>

    {/* <Navbar/> */}
      <Maintext />
      {/* <Footer /> */}
      {/* <Video /> */}
      <About />
      <Details />
      <ImageCorusel />
    </div>
  );
};

export default HomePage;
