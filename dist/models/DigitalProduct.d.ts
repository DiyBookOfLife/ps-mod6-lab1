import Product from "./Product.js";
export declare class DigitalProduct extends Product {
    fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(taxRate: number): number;
    get formattedFileSize(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map