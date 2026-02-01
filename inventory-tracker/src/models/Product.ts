 export class Product{
    sku : string;
    name: string;
    price : number;
    constructor(sku: string, name: string, price: number){
        this.sku=sku;
        this.name=name;
        this.price=price;
    }
    displayDetails():string{
        return `ProductName: sku: ${this.sku} \n name: ${this.name} \nprice:${this.price}`;
    }
    getPriceWithTax():number{
        return this.price * 1.05;
    }
}