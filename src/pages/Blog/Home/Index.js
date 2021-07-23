import React from "react";
import Nav from "../../../Components/Blog/Home/Nav";
import Slider from "../../../Components/Blog/Home/Slider";
import Content from "../../../Components/Blog/Home/Content";
import Social from "../../../Components/Blog/Home/Social";
import Footer from "../../../Components/Blog/Home/Footer";

import "./style.css";

const Index = () => {
  return (
    <>
      <Nav />
      <Slider />
      <Content />
      <Social />
      <Footer />
    </>
  );
};

export default Index;
