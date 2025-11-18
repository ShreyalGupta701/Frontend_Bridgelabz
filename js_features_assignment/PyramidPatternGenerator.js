"use strict";

function generate(levels = 5) {
  for (let i = 1; i <= levels; i++) {
    let row = "";
    for (let j = 0; j < i; j++) row += "* ";
    console.log(row);
  }
}

generate(4);

// var version
console.log("\nWith var:");
function generateVar(levels) {
  for (var i = 1; i <= levels; i++) {
    var row = "";
    for (var j = 0; j < i; j++) row += "* ";
    console.log(row);
  }
}
generateVar(4);
