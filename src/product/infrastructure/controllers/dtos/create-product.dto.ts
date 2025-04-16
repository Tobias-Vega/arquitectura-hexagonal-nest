import { IsString, IsNotEmpty, IsPositive, IsInt, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsString()
  description?: string;

  @IsPositive()
  price?: number;

  @IsPositive()
  @IsInt()
  stock: number;
}
