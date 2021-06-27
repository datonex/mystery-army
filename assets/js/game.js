import {
  draw as drawSnake,
  update as updateSnake,
  snakeSpeed,
} from "./snake.js";

import { draw as drawFood, update as updateFood } from "./food.js";

// Game loop global variables
let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

//Game loop
function main(currentTime) {
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // ms to s
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
