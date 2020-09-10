import React from "react";
import ReacDOM from "react-dom";
import coffeecartoon from "../img/coffee-cartoon.png";

const style = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
};

const style2 = {
  padding: 20,
  background: "#DFC590",
  borderRadius: "2px",
  display: "inline-block",
  minHeight: "300px",
  margin: "1rem",
  position: "relative",
  minWidth: "300px",
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  justifySelf: "center",
};

const xBtnStyle = {
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  position: "absolute",
  top: 0,
  right: 0,
  marginTop: "15px",
  marginRight: "15px",
  fontSize: "1.6rem",
  padding: 10,
};

const textStyle = {
  marginTop: "85px",
  textAlign: "center",
  fontFamily: "Arial",
};

const imgStyle = {
  width: "250px",
  height: "auto",
  opacity: "0.3",
  marginLeft: "10px",
  marginTop: "5px",
};

function PortalOnlineStore(props) {
  return ReacDOM.createPortal(
    <div onClick={props.onClose} style={style}>
      <div style={style2}>
        <h1 style={textStyle}>
          ONLINE STORE <br></br>IS COMING SOON!
        </h1>
        <button style={xBtnStyle} onClick={props.onClose}>
          X
        </button>
        <img style={imgStyle} src={coffeecartoon} />
      </div>
    </div>,
    document.getElementById("portal_root")
  );
}

export default PortalOnlineStore;
