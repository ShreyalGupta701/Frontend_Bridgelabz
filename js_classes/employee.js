// employee.js

class Employee {
    constructor(id, name, dept, salary) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 40000),
    new Employee(2, "Riya", "HR", 30000),
    new Employee(3, "Sam", "Sales", 35000),
    new Employee(4, "Neha", "IT", 45000),
    new Employee(5, "Rahul", "Admin", 28000)
];

employees.forEach(e => console.log(e.getAnnualSalary()));

const totalPayout = employees.reduce((acc, emp) => acc + emp.getAnnualSalary(), 0);
console.log("Total Company Annual Payout:", totalPayout);
