// Import the base Product class from the Product module
import { Product } from "./Product.ts";

// Define a new class DigitalProduct that extends the base Product class
export class DigitalProduct extends Product {
  private _fileSize: number;

  // Constructor to initialize a DigitalProduct object
  constructor(sku: string, name: string, price: number, fileSize: number) {
    // Call the parent Product constructor to initialize sku, name, and price
    super(sku, name, price);
    this._fileSize = fileSize;
  }
  // Method to get the price with tax
  getPriceWithTax(): number {
    return this.price;
  }
  // Getter to return the formatted file size as a string
  get formattedFilesize(): string {
    return `Filesize: ${this._fileSize} MB`;
  }
}
