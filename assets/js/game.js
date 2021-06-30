import {
  draw as drawSnake,
  update as updateSnake,
  getSnakeHead,
  snakeIntersection,
  snakeSpeed,
} from "./snake.js";

import { draw as drawFood, update as updateFood } from "./food.js";

import { outsideGrid } from "./grid.js";

// Game loop global variables
let lastRenderTime = 0;
let gameOver = false;
let score = parseInt(document.getElementById("score").innerText);
const gameBoard = document.getElementById("game-board");
const hiScore = localStorage.getItem("hiscore");

//Game loop
function main(currentTime) {
  if (gameOver) {
    if (confirm("Oh no the wizard caught you! Press ok to restart.")) {
      window.location = "/";
    }
    return;
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

export function incrementScore() {
  document.getElementById("score").innerText = ++score;
}

export function getHiScore() {
  let scoreEval = 0;
  if (hiScore === null) {
    localStorage.setItem("hiscore", JSON.stringify(scoreEval));
  } else {
    scoreEval = JSON.parse(hiScore);
    document.getElementById("hiscore").innerText = hiScore;
  }

  if (score > scoreEval) {
    scoreEval = score;
    localStorage.setItem("hiscore", JSON.stringify(scoreEval));
    document.getElementById("hiscore").innerText = parseInt(scoreEval);
  }
}
