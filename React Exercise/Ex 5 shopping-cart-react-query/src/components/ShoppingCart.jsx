import { formatPrice } from "../../utils/formatPrice";

const ShoppingCart = ({ cart, products, clearCart }) => {
    const getProduct = (id) => products.find((p) => p.id === id);

    const total = cart.reduce((sum, item) => {
        const product = getProduct(item.productId);
        const itemPrice = product.price * (1 - (item.discount || 0));
        return sum + itemPrice * item.quantity;
    }, 0);

    return (
        <div style={{ background: "#aee2ff", padding: "20px", borderRadius: "8px" }}>
            <h2>Shopping cart</h2>
            <p>You have {cart.length} products in your cart.</p>
            <button onClick={clearCart} style={{ marginBottom: "10px", background: "red", color: "white", border: "none", padding: "8px 12px", borderRadius: "5px" }}>
             Clear Cart
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th style={{ padding: "0 10px" }}>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        const product = getProduct(item.productId);
                        return (
                            <tr key={item.productId}>
                                <td>{product.name} ({formatPrice(product.price)})</td>
                                <td style={{ textAlign: "center" }}>{item.quantity}</td>
                                <td>
                                    {item.discount > 0 ? (
                                        <>
                                            <span style={{ textDecoration: "line-through", color: "gray" }}>
                                                {formatPrice(product.price * item.quantity)}
                                            </span>{" "}
                                            <span style={{ color: "green", fontWeight: "bold" }}>
                                                {formatPrice(product.price * (1 - item.discount) * item.quantity)}
                                            </span>
                                        </>
                                    ) : (
                                        formatPrice(product.price * item.quantity)
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                Total price: {formatPrice(total)}
            </p>
        </div>
    );

};


export default ShoppingCart;