import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('products')
export class ProductOrmEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  stock: number;
}