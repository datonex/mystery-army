// Game module will deal with all the game logic. This include updating the visuals of the game,
// when the player looses the game and updating the scores.

import {
  draw as drawSnake,
  update as updateSnake,
  getSnakeHead,
  snakeIntersection,
  snakeSpeed,
} from "./snake.js";

import { draw as drawFood, update as updateFood } from "./food.js";

import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
let gamePaused = false;
let score = parseInt(document.getElementById("score").innerText);
const gameBoard = document.getElementById("game-board");
const pauseMenu = document.getElementById("pause-menu");
const hiScore = localStorage.getItem("hiscore");

/**
 * This function will define all the tasks that we need to do to generate the game board and will run
 * with each animation frame. The number of times the frame is rendered is controlled by snake speed
 * in the snake module.
 * @module snake
 * @module food
 * @module input
 * @module grid
 *
 *
 * @param {number} currentTime The time since the page was loaded in ms
 * @return {null}
 */
function main(currentTime) {
  if (gameOver) {
    if (confirm("Oh no the wizard caught you! Press ok to restart.")) {
      window.location = "/game.html"; // refresh the browser and start the game
    }
    return;
  }

  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // ms to s
  if (secondsSinceLastRender < 1 / snakeSpeed) return; //

  lastRenderTime = currentTime;

  if (gamePaused) {
    show(pauseMenu);
    return;
  } else {
    hide(pauseMenu);
  }
  update();
  draw();
}
window.requestAnimationFrame(main);

/**
 * This function will call all the functions that will update the position of the snake, the food and
 * check if the condition for the game to reset are met.
 *
 * @see checkDeath
 * @requires module:snake
 * @requires module:food
 */
function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

/**
 * This function will call all the functions that will draw the snake and food onto the game board
 * (the screen)
 *
 * @requires module:snake
 * @requires module:food
 */
function draw() {
  gameBoard.innerHTML = ""; // Remove trailing snake segments
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

/**
 * This function will test if the head of the snake hits the boarder or the head of the snake hits its
 * own body
 *
 * @requires module:snake
 * @function
 * @requires module:grid
 */
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

/**
 * This function will check if the game loop has been turn on or off, effectively pausing the game
 */
export function pauseGame() {
  gamePaused = !gamePaused;
  if (!gamePaused) main(currentTime);
}

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

/**
 * This function will increase the score. It is called in @see growSnake in @module snake
 *
 * @requires module:snake
 */
export function incrementScore() {
  document.getElementById("score").innerText = ++score;
}

/** This function will obtain the high score from the user's local storage. If the high score is less
 * than the current score, the new high score is stored in the local storage. Function
 * is called in @see growSnake in @module snake
 *
 * @requires module:snake
 */
// prettier-ignore
export function getHiScore() {
  let scoreEval = 0;                                            // Default high score
  if (hiScore === null) {
    // Parse "scoreEval" into a JSON string and save to local storage
    localStorage.setItem("hiscore", JSON.stringify(scoreEval)); 
  } else {
    scoreEval = JSON.parse(hiScore);
    // Parse hiScore into a JSON array if high score is not zero.                            
    document.getElementById("hiscore").innerText = hiScore;
  }

  // If statement will compare the stored high score with the current high score. If the the current 
  // score is bigger than the one in storage, the new score will update the one in local storage.
  if (score > scoreEval) { 
    scoreEval = score;
    localStorage.setItem("hiscore", JSON.stringify(scoreEval));
    document.getElementById("hiscore").innerText = parseInt(scoreEval);
  }
}
