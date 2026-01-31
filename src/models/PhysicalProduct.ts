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
  getPriceWithTax(taxRate: number): number {
    return this.price + this.price * taxRate;
  }

  // getter method to return formatted weight in kg
  get formattedWeight(): string {
    return `Product weight: ${this.weight} KG`;
  }
}
