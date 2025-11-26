// classInheritance.js

class PersonClass {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const studentClass = new StudentClass("Alice", "Computer Science");
studentClass.printName();   // Name: Alice
studentClass.printBranch(); // Branch: Computer Science
