import { CartItem } from "./cartItem";
import { Product } from "./Product";

export type ShoppingCartProps = {
    items: CartItem[];
    onAddToCart: (product: Product) => void;
    onRemoveFromCart: (productId: number) => void;
    onUpdateQuantity: (productId: number, quantity: number) => void;
}

