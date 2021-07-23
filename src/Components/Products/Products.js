import React, { Fragment } from "react";
import Swiper from "react-id-swiper";
// import EspressoImg from "../../Images/Espresso.jpg";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { useParams } from "react-router-dom";
import Zoom from "react-img-zoom";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Products = () => {
  useFirestoreConnect(["royalCup"]); // sync royalCup collection from Firestore into redux
  const products = useSelector((state) => state.firestore.ordered.royalCup);
  const { id } = useParams();

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
      {/* Start section categories */}
      <div className="categories">
        <h2>Top Categories</h2>
        <div className="swiperCat">
          {/* <Swiper {...params}> */}
          {products &&
            products.map((product, key) => {
              if (product.category === id) {
                return (
                  //   <div key={key}>
                  //     <img src={EspressoImg} alt="" />
                  //     <div className="desc">
                  //       <p>{product.name}</p>ahmed
                  //     </div>
                  //   </div>

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
          {/* </Swiper> */}
        </div>
      </div>
      {/* End section categories */}
    </>
  );
};

export default Products;
