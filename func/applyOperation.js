// applyOperation.js

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const nums = [1, 2, 3, 4];

const doubled = applyOperation(nums, n => n * 2);
const squared = applyOperation(nums, n => n ** 2);

console.log("Doubled:", doubled); // [2,4,6,8]
console.log("Squared:", squared); // [1,4,9,16]
