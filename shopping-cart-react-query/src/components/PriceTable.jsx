import AddItem from "./AddItemButton";
import RemoveItem from "./RemoveItemButton";

function PriceTable({ cartItems, products, setCartItems }) {
  const cartDetails = cartItems
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;

      const discount = item.quantity > 3 ? 0.1 : 0;
      const totalPrice = product.price * item.quantity;
      const discountedTotal = totalPrice * (1 - discount);

      return {
        ...item,
        name: product.name,
        price: product.price,
        discount,
        totalPrice,
        discountedTotal,
      };
    })
    .filter(Boolean);

  const total = cartDetails.reduce(
    (sum, item) => sum + item.discountedTotal,
    0
  );

  const clearCart = () => {
    return setCartItems([]);
  };

  return (
    <div >
      <table style={{ textAlign: "left", borderSpacing: "15px" }}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody style={{ fontWeight: "bold", fontSize: "18px" }}>
          {cartDetails.map((item) => (
            <tr key={item.productId}>
              <td>
                {item.name} (${item.price.toFixed(2)})
                {item.discount > 0 && (
                  <div style={{ color: "red", fontSize: "14px" }}>
                    10% discount!
                  </div>
                )}
              </td>
              <td style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <RemoveItem
                  productId={item.productId}
                  setCartItems={setCartItems}
                />
                {item.quantity}
                <AddItem
                  productId={item.productId}
                  setCartItems={setCartItems}
                />
              </td>
              <td>
                <span
                  style={
                    item.discount > 0
                      ? { textDecoration: "line-through", color: "black" }
                      : {}
                  }
                >
                  ${item.totalPrice.toFixed(2)}
                </span>
                {item.discount > 0 && (
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    ${item.discountedTotal.toFixed(2)}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="2" style={{ fontWeight: "bold", fontSize: "20px" }}>
              Total Price: ${total.toFixed(2)}
            </td>
            <td style={{ textAlign: "right" }}>
              <button
                onClick={clearCart}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  fontSize: "15px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Clear Cart
              </button>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default PriceTable;
