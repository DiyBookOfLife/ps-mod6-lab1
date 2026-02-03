import Product from "./Product.js";
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax(taxRate) {
        return this.price;
    }
    get formattedFileSize() {
        return `File size: ${this.fileSize} MB`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map