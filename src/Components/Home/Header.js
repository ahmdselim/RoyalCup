import React, { useState, useRef } from "react";
import logo from "../../Images/BaristasLogo.png";
import coffee from "../../Images/coffee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Header = () => {
  const [isActive, setActive] = useState(true);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <img
        src={coffee}
        alt=""
        className="icon-coffee-cup"
        onClick={executeScroll}
      />
      {/* Start section header */}
      <div ref={myRef} className="header">
        <img src={logo} alt="logo" />
        <div className="customer-support">
          <FontAwesomeIcon icon={faHeadset} />
          <div className="customer-detail">
            <div className="call">Customer Support</div>
            <div>01200659086</div>
          </div>
        </div>
      </div>
      {/* End section header */}

      {/* Start section navbar */}
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setActive(!isActive)}
          style={!isActive ? { display: "none" } : null}
          className="faBars"
        />
        <ul className={isActive ? null : "open"}>


          
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => setActive(!isActive)}
            style={isActive ? { display: "none" } : null}
            className="exit"
          />
          <li>
            <Link to="/contacts">تواصل معنا</Link>
          </li>
          <li>
            <Link to="/blog">المدونة</Link>
          </li>
          <li>
            <Link to="/about">عنا</Link>
          </li>
          <li>
            <Link to="/category">الاقسام</Link>
          </li>
          <li>
            <Link to="/">الرئيسية</Link>
          </li>
        </ul>
      </div>
      {/* End section navbar */}
    </>
  );
};

export default Header;
