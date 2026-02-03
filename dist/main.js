import Product from "./models/Product.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
const products = [
    new PhysicalProduct("TV001", "Sony HD TV", 700, 75),
    new DigitalProduct("BK001", "The Coldest Winter Ever", 20, 3),
];
products.forEach((product) => {
    console.log(product.displayDetails());
    console.log("Final price: ", calculateTax(product, 0.1));
    console.log("----------");
});
//# sourceMappingURL=main.js.map