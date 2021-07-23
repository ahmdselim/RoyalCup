import React from "react";
import Swiper from "react-id-swiper";
import EspressoImg from "../../Images/Espresso.jpg";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
const Category = () => {
  useFirestoreConnect(["royalCup"]); // sync royalCup collection from Firestore into redux
  const royalCup = useSelector((state) => state.firestore.ordered.royalCup);
  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <>
      {/* Start section categories */}
      <div className="categories">
        <h2>Top Categories</h2>
        <div className="swiperCat">
          <Swiper {...params}>
            {royalCup &&
              royalCup.map((product, key) => (
                <Link key={key} to={`/products/${product.category}`}>
                  <div>
                    <img src={EspressoImg} alt="" />
                    <div className="desc">
                      <p>{product.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </Swiper>
        </div>
      </div>
      {/* End section categories */}
    </>
  );
};

export default Category;
