import React from "react";
import Head from "../../Components/Home/Header";
import Slider from "../../Components/Home/Slider";
import Footer from "../../Components/Home/Footer";
import Category from "../../Components/Category/Category";
import "./style.css";

const ContactsPage = () => {
  return (
    <>
      <Head />
      <Slider />
      <Category />
      <Footer />
    </>
  );
};

export default ContactsPage;
