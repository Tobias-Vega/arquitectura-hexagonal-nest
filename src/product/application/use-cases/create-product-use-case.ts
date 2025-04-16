import { Product } from "src/product/domain/models/entities/product.entitiy";
import { ProductRepository } from "src/product/domain/repositories/product.entity";
import { v4 as uuidv4 } from 'uuid';
import { CreateProductInput } from "./interfaces/create-product.interface";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository){}

  async execute(input: CreateProductInput): Promise<void> {
    const product = new Product(
      uuidv4(),
      input.name,
      input.description ?? '',
      input.price ?? 0,
      input.stock,
    );

    await this.productRepository.create(product)
  }
}