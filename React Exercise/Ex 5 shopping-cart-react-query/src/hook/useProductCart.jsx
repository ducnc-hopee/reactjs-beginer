import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api-mock/products-api";
import { useState, useEffect } from "react"; /* logic to manage cart state */


export default function useProductCart() {
  const { data: products = [], isLoading } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  const [cart, setCart] = useState(() => {
    // Load from localStorage on first render
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.productId === productId);
      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        return prevCart.map(item =>
          item.productId === productId
            ? {
              ...item,
              quantity: newQuantity,
              discount: newQuantity > 3 ? 0.1 : 0,  // 10% discount if quantity > 3
            }
            : item
        );
      } else {
        return [...prevCart, { productId, quantity: 1, discount: 0 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };


  return { cart, addToCart, clearCart, products, isLoading };
}