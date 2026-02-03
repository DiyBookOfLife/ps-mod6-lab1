// Handles tax calculations
import Product from "../models/Product.js";
export function calculateTax(product: Product, taxRate: number): number {
  return product.getPriceWithTax(taxRate);
}
