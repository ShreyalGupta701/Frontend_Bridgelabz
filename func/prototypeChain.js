// prototypeChain.js

function Person(name) {
    this.name = name;
}
Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.printSubject = function() {
    console.log(`Subject: ${this.subject}`);
};

function Professor(name, subject, publications) {
    Faculty.call(this, name, subject);
    this.publications = publications;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.printPublications = function() {
    console.log(`Publications: ${this.publications}`);
};

const prof = new Professor("Dr. Smith", "Math", 10);
prof.printName();         // Person method
prof.printSubject();      // Faculty method
prof.printPublications(); // Professor method
