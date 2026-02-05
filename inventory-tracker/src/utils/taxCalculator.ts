import { Product } from "../models/Product.ts";

// Function to calculate the price of a product including tax
export function calculateTax(product: Product): number {
  // Calls the product's getPriceWithTax() method to get the price including tax
  return product.getPriceWithTax();
}
