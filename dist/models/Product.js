// Product class, constructor & functions export
export default class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        // steps ran when new instance of class is created
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `Product: ${this.sku} Name: ${this.name} Price: $${this.price}`;
    }
    getPriceWithTax(taxRate) {
        let tax = taxRate;
        return this.price + this.price * tax;
    }
}
//# sourceMappingURL=Product.js.map