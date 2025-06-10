import { formatPrice } from "../../utils/formatPrice";
import "../product.css"

const Product= ({ product, onAddToCart}) => {
     return (
    <div className="product-card">
      <p>
        <strong>{product.name}</strong> (Price: {formatPrice(product.price)})
      </p>
      <img
        src={`images/${product.image}`}
        alt={product.name}
      />
      <button onClick={() => onAddToCart()}>Add to cart</button>
    </div>
  );
};

export default Product;
