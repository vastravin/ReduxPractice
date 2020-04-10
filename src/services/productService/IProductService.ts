import { Product } from "../../types/products/Product";

export interface IProductService {
  getProductsByCategory: (categoryId: string) => Promise<Product[] | null>;

  addProductToCart: (product: Product) => Promise<Product[] | null>;
}
