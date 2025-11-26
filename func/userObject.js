// userObject.js

const user = {
    name: "Alice",
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); // undefined because arrow functions do not have their own 'this'

// Fix using normal function
const userFixed = {
    name: "Alice",
    showName() {
        console.log(this.name);
    }
};

userFixed.showName(); // Alice
