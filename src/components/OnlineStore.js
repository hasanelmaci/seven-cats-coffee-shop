import React, { useState } from "react";
import PortalOnlineStore from "./PortalOnlineStore";

function OnlineStore() {
  const [showModal, setModal] = useState(false);
  const handleShowMessageClick = () => setModal(true);
  const handleCloseClick = () => setModal(false);
  return (
    <div className="onlinestore" id="onlinestore">
      <h1 className="onlinestoretitle">ONLINE STORE</h1>
      <p>Your coffee is closer to you than you think!</p>
      <button onClick={handleShowMessageClick} className="orderbtn">
        Order Now
      </button>
      {showModal ? (
        <PortalOnlineStore onClose={handleCloseClick}></PortalOnlineStore>
      ) : null}
      <div
        style={{
          width: "%50",
          height: "1px",
          backgroundColor: "#563210",
          marginTop: "50px",
          opacity: "0.5",
        }}
      ></div>
    </div>
  );
}

export default OnlineStore;
