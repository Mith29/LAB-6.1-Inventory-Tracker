// Import the base Product class from the Product module
import { Product } from "./Product.ts";

// Define an interface for products that can have discounts applied
export interface DiscountableProduct {
  // Method for applying a discount based on a discount rate
  applyDiscount(discountRate: number): number;
}
// Define a PhysicalProduct class that extends Product and implements DiscountableProduct
export class PhysicalProduct extends Product implements DiscountableProduct {
  private _weight: number; // in kg
  private _quantity: number;
  // Constructor to initialize a PhysicalProduct object
  constructor(
    sku: string,
    name: string,
    price: number,
    weight: number,
    quantity: number,
  ) {
    super(sku, name, price);
    this._weight = weight;
    this._quantity = quantity;
  }
  // Getter to return the formatted weight as a string
  get formattedWeight(): string {
    return `${this._weight} kg`;
  }

  // Getter to return the quantity of this product
  get physicalProductQuantity(): number {
    return this._quantity;
  }
  // Method to calculate the price including tax
  // Applies bulk discount first, then adds 10% tax
  getPriceWithTax(): number {
    return this.applyBulkDiscount() * 1.1; // 10% tax
  }
  // Implements the applyDiscount method from DiscountableProduct interface
  // Returns the price after applying a given discount rate
  applyDiscount(discountRate: number): number {
    return this.price * (1 - discountRate);
  }
  //Applies a bulk discount if quantity or weight meets certain criteria

  applyBulkDiscount(): number {
    // Bulk discount if quantity >= 10 OR weight >= 5kg
    if (this._quantity >= 10 || this._weight >= 5) {
      return this.applyDiscount(0.15); // 15% discount
    }
    return this.price;
  }
}
