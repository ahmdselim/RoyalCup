import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import cappuccinoImg from "../../Images/cappuccino.jpg";
import EspressoImg from "../../Images/Espresso.jpg";
import MochaImg from "../../Images/Mocha.jpg";
import banner1 from "../../Images/sub-banner-1.jpg";
import banner2 from "../../Images/sub-banner-2.jpg";
import banner3 from "../../Images/sub-banner-3.jpg";
import banner4 from "../../Images/sub-banner-4.jpg";
import banner5 from "../../Images/sub-banner-5.jpg";
import eye from "../../Images/eye.svg";
import fb from "../../Images/fb.png";
import twitter from "../../Images/twitter .png";
import Swiper from "react-id-swiper";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

const Content = () => {
  useFirestoreConnect(["royalCup"]); // sync royalCup collection from Firestore into redux
  const products = useSelector((state) => state.firestore.ordered.royalCup);
  const [viewID, setID] = useState("");
  const [show, setShow] = useState(false);
  const handleView = (e) => {
    setID(e.target.getAttribute("data-id"));
    setShow(!show);
  };
  const params = {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  const imageParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <>
      {/* Start section wrapper */}
      <div className="wrapper">
        <ul>
          <li>
            <FontAwesomeIcon icon={faWallet} />
            <div>
              <h3>FREE SHIPPING WORLDWIDE</h3>
              <p>On order over $150</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
            <div>
              <h3>FREE SHIPPING WORLDWIDE</h3>
              <p>On order over $150</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
            <div>
              <h3>FREE SHIPPING WORLDWIDE</h3>
              <p>On order over $150</p>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
            <div>
              <h3>FREE SHIPPING WORLDWIDE</h3>
              <p>On order over $150</p>
            </div>
          </li>
        </ul>
      </div>
      {/* End section wrapper */}

      {/* Start section categories */}
      <div className="categories">
        <h2>Top Categories</h2>
        <div className="swiperCat">
          <Swiper {...params}>
            <div>
              <img src={cappuccinoImg} alt="" />
              <div className="desc">
                <p>Cappuccino</p>
              </div>
            </div>
            <div>
              <img src={EspressoImg} alt="" />
              <div className="desc">
                <p>Caffe Mocha</p>
              </div>
            </div>
            <div>
              <img src={MochaImg} alt="" />
              <div className="desc">
                <p>Espresso</p>
              </div>
            </div>
            <div>
              <img src={MochaImg} alt="" />
              <div className="desc">
                <p>Espresso</p>
              </div>
            </div>
            <div>
              <img src={MochaImg} alt="" />
              <div className="desc">
                <p>Espresso</p>
              </div>
            </div>
            <div>
              <img src={MochaImg} alt="" />
              <div className="desc">
                <p>Espresso</p>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      {/* End section categories */}

      {/* Start banner wrapper */}
      <div className="banner-wrapper">
        <div className="inner-html">
          <div className="part1">
            <div className="banner1">
              <img src={banner1} alt="" />
              <div className="banner-text">
                <h3>Caffe</h3>
                <p>cafe</p>
              </div>
            </div>
            <div className="banner2">
              <img src={banner2} alt="" />
              <div className="banner-text">
                <h3>Caffe</h3>
                <p>cafe</p>
              </div>
            </div>
          </div>
          <div className="part2">
            <div className="banner3">
              <img src={banner3} alt="" />
              <div className="banner-text">
                <h3>Caffe</h3>
                <p>cafe</p>
              </div>
            </div>
          </div>
          <div className="part3">
            <div className="banner4">
              <img src={banner4} alt="" />
              <div className="banner-text">
                <h3>Caffe</h3>
                <p>cafe</p>
              </div>
            </div>
            <div className="banner5">
              <img src={banner5} alt="" />
              <div className="banner-text">
                <h3>Caffe</h3>
                <p>cafe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End banner wrapper */}

      {/* Start section products */}
      <div className="products">
        <h2>Special Products</h2>
        <Swiper {...params}>
          {products &&
            products.map((data, key) => (
              <div key={key} className="product">
                <Link to={`/product/${data.id}`}>
                  <img src={data.firstImg} alt="" />
                  <img src={data.secondImg} alt="" />
                </Link>
                <div className="icon-eye">
                  <img
                    src={eye}
                    alt=""
                    data-id={data.id}
                    onClick={(e) => handleView(e)}
                  />
                  <img src={fb} alt="" />
                  <img src={twitter} alt="" />
                </div>

                <div className="product-desc">
                  <Link to={`/product/${data.id}`}>
                    <h2>{data.name}</h2>
                  </Link>
                  <div>
                    <h4>{data.price}$</h4>
                    <FontAwesomeIcon icon={faOpencart} />
                  </div>
                </div>
              </div>
            ))}
        </Swiper>
        <div
          className="pop-up"
          style={show ? { display: "block" } : { display: "none" }}
        >
          <div className="popUp-dialog"></div>

          <div className="popUp-container">
            <div className="popUp-header">
              <FontAwesomeIcon icon={faTimes} onClick={() => setShow(!show)} />
            </div>
            <div className="popUp-content">
              {products &&
                products.map((product, key) => {
                  if (product.id === viewID) {
                    return (
                      <>
                        <div className="gallery" key={key}>
                          <Swiper {...imageParams}>
                            <img src={product.firstImg} alt="" />
                            <img src={product.secondImg} alt="" />
                          </Swiper>
                        </div>
                        <div className="product-content">
                          <h2>{product.name}</h2>
                          <hr />
                          <strong>{product.price} $ </strong>
                          <hr />
                          <p>{product.description}</p>
                        </div>
                      </>
                    );
                  } else {
                    return null;
                  }
                })}

              <section className="popUp-footer">
                <hr />
                <div>
                  <span>share</span>
                  <FontAwesomeIcon icon={faFacebookF} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* End section products */}
    </>
  );
};

export default Content;
