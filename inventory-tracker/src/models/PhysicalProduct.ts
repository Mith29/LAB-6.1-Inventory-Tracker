import { Product } from "./Product.ts";

export interface DiscountableProduct {
  applyDiscount(discountRate: number): number;
}

export class PhysicalProduct extends Product implements DiscountableProduct {
   private _weight: number; // in kg
    private _quantity: number;
  constructor(
    sku: string,
    name: string,
    price: number,
    weight: number,
    quantity: number
   
  ) {
    super(sku, name, price);
    this._weight = weight;
    this._quantity = quantity;
  }

  get formattedWeight(): string {
    return `${this._weight} kg`;
  }
  get physicalProductQuantity(): number {
    return this._quantity;
  }
  getPriceWithTax(): number {
    return this.applyBulkDiscount() * 1.10; // 10% tax
  }

  applyDiscount(discountRate: number): number {
    return this.price * (1 - discountRate);
  }

  applyBulkDiscount(): number {
    // Bulk discount if quantity >= 10 OR weight >= 5kg
    if (this._quantity >= 10 || this._weight >= 5) {
      return this.applyDiscount(0.15); // 15% discount
    }
    return this.price;
  }
}