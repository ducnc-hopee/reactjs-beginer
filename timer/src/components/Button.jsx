import React from "react";

export function Button({ children, onClick, disabled }) {
  console.log('render');
  
  return (
    <button style={{ padding: "10px" }} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
