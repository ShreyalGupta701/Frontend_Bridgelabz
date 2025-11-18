"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

class NegativeAmountError extends Error {}
class MissingFieldError extends Error {}
class NullEntryError extends Error {}

transactions.forEach((tx, i) => {
  try {
    if (tx === null) throw new NullEntryError("Null transaction");

    if (!("id" in tx) || !("amount" in tx))
      throw new MissingFieldError("Missing id or amount");

    if (tx.amount < 0) throw new NegativeAmountError("Negative amount");

    valid.push(tx);

    console.log(`Valid transaction ID ${tx.id}`);
  } catch (err) {
    invalid.push({ index: i, error: err.message });
    console.log(`Error at index ${i}: ${err.message}`);
  }
});

console.log("\nValid:", valid);
console.log("Invalid:", invalid);
