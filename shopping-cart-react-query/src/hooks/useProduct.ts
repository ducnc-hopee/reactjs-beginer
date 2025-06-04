import { useState, useEffect } from "react";
import React from "react";
import { Product } from "../types/Product";
import { CartItem } from "../types/cartItem";
import { fetchProducts } from "../api-mock/products-api";
import useLocalStorage from "./local-storage";

const LOCAL_STORAGE_KEY = "shoppingCartItems";

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(LOCAL_STORAGE_KEY, []);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems: CartItem[]) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return { products, cartItems, handleAddToCart, handleRemoveFromCart, handleUpdateQuantity };
};

export default useProduct;

