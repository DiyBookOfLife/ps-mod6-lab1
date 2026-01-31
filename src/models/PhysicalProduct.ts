// import class Product
import Product from "./Product.js";

// extended class of Product
class PhysicalProduct extends Product {
  weight: number; // added weight property

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight; // defined weight property
  }

  // override getPriceWithTax() : final price 10% tax rate
  getPriceWithTax(): number {
      return this.price * 1.1
  }

  // getter method to return formatted weight in kg
  get formattedWeight(): string {
    return `Product weight: ${this.weight} kg`;
  }
}
