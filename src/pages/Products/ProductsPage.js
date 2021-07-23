import React from "react";
import Products from "../../Components/Products/Products";
import HomeHeader from "../../Components/Home/Header";
import HomeFooter from "../../Components/Home/Footer";
const ProductsPage = () => {
  return (
    <>
      <HomeHeader />
      <Products />
      <HomeFooter />
    </>
  );
};

export default ProductsPage;
