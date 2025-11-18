"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

apiData.forEach((item, index) => {
  const num = Number(item);

  const isValid = Number.isFinite(num) && String(item).trim() !== "";

  if (isValid) {
    validNumbers.push(num);
  } else {
    invalidNumbers.push({ index, value: item });
  }

  console.log(
    `Index ${index}: Raw=${item}, String=${String(item)}, Boolean=${Boolean(
      item
    )}, Number=${num}, Valid=${isValid}`
  );
});

console.log("\nValid Numeric Values:", validNumbers);
console.log("Invalid Numeric Values:", invalidNumbers);
