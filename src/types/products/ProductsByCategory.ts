import { Product } from "./Product";

export type ProductsByCategory = {
  categoryId: string;
  categoryName: string;
  products: Product[];
};
