import Product from "./components/Product";
import useProductCart from "./hook/useProductCart";
import ShoppingCart from "./components/ShoppingCart";


const App = () => {
  const { cart, addToCart, clearCart ,products, isLoading } = useProductCart();

  if (isLoading) return <p>Loading products...</p>;

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      <div style={{ flex: 2 }}>
        <h1>Hello! Here are the available products:</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product.id)}
            />
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <ShoppingCart cart={cart} products={products} clearCart={clearCart} />
      </div>
    </div>
  );
};

export default App;