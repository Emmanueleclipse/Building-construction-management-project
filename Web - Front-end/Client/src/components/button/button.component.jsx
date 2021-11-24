import React from "react";
import "./button.styles.scss";

const Button = ({ children, type }) => {
  return (
    <button
      className={`btn ${type === "main" ? "btn-main" : "btn-secondary"} `}
    >
      {children}
    </button>
  );
};

export default Button;
