import { IProductService } from "./IProductService";
import { Product } from "../../types/products/Product";
import products from "../../stubs/products.json";
import { ProductsByCategory } from "../../types/products/ProductsByCategory";
import { injectable } from "inversify";


@injectable()
export class StubProductService implements IProductService {
  async getProductsByCategory(categoryId: string): Promise<Product[] | null> {
    const productsByCategory: ProductsByCategory | undefined = products.find(
      item => item.categoryId === categoryId
    );

    return productsByCategory ? productsByCategory.products : null;
  }
  async addProductToCart(product: Product): Promise<Product[] | null> {
    return null;
  }
}
