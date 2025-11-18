"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25,
  num2 = 0;

class InvalidOperationError extends Error {}
class MathError extends Error {}

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new MathError("Cannot divide by zero");
      return a / b;
    case "power":
      return a ** b;
    case "root":
      if (a < 0) throw new MathError("Cannot root negative number");
      return a ** (1 / b);
    default:
      throw new InvalidOperationError("Unknown operation");
  }
}

operations.forEach((op) => {
  try {
    console.log(op, "=>", calculate(op, num1, num2));
  } catch (err) {
    console.log(op, "=> ERROR:", err.message);
  }
});
