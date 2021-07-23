import React from "react";
import Head from "../../Components/Home/Header";
import Slider from "../../Components/Home/Slider";
import Footer from "../../Components/Home/Footer";
import About from "../../Components/About/About";
import "./style.css";

const AboutPage = () => {
  return (
    <>
      <Head />
      <Slider />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
