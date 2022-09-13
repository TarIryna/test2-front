import "./modal.css";
import React from "react";
import { ReactComponent as ReactLogo } from "../../images/close.svg";
import { GpsFixed } from "@mui/icons-material";

const Modal = ({ active, setActive, onCancel, children }) => {
  const iconStyles = {
    position: "fixed",
    top: "5",
    right: "5",
  };
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modal__content active" : "modal__content"}>
        {children}
        <ReactLogo
          width="20"
          heihgt="20"
          style={iconStyles}
          onClick={() => setActive(false)}
        />
      </div>
    </div>
  );
};
export default Modal;
