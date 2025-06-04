import { Product } from "./Product";

export type ProductList = {
    products: Product[];
    onAddToCart: (product: Product) => void;
}


