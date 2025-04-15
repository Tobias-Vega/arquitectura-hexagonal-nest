import { ProductRepository } from "src/product/domain/repositories/product.entity";

export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: string): Promise<void> {
    await this.productRepository.delete(id)
  }
}