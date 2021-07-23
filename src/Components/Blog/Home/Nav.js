import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* Start Header */}
      <div className="header-blog">
        <ul>
          <li className="list-item-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>رويال كب</li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} style={{ color: "#000" }} />
            </Link>
          </li>
        </ul>
      </div>
      {/* End Header */}
      {/* Start Navbar */}
      <div className="navbar-blog">
        <ul>
          <Link to="/admin">
            <li>الرئيسية</li>
          </Link>
          <li>المنشورات</li>
          <li>الاقسام</li>
          <li>المميزات</li>
        </ul>
      </div>
      {/* End Navbar */}
    </>
  );
};

export default Nav;
