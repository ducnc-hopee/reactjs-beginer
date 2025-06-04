import React from "react";
import { ProductList } from "../types/productList";


const ProductList: React.FC<ProductList> = ({ products, onAddToCart }) => {
    return (
        <div className="product-list">
           
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={`images/${product.image}`} alt={product.name} width="200" />
                        <h3>{product.name}</h3>
                        <p>Giá: ${product.price}</p>
                        <button onClick={() => onAddToCart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
