import React from "react";

export const Button = ({ children, onClick, disabled, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      style={{ marginBottom: "20px" }}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
