import { ProductRepository } from "src/product/domain/repositories/product.entity";
import { UpdateProductInput } from "./interfaces/update-product.interface";
import { BadRequestException, NotFoundException } from "@nestjs/common";

export class UpdateProductUseCase {
  constructor(private readonly proudctRepository: ProductRepository){}

  async execute(id: string, input: UpdateProductInput): Promise<void> {
    const product = await this.proudctRepository.findById(id);

    if (!input) {
      throw new BadRequestException('No fields provide to update')
    }

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    product.updateDetails(input.name, input.description, input.price, input.stock);

    await this.proudctRepository.update(product)
  }
}