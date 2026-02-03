// Handles tax calculations
import Product from "../models/Product.js";
export function calculateTax(product, taxRate) {
    return product.getPriceWithTax(taxRate);
}
//# sourceMappingURL=taxCalculator.js.map