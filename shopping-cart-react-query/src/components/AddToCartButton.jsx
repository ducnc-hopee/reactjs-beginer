import React from "react";

function AddToCartButton({ cartItems, setCartItems, product }) {
  const addToCart = (product) => {
    const productInCart = cartItems.find(
      (item) => item.productId === product.id
    );

    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { productId: product.id, quantity: 1 }]);
    }
  };
  return <button onClick={() => addToCart(product)}>Add to cart</button>;
}

export default AddToCartButton;
