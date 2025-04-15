import { Product } from "src/product/domain/models/entities/product.entitiy";
import { ProductRepository } from "src/product/domain/repositories/product.entity";

export class GetProductsByIdUseCase {
  constructor(private readonly productRepository: ProductRepository){}

  async execute(id: string): Promise<Product | null> {
    return this.productRepository.findById(id)
  }
}