import React from "react";
import { useQuery } from "@tanstack/react-query";
import AddToCartButton from "./AddToCartButton";

function ProductList({products,cartItems,setCartItems}) {

  return (
    <div >
      <h1>Coffee Shop</h1>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "40px" }}>
        <ul
          style={{
            flex: 1,
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "30px",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          }}
        >
          {products.map((product) => (
            <li key={product.id}>
              <p>
                {product.name} (price: ${product.price})
              </p>
              <img src={`images/${product.image}`} width="200px" />
              <AddToCartButton
                cartItems={cartItems}
                product={product}
                setCartItems={setCartItems}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
