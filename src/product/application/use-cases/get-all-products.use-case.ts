import { Product } from "src/product/domain/models/entities/product.entitiy";
import { ProductRepository } from "src/product/domain/repositories/product.entity";

export class GetAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}