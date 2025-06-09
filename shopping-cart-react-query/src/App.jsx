import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./api-mock/products-api";
import useLocalStorage from "./hooks/useLocalStorage";
import PriceTable from "./components/PriceTable";

import ProductList from "./components/ProductList";

const App = () => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "40px" }}>
      <div style={{ flex: 1 }}>
        <ProductList
          products={products}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      <div
        style={{
          backgroundColor: "lightblue",
          width: "400px",
          padding: "20px",
          borderRadius: "8px",
          marginTop: "100px",
        }}
      >
        <h1>Shopping Cart</h1>
        <h3>You have {cartItems.length} products in your cart</h3>
        <PriceTable
          cartItems={cartItems}
          products={products}
          setCartItems={setCartItems}
        />
      </div>
    </div>
  );
};

export default App;
