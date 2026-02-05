
import { Product } from "./models/Product.ts";
import { PhysicalProduct } from "./models/PhysicalProduct.ts";
import { calculateTax } from "./utils/taxCalculator.ts";
import { DigitalProduct } from "./models/DigitalProduct.ts";
import { sortByName , sortByPrice } from "./utils/sortProduct.ts";

// Create an array of Product instances, including both PhysicalProduct and DigitalProduct
const products: Product[] = [
  new PhysicalProduct("P001", "Laptop", 1200, 2.5, 10),
  new DigitalProduct("D001", "E-book", 30, 5),
    new PhysicalProduct("P002", "Tablet", 700, 1.5, 12),
  new DigitalProduct("D002", "MS-office", 30, 10),
    new PhysicalProduct("P003", "Tv", 500, 25, 10),
  new DigitalProduct("D003", "Audio-book", 20, 7.5)
];
// Loop through each product and display details
for (const product of products) {
  console.log(product.displayDetails());
  // If it's a physical product, show weight
  if (product instanceof PhysicalProduct) {
    console.log(`Weight: ${product.formattedWeight}`);
    console.log(`Quantity: ${product.physicalProductQuantity}`);
    console.log(`Discounted Price: $${product.applyBulkDiscount()}`);
  }
  // If it's a digital product, show file size
  if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.formattedFilesize}`);
  }
  // Show the price including tax for any product
  console.log(`Price with Tax: $${calculateTax(product).toFixed(2)}`);
  console.log('-------------------------');
  
}

//Sorting
console.log("\n SORTED BY PRICE");
sortByPrice(products).forEach(p =>
  console.log(`${p.name}: $${p.price}`)
);

console.log("\n SORTED BY NAME ");
sortByName(products).forEach(p =>
  console.log(p.name)
);