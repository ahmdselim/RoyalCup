import React from "react";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import Swiper from "react-id-swiper";

const Header = () => {
  const slideImages = [image1, image2];
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
                  backgroundImage: `url(${slideImages[0]})`,
                }}
              >
                <span>
                  100% Natural <br /> Fresh Coffee
                </span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
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
