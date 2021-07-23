import React from "react";
import HomeHeader from "../../Components/Home/Header";
import HomeSlider from "../../Components/Home/Slider";
import HomeContent from "../../Components/Home/Content";
import HomeFooter from "../../Components/Home/Footer";
import "./style.css";
import "react-slideshow-image/dist/styles.css";
import "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";

const Index = () => {
  return (
    <>
      <HomeHeader />
      <HomeSlider />
      <HomeContent />
      <HomeFooter />
    </>
  );
};

export default Index;
