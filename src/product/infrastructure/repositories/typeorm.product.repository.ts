import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductRepository } from "src/product/domain/repositories/product.entity";
import { ProductOrmEntity } from "../typeorm/product.orm.entity";
import { Repository } from "typeorm";
import { Product } from "src/product/domain/models/entities/product.entitiy";

@Injectable()
export class TypeOrmProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(ProductOrmEntity)
    private readonly ormRepo: Repository<ProductOrmEntity>,
  ){}

  async findAll(): Promise<Product[]> {
    const entities = await this.ormRepo.find();
    return entities.map(this.toDomain)
  }

  async findById(id: string): Promise<Product | null> {
    const entity = await this.ormRepo.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async create(product: Product): Promise<void> {
    const entity = this.toPersistence(product);
    await this.ormRepo.insert(entity);
  }

  async update(product: Product): Promise<void> {
    const entity = this.toPersistence(product);
    await this.ormRepo.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }

  private toDomain(entity: ProductOrmEntity): Product {
    return new Product (
      entity.id,
      entity.name,
      entity.description,
      entity.price,
      entity.stock,
    )
  }

  private toPersistence(product: Product): ProductOrmEntity {
    const entity = new ProductOrmEntity();
    entity.id = product.id;
    entity.name = product.name;
    entity.description = product.description;
    entity.price = product.price;
    entity.stock = product.stock;
    return entity;
  }
}
