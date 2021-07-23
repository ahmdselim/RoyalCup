import React from "react";
import image1 from "./images/1.jpg";
import image2 from "./images/2.webp";
import Swiper from "react-id-swiper";
import "./SlideStyle.css";
const Header = () => {
  const slideImages = [image1, image2];

  // const params = {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   loop: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // };

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <>
      {/* Start section slider */}
      <div className="slider">
        <div className="slide-container">
          <Swiper {...params}>
            <div className="each-slide">
              <div
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),url(${slideImages[0]})`,
                }}
              >
                <span>
                  Best Surfing Spots
                  <br /> for Beginners and Advanced
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)),url(${slideImages[1]})`,
                }}
              >
                <span>
                  Freshly Roasted <br /> Coffee2
                </span>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      {/* End section slider */}
    </>
  );
};

export default Header;
