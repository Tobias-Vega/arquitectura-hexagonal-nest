import { ProductRepository } from "src/product/domain/repositories/product.entity";

export class UpdateProductUseCase {
  constructor(private readonly proudctRepository: ProductRepository){}

  async execute(id: string, data: {
    name: string;
    description: string;
    price: number;
    stock: number;
  }): Promise<void> {
    const product = await this.proudctRepository.findById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    product.updateDetails(data.name, data.description, data.price);
    product.updateStock(data.stock);

    await this.proudctRepository.update(product)
  }
}