// import class Product
import Product from "./Product.js";
// extended class of Product
export class PhysicalProduct extends Product {
    weight; // added weight property
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight; // defined weight property
    }
    // override getPriceWithTax() : final price 10% tax rate
    getPriceWithTax(taxRate) {
        return this.price + this.price * taxRate;
    }
    // getter method to return formatted weight in kg
    get formattedWeight() {
        return `Product weight: ${this.weight} KG`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map