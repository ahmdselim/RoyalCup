import React from "react";
import Head from "../../Components/Home/Header";
import Slider from "../../Components/Home/Slider";
import Footer from "../../Components/Home/Footer";
import Contact from "../../Components/Contacts/Contact";
import "./style.css";

const ContactsPage = () => {
  return (
    <>
      <Head />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactsPage;
