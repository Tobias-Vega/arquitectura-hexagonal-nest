import { Module } from '@nestjs/common';
import { ProductService } from './infrastructure/services/product.service';
import { ProductController } from './infrastructure/controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrmEntity } from './infrastructure/database/typeorm/product.orm.entity';
import { TypeOrmProductRepository } from './infrastructure/repositories/typeorm.product.repository';
import { CreateProductUseCase } from './application/use-cases/create-product-use-case';
import { DeleteProductUseCase } from './application/use-cases/delete-product.use-case';
import { GetAllProductsUseCase } from './application/use-cases/get-all-products.use-case';
import { GetProductsByIdUseCase } from './application/use-cases/get-product-by-id';
import { UpdateProductUseCase } from './application/use-cases/update-product';

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrmEntity])],
  controllers: [ProductController],
  providers: [
    ProductService,
    TypeOrmProductRepository,

    {
      provide: CreateProductUseCase,
      useFactory: (repo: TypeOrmProductRepository) => new CreateProductUseCase(repo),
      inject: [TypeOrmProductRepository]
    },
    {
      provide: DeleteProductUseCase,
      useFactory: (repo: TypeOrmProductRepository) =>
        new DeleteProductUseCase(repo),
      inject: [TypeOrmProductRepository],
    },
    {
      provide: GetAllProductsUseCase,
      useFactory: (repo: TypeOrmProductRepository) =>
        new GetAllProductsUseCase(repo),
      inject: [TypeOrmProductRepository],
    },
    {
      provide: GetProductsByIdUseCase,
      useFactory: (repo: TypeOrmProductRepository) =>
        new GetProductsByIdUseCase(repo),
      inject: [TypeOrmProductRepository],
    },
    {
      provide: UpdateProductUseCase,
      useFactory: (repo: TypeOrmProductRepository) =>
        new UpdateProductUseCase(repo),
      inject: [TypeOrmProductRepository],
    },
  ],
})
export class ProductModule {}
