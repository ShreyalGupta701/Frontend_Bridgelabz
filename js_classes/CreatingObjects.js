// Create objects using objects in javascript

/* Objects are key-value pairs used to store related data and functionality. They are created using curly braces {}. */

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Developer"
};
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue"
};
let book = {
    title: "JavaScript Basics",
    author: "Jane Smith",
    pages: 250,
    publisher: "Tech Books"
};
let laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    year: 2021,
    specs: {
        processor: "M1",
        ram: "16GB",
        storage: "512GB SSD"
    }
};
console.log(person.firstName);
console.log(car.model);
console.log(book.title);
console.log(laptop.specs.processor);


//1. Using Object Constructor
/* Objects can also be created using the Object constructor. */

function createPerson(firstName, lastName, age, occupation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
    this.greet = function() {
        return "Hello, my name is " + this.firstName + " " + this.lastName;
    }
}
let person1 = new createPerson("Alice", "Johnson", 28, "Designer");
console.log(person1.firstName);
let person2 = new createPerson("Bob", "Smith", 35, "Manager");
console.log(person2.occupation);
let person3 = new createPerson("Charlie", "Brown", 22, "Intern");
console.log(person3.age);
let person4 = new createPerson("Diana", "Prince", 30, "Analyst");
console.log(person4.lastName);
console.log(person1.greet());

//2. Using constructor to create 3 objects of cars

function createCar(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.getDetails = function() {
        return this.year + " " + this.color + " " + this.make + " " + this.model;
    }
}
let car1 = new createCar("Honda", "Civic", 2019, "Red");
console.log(car1.getDetails());
let car2 = new createCar("Ford", "Mustang", 2021, "Black");
console.log(car2.getDetails());
let car3 = new createCar("Chevrolet", "Malibu", 2018, "White");
console.log(car3.getDetails());

//3. Modern way to create an object 

class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    greet() {
        return `Welcome, ${this.username}!`;
    }
    display(){
        return `Username: ${this.username}, Email: ${this.email}`;
    }
}

const user1 = new user("John", "john@example.com", "password123");
const user2 = new user("Jane", "jane@example.com", "password456");
console.log(user1.display());
console.log(user2.display());
console.log(user1.greet());

//4. Creating admin class inheriting user class

class admin extends user{
    constructor(username, email, password, role){
        super(username, email, password);
        this.role = role;
    }
    displayRole(){
        return `Admin Role: ${this.role}`;
    }
}
const admin1 = new admin("AdminUser", "admin@example.com", "adminpass", "SuperAdmin");
console.log(admin1.display());
console.log(admin1.displayRole());
console.log(admin1.greet());


// 5. Using object.create great for prototypal inheritance
/* What is Prototypal Inheritance?
Prototypal Inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. This is achieved through the prototype chain, allowing for shared behavior and properties among objects without the need for classes. */

const parent = {
    greet() {
        console.log("Hello from Parent");
    }
};

const child = Object.create(parent);
child.say = function() {
    console.log("Hello from Child");
};

const subChild = Object.create(child);
subChild.say();
child.name = "ChildObject";
child.greet();

//6. Using json to create object
/* JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used to transmit data between a server and a web application as text. Mostly use for API communication */

const jsonString = '{"name": "JSON Object", "type": "Example", "version": 1.0}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.type);
console.log(jsonObject.version);
const backtoJSON = JSON.stringify(jsonObject);
console.log(backtoJSON);

// What is regexp?
/* Regular expressions (RegExp) are patterns used to match character combinations in strings. In JavaScript, they are implemented using the RegExp object or by using literal syntax. Regular expressions are commonly used for searching, replacing, and validating strings. */

const regex = /hello/i; // 'i' for case-insensitive
const testString1 = "Hello World";
const testString2 = "Goodbye World";
console.log(regex.test(testString1)); // true
console.log(regex.test(testString2)); // false

// Object Cloning
const original = { a: 1, b: 2, c: { d: 3 } };
const shallowClone = Object.assign({}, original);
const deepClone = JSON.parse(JSON.stringify(original));

shallowClone.b = 20;
deepClone.c.d = 30;
console.log(original.b); // 2
console.log(original.c.d); // 3
