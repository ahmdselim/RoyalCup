import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="contact-info">
          <h3>Contact info</h3>
          <ul>
            <li>
              <strong>Address</strong> : 71 Pennington Lane Vernon Rockville, CT
              06066.
            </li>
            <li>
              <strong>Phone</strong> : 0123-456-789
            </li>
            <li>
              <strong>E-mail</strong> : Theme@Demo.Com
            </li>
            <li>
              <a href="https://www.facebook.com/royalcup2021/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </li>
          </ul>
        </div>
        <div className="pages">
          <h3>Pages</h3>
          <ul>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/category">الاقسام</Link>
            </li>
            <li>
              <Link to="/blog">المدونة</Link>
            </li>
            <li>
              <Link to="about">عنا</Link>
            </li>
            <li>
              <Link to="contacts">تواصل معنا</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        Copyright Royal Cup Coffee &copy; 2021 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
