import React from "react";

function AddItem({ productId, setCartItems }) {
  const AddItemById = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.productId === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div style={{ display: "inline", margin: "10px" }}>
      <button
        onClick={() => AddItemById(productId)}
        style={{
          backgroundColor: "white",
          border: "none",
          borderRadius: "3px",
          fontWeight: "bold",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        +   
      </button>
    </div>
  );
}

export default AddItem;
