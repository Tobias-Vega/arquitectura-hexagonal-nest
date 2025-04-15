import { Product } from "src/product/domain/models/entities/product.entitiy";
import { ProductRepository } from "src/product/domain/repositories/product.entity";
import { v4 as uuidv4 } from 'uuid';

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository){}

  async execute(data: {
    name: string;
    description: string;
    price: number;
    stock: number;
  }): Promise<void> {
    const product = new Product(
      uuidv4(),
      data.name,
      data.description,
      data.price,
      data.stock,
    );

    await this.productRepository.create(product)
  }
  
}