import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact_content">
        <div className="address">
          <p>
            {" "}
            35 Movigrad <br /> 76 Moonlight Road <br /> Velen 35804 REMERIA{" "}
            <br /> Open: 8am - 11pm{" "}
          </p>
        </div>
        <div className="phone">
          <p>Mobile: 0xxx xxx xxxx </p>
          <p>Phone: 3xx xx xx</p>
          <p>E-Mail: email@email.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
