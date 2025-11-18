"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

rawData.forEach((line, i) => {
  try {
    const parsed = JSON.parse(line);

    if (!parsed.user || parsed.age === undefined)
      throw new Error("Missing keys");

    parsed.age = Number(parsed.age);
    if (isNaN(parsed.age)) throw new Error("Invalid age type");

    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i, error: err.message });
    console.log(`Error at line ${i}: ${err.message}`);
  }
});

console.log("\nClean:", clean);
console.log("Errors:", errors);

console.log("Adults Only:", clean.filter((u) => u.age >= 18));
