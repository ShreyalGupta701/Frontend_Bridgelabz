// personStudent.js

function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); // inherit properties
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype); // inherit methods
Student.prototype.constructor = Student;

Student.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Alice", "Computer Science");
student.printName();   // Name: Alice
student.printBranch(); // Branch: Computer Science
