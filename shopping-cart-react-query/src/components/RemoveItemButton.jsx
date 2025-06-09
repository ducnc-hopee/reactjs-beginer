import React from "react";

function RemoveItem({ productId, setCartItems }) {
  const removeItemById = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.productId === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div style={{ display: "inline", margin: "10px" }}>
      <button
        onClick={() => removeItemById(productId)}
        style={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "3px",
          fontWeight: "bold",
          fontSize: "15px",
          cursor: "pointer"
        }}
      >
        -
      </button>
    </div>
  );
}

export default RemoveItem;
