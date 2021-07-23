import React from "react";
import Product from "../../Components/Product/Product";
import HomeHeader from "../../Components/Home/Header";
import HomeFooter from "../../Components/Home/Footer";
import "./style.css";
const ProductPage = () => {
  return (
    <>
      <HomeHeader />
      <Product />
      <HomeFooter />
    </>
  );
};

export default ProductPage;
