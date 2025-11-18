"use strict";

function outer() {
  console.log("Outer before:", count); // undefined (hoisted)
  var count = 5;

  function inner() {
    console.log("Inner before:", count); // undefined (inner hoists its own)
    var count = 10;
    console.log("Inner after:", count);
  }

  inner();
  console.log("Outer after:", count);
}

outer();

// Arrow version
function outerArrow() {
  var x = 5;
  const inner = () => console.log("Inner arrow sees outer:", x);
  inner();
}
outerArrow();
