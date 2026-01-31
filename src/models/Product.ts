// Product class, constructor & functions export
export default class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    // steps ran when new instance of class is created
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `Product: ${this.sku} Name: ${this.name} Price: $${this.price}`;
  }

  getPriceWithTax(taxRate: number): number {
    let tax = taxRate;
    return this.price + this.price * tax;
  }
}
