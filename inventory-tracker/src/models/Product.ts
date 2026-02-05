// Define a base Product class to represent general products
export class Product {
  sku: string;
  name: string;
  price: number;
  // Constructor to initialize a Product object with sku, name, and price
  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
  // Method to display product details as a formatted string
  displayDetails(): string {
    return `ProductName: sku: ${this.sku} \n name: ${this.name} \nprice:${this.price}`;
  }
  // Method to calculate the price including a 5% tax
  getPriceWithTax(): number {
    return this.price * 1.05;
  }
}
