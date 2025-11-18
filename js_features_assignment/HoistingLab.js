"use strict";

// Fixed version
var score = 50;
function announce() {
  console.log("Game started");
}
announce();

let status = "ready";
function startGame() {
  console.log(status);
}
startGame();

// Arrow version
const announceA = () => console.log("Game started (arrow)");
const startGameA = () => console.log(status);

announceA();
startGameA();
