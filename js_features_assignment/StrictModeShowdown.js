// Non-strict example works (but bad practice)
function demo(a, a2) {
  total = 10; // becomes global in non-strict mode
  return total;
}
console.log("Non-strict demo:", demo(5, 10));

// Strict version (correct)
"use strict";
function demoStrict(a, b) {
  let total = 10;
  return total;
}
console.log("Strict demo:", demoStrict(5, 10));
