import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="social_media">
        <FontAwesomeIcon
          className="icon facebook"
          icon={faFacebook}
          style={{ fontSize: "2.2rem" }}
        />
        <FontAwesomeIcon
          className="icon twitter"
          icon={faTwitter}
          style={{ fontSize: "2.2rem" }}
        />
        <FontAwesomeIcon
          className="icon instagram"
          icon={faInstagram}
          style={{ fontSize: "2.2rem" }}
        />
      </div>
      <p>This coffe shop is not exists. It is all fake.</p>
    </footer>
  );
}

export default Footer;
