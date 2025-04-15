export class Product {

  constructor(
    public readonly id: string,
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
  ){}

  updateStock(quantity: number) {
    if (quantity < 0) {
      throw new Error('Stock quantity cannot be negative')
    }

    this.stock = quantity;
  }

  updateDetails(name: string, description:  string, price: number) {
    this.name = name;
    this.description = description;
    this.price = price
  }

}