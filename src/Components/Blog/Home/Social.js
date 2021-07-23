import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const Social = () => {
  return (
    <>
      {/* Start social area */}

      <div className="social-area">
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
            <span>Facebook</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
            <span>Youtube</span>
          </li>
        </ul>
      </div>

      {/* End social area */}
    </>
  );
};

export default Social;
