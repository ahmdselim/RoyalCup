import React from "react";

const Contact = () => {
  return (
    <div className="contacts">
      <div className="contact">
        <h2>Contact Us</h2>
        <ul>
          <li>11 Nawal St., Dokki, Giza</li>
          <li>
            <strong>Hotline :</strong> 19180
          </li>
          <li>
            <strong>Phone :</strong> 02-33372843
          </li>
          <li>
            <strong>Fax :</strong> 02-33361181
          </li>
          <li>
            <strong>E-Mail :</strong> info@shaheencafe.com
          </li>
        </ul>
      </div>
      <div className="branches">
        <h2>Branches</h2>
        <ul>
          <li>
            <h3>39 Abbas El Akkad St., Nasr City, Cairo</h3>
            <p>
              <strong>Hotline : </strong> 19180
            </p>
            <p>
              <strong>Phone : </strong> 02-22609929
            </p>
          </li>
          <li>
            <h3>17 Wezarat El Zeraah St., Dokki, Giza</h3>
            <p>
              <strong>Hotline : </strong> 19180
            </p>
            <p>
              <strong>Phone : </strong> 02-33366547
            </p>
          </li>
          <li>
            <h3>39 24 Ibrahim El Laqany St., Cairo, Egypt</h3>
            <p>
              <strong>Hotline : </strong> 19180
            </p>
            <p>
              <strong>Phone : </strong> 02-24148582
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
