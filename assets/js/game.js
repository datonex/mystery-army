/* 
Game module will deal with all the game logic. This include updating the visuals of the game,
when the player looses the game and updating the scores.
*/

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
let showSettings = false;
let gameScreen = false;
let score = document.getElementById("score").innerText;
export const gameBoard = document.getElementById("game-board");
export const pauseMenu = document.getElementById("pause-menu");
export const gameOverMenu = document.getElementById("game-over-menu");
export const settingsMenu = document.getElementById("settings-menu");
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
    show(gameOverMenu);
    blur(gameBoard);
    return;
  } else {
    hide(gameOverMenu);
  }
  //   if (confirm("Oh no the wizard caught you! Press ok to restart.")) {
  //     window.location = "/game.html"; // refresh the browser and start the game
  //   }
  //   return;
  // }

  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // ms to s
  if (secondsSinceLastRender < 1 / snakeSpeed) return; //

  lastRenderTime = currentTime;

  /* 
  Pausing a simple canvas game 
  source https://stackoverflow.com/questions/43814422/how-to-pause-simple-canvas-game-made-with-js-and-html5/43814511
  */
  if (gamePaused) {
    show(pauseMenu);
    blur(gameBoard);
    return;
  } else {
    hide(pauseMenu);
  }

  if (showSettings) {
    show(settingsMenu);
    blur(gameBoard);
  } else {
    hide(settingsMenu);
    unblur(gameBoard);
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
 * This function will test if the head of the snake hits the boarder or the head of the snake hits
 * its own body
 *
 * @requires module:snake
 * @function
 * @requires module:grid
 */
export function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
  return gameOver;
}

/**
 * This function will check if the start page page is on or off. If it's on the game board will be
 * shown.
 */
export function toggleGameStart() {
  gameScreen = !gameScreen;
  if (gameScreen) {
    startGame();
  }
}

/**
 * This function will check if the game loop has been turn on or off, effectively pausing the game
 */
export function togglePause() {
  gamePaused = !gamePaused;
  if (gamePaused) main(lastRenderTime);
}

/**
 * This function will check if the setting page is displayed on the screen. If it is everything on
 * the page will be hidden except for the settings page
 */
export function toggleSettings() {
  showSettings = !showSettings;
  if (showSettings) {
    show(settingsMenu);
    hide(gameOverMenu);
    blur(pauseMenu);
    blur(gameBoard);
  }
}

/**
 * This function will increase the score. It is called in @see growSnake in @module snake
 *
 * @requires module:snake
 */
export function incrementScore() {
  document.getElementById("score").innerText = ++score;
}

/**
 * This function will obtain the high score from the user's local storage. If the high score is less
 * than the current score, the new high score is stored in the local storage. Function
 * is called in @see growSnake in @module snake
 *
 * @requires module:snake
 */
// prettier-ignore
export function getHiScore() {
  // Default high score
  let scoreEval = 0;  

  if (hiScore) {
    scoreEval = JSON.parse(hiScore);
    // Parse hiScore into a JSON array if high score is not zero.                            
    document.getElementById("hiscore").innerText = hiScore;
  } else {
    // Parse "scoreEval" into a JSON string and save to local storage
    localStorage.setItem("hiscore", JSON.stringify(scoreEval)); 
  }

  /* 
    If statement will compare the stored high score with the current high score. If the the current 
    score is bigger than the one in storage, the new score will update the one in local storage.
  */
  if (score > scoreEval) { 
    scoreEval = score;
    localStorage.setItem("hiscore", JSON.stringify(scoreEval));
    document.getElementById("hiscore").innerText = parseInt(scoreEval);
  }
}

/**
 * This function will hide any document DOM object from the user
 *
 * @param {HTMElement} element HTML DOM object
 */
export function hide(element) {
  element.style.display = "none";
}

/**
 * This function will show any document DOM object to the user
 * @param {HTMLElement} element HTML DOM object
 */
export function show(element) {
  element.style.display = "block";
}

/**
 * This function will blur any DOM object
 * @param {HTMLElement} element HTML DOM object
 */
export function blur(element) {
  element.style.filter = "blur(1rem)";
}

/**
 * This function will remove the blur style
 * @param {HTMLElement} element HTML DOM object
 */
export function unblur(element) {
  element.style.filter = "blur(0)";
}

/**
 * This function will display the game board to the user
 */
export function startGame() {
  const startPage = document.getElementById("start-menu");
  const gamePage = document.getElementById("game-content");
  hide(startPage);
  show(gamePage);
}
