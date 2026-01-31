// import class Product
import Product from "./Product.js";

// extended class of Product
class PhysicalProduct extends Product {
  weight: number; // added weight property

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight; // defined weight property
  }

  // override getPriceWithTax() to calc final price 10% tax rate
  getPriceWithTax(): number {
      let tax = .10
      return this.price + this.price * tax
  }
}
