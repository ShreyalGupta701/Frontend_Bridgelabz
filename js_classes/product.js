// product.js

// Product Class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount percentage
    applyDiscount(percent) {
        this.price = this.price - (this.price * (percent / 100));
    }

    // Display product details
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Create products
const products = [
    new Product(1, "Shoes", 1200, "Fashion"),
    new Product(2, "Bag", 800, "Accessories"),
    new Product(3, "Mobile", 15000, "Electronics")
];

// Apply discount
products[0].applyDiscount(10);

// Filter price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);

// Display results
console.log("Products > ₹1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));
