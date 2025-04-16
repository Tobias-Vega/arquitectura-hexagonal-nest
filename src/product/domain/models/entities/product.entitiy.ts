export class Product {

  constructor(
    public readonly id: string,
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
  ){}

  updateDetails(name?: string, description?:  string, price?: number, stock?: number) {
    if (name) this.name = name;
    if (description) this.description = description;
    if (price !== undefined) this.price = price;
    if (stock!== undefined) this.stock = stock;
  }

}