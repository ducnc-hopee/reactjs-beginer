import { useProduct } from "./hooks/useProduct";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import "./App.css";

const App = () => {

  const { products, cartItems, handleAddToCart, handleRemoveFromCart, handleUpdateQuantity } = useProduct();
  return (
    <div className="app">
      <header>
        <h1>Coffee Shop</h1>
      </header>
      <main className="main-content">
        
        <ProductList products={products} onAddToCart={handleAddToCart} />

        <ShoppingCart
          items={cartItems}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </main>
    </div>
  );
};

export default App;
