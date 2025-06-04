import React from "react";
import { ShoppingCartProps } from "../types/shoppingCart";
import { CartItem } from "../types/cartItem";

const ShoppingCart: React.FC<ShoppingCartProps> = ({
    items,
    onRemoveFromCart,
    onUpdateQuantity,
}) => {
    const calculateItemBasePrice = (item: CartItem) => {
        return item.product.price * item.quantity;
    };

    const totalBasePrice = items.reduce((sum, item) => sum + calculateItemBasePrice(item), 0);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    const discountRate = totalQuantity > 3 ? 0.1 : 0;
    const discountedTotalPrice = totalBasePrice * (1 - discountRate);

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Bạn chưa thêm bất kỳ sản phẩm nào vào giỏ hàng của mình</p>
            ) : (
                <>
                    <div className="cart-items">
                        {items.map((item) => (
                            <div key={item.product.id} className="cart-item">
                                <div className="item-details">
                                    <h3>{item.product.name}</h3>
                                    <p>Giá: ${item.product.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <p>Tổng: ${calculateItemBasePrice(item).toFixed(2)}</p>
                                    <button onClick={() => onRemoveFromCart(item.product.id)}>Xóa</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        {discountRate > 0 && (
                            <p className="discount">  Giảm giá 10%!</p>
                        )}
                        <h3>Tổng cộng: ${discountedTotalPrice.toFixed(2)}</h3>
                    </div>
                </>
            )}
        </div>
    );
}

export default ShoppingCart;
