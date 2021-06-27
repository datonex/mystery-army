import {
  draw as drawSnake,
  update as updateSnake,
  snakeSpeed,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { draw as drawFood, update as updateFood } from "./food.js";

import { outsideGrid } from "./grid.js";

// Game loop global variables
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

//Game loop
function main(currentTime) {
  if (gameOver) {
    return alert("Oh no the wizard caught you!");
  }
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
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
