import products from "./products.json";
import { Product } from "../types/Product";

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
export default fetchProducts;
