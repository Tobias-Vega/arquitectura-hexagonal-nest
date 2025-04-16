import { Injectable } from '@nestjs/common';
import { CreateProductUseCase } from 'src/product/application/use-cases/create-product-use-case';
import { GetAllProductsUseCase } from 'src/product/application/use-cases/get-all-products.use-case';
import { GetProductsByIdUseCase } from '../../application/use-cases/get-product-by-id';
import { UpdateProductUseCase } from 'src/product/application/use-cases/update-product';
import { DeleteProductUseCase } from 'src/product/application/use-cases/delete-product.use-case';
import { Product } from 'src/product/domain/models/entities/product.entitiy';
import { CreateProductDto } from '../controllers/dtos/create-product.dto';
import { UpdateProductDto } from '../controllers/dtos/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly getProductByIdUseCase: GetProductsByIdUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
  ){}

  create(createProductDto: CreateProductDto): Promise<void> {
    return this.createProductUseCase.execute(createProductDto)
  }

  findAll(): Promise<Product[]> {
    return this.getAllProductsUseCase.execute();
  }

  findById(id: string): Promise<Product | null> {
    return this.getProductByIdUseCase.execute(id);
  }

  update(id: string, updateProductDto: UpdateProductDto): Promise<void> {
    return this.updateProductUseCase.execute(id, updateProductDto);
  }

  delete(id: string): Promise<void> {
    return this.deleteProductUseCase.execute(id);
  }
}
