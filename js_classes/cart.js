// cart.js

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
    }

    applyCoupon(code) {
        const regex = /^(SAVE|DISC)(\d{1,2})$/;

        if (regex.test(code)) {
            const discount = parseInt(code.match(/\d+/)[0]);
            const total = this.getTotal();
            return total - (total * (discount / 100));
        } else {
            console.log("Invalid Coupon");
            return this.getTotal();
        }
    }
}

// Example:
const cart = new Cart();
cart.addItem("Shoes", 1500, 1);
cart.addItem("T-shirt", 500, 2);

console.log("Total:", cart.getTotal());
console.log("After Coupon:", cart.applyCoupon("SAVE20"));
