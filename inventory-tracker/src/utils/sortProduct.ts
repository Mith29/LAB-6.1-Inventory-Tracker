import { Product } from "../models/Product.ts";


// Function to sort an array of products by price in ascending order
export function sortByPrice(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.price - b.price);
}
// Function to sort an array of products by name alphabetically
export function sortByName(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}


// export function sortByPrice(products: Product[]): Product[] {
//   const sorted = [...products];
//   for (let i = 0; i < sorted.length - 1; i++) {
//     for (let j = i + 1; j < sorted.length; j++) {
//       const a = sorted[i];
//       const b = sorted[j];
//       if (!a || !b) continue; // type guard
//       if (a.price > b.price) {
//         sorted[i] = b;
//         sorted[j] = a;
//       }
//     }
//   }
//   return sorted;
// }