import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useParams } from "react-router-dom";
import bgCoffee from "../../Images/bgCoffee.jpg";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import Zoom from "react-img-zoom";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = () => {
  const imageParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  useFirestoreConnect(["royalCup"]); // sync royalCup collection from Firestore into redux
  const products = useSelector((state) => state.firestore.ordered.royalCup);
  const { id } = useParams();
  return (
    <>
      <div className="wrapper">
        <img src={bgCoffee} alt="" />
        <div className="wrapper-desc">
          {products &&
            products.map((product, key) => {
              if (product.id === id) {
                return (
                  <div key={key}>
                    <h3>{product.name}</h3>
                    <strong>
                      <Link to="/"> الرئيسية </Link>
                    </strong>
                    /
                    <strong>
                      <Link to={`/products/${product.category}`}>
                        {product.category}
                      </Link>
                    </strong>
                    /
                    <strong>
                      <Link
                        style={{ color: "#F2CD84" }}
                        to={`/product/${product.id}`}
                      >
                        {product.name}
                      </Link>
                    </strong>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
      {products &&
        products.map((product, key) => {
          if (product.id === id) {
            return (
              <Fragment key={key}>
                <div className="products-section">
                  <div className="product-gallery">
                    <Swiper {...imageParams}>
                      <div>
                        <Zoom
                          img={product.firstImg}
                          zoomScale={2}
                          width={400}
                          height={400}
                        />
                      </div>
                      <div>
                        <Zoom
                          img={product.secondImg}
                          zoomScale={2}
                          width={400}
                          height={400}
                        />
                      </div>
                    </Swiper>
                  </div>
                  <div className="product-desc">
                    <h2>{product.name}</h2>
                    <hr />
                    <strong> {product.price} ج </strong>
                    <hr />
                    <p>{product.description}</p>
                    <hr />
                    <span className="icons-share">
                      <FontAwesomeIcon icon={faFacebookF} />
                      <FontAwesomeIcon icon={faInstagram} />
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    <strong> : share </strong>
                  </div>
                </div>
              </Fragment>
            );
          } else {
            return null;
          }
        })}
    </>
  );
};

export default Content;
