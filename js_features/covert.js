// Q1: Type Conversion

console.log(Number("50"));      // 50
console.log(Boolean("50"));     // true
console.log(String("50"));      // "50"

console.log(Number("hello"));   // NaN
console.log(Boolean("hello"));  // true (non-empty string is true)
console.log(String("hello"));   // "hello"

console.log(Number(false));     // 0
console.log(Boolean(false));    // false
console.log(String(false));     // "false"

console.log(Number(null));      // 0
console.log(Boolean(null));     // false
console.log(String(null));      // "null"

console.log(Number("100px"));   // NaN
console.log(Boolean("100px"));  // true
console.log(String("100px"));   // "100px"
