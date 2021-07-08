// Snake module will define all the variables and functions related to the snake itself, including
// its growth, and its speed.

import { getInputDirection } from "./input.js";
import { incrementScore, getHiScore } from "./game.js";

// snake global variables
export let snakeSpeed = 2;
const snakeBody = [{ x: 2, y: 2 }];

let newSegments = 0;

/**
 * This function will update the position of the snake o the head depending the input by the user.
 * The function to add more snake segments is also called here @see addSegments
 *
 * @requires module:game
 * @requires module:input
 * @alias updateSnake
 */
// prettier-ignore
export function update() {
  addSegments();                                    // Add snake segments

  const inputDirection = getInputDirection();       // Get the current snake direction
  for (let i = snakeBody.length - 2; i >= 0; i--) { // Select second to last segment of snake
    snakeBody[i + 1] = { ...snakeBody[i] };         // select last element but make it into a 
                                                    // new object to move the snake forward
  }

  // Move snake head in direction of input
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

/**
 * This function draws the snake onto the game-board
 *
 * @param {string} gameBoard - Game board ID (already defined @see module:game)
 * @requires module:game
 * @alias drawSnake
 */
// prettier-ignore
export function draw(gameBoard) {
  snakeBody.forEach((segment,index) => {
    const snakeElement = document.createElement("div"); // Each snake segment is contained in new div
    snakeElement.style.gridRowStart = segment.y;        // Draw segment in y direction on grid
    snakeElement.style.gridColumnStart = segment.x;     // Draw segment in x direction on grid
    // If snake head is not defined, draw snake head otherwise draw body
    index === 0 ? drawSnakeHead(snakeElement) : snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);                // Append div onto the game board   
  });
}

/**
 * This function will determine which direction the head of the snake will face. It is dependent on
 * the direction it is going.
 * @param {HTMLDivElement} snakeElement The snake div Element
 */
export function drawSnakeHead(snakeElement) {
  const direction = getInputDirection();

  if (direction.y === -1) {
    snakeElement.classList.add("head-up");
  } else if (direction.y === 1) {
    snakeElement.classList.add("head-down");
  } else if (direction.x === -1) {
    snakeElement.classList.add("head-left");
  } else if (direction.x === 1) {
    snakeElement.classList.add("head-right");
  } else {
    snakeElement.classList.add("head-up");
  }
}

/**
 * This function will grow the snake and call functions that depend on its growth. Such as increase the
 * speed when it eats @see increaseSnakeSpeed , increase the score when it eats and increase hiscore
 * when it is larger than the current score.
 *
 * @param {Integer} amount number of segments to add to snake when it eats
 * @requires module:snake
 *
 */
export function growSnake(amount) {
  newSegments += amount;
  incrementScore();
  getHiScore();
  increaseSnakeSpeed();
}

/**
 * This function will obtain the current coordinates for the snake. It will be used to in the food
 * module to prevent the food from spawning on the board at the current position of the snake. Will
 * also be used to determine if the head of the snake is on the body to trigger game over.
 *
 * @see snakeIntersection
 * @param {object} position Coordinates used to compare to the current position of the snake body
 * @param {object} IgnoreHead A Boolean. by default the head of the snake is not ignored
 * @returns {boolean} Returns true if position co-ordinates matches position of any segment of the
 * snake (and ignore head for certain cases)
 * @requires module:food
 */
export function onSnake(position, { ignoreHead = false } = {}) {
  // ignoreHead is false by default. This is to prevent snakeBody.some to loop over the head because
  // it will always be on the snake.
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
}

/**
 * This function sets the head of the snake for use in other modules
 *
 * @returns {object} The current coordinates of the head of the snake
 */
export function getSnakeHead() {
  return snakeBody[0];
}

/**
 * This function will define what a the snake intersection is. It will obtain the coordinates for the
 * head of the snake and set the boolean for the ignoreHead variable to true (by default it is false
 * until a collision with body)
 *
 * @returns {object} position of the snake head and
 */
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

/**
 * This function will return a boolean if position 1 and position 2 in the x or y direction
 * are the same or not.
 *
 * @param {object} pos1 A position
 * @param {object} pos2 A position
 * @returns Boolean
 */
function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

/**
 * This function will deal with add body of the snake onto the snake. It is called in the update
 * function.
 *
 * @see update
 */
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    // push new segment onto current body of snake as a new object
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0; // reset the segments to prevent function from infinitely adding segments
}

/**
 * This function will deal with increasing the speed of the snake and update values that are dependent
 * on it. It is also responsible for displaying the level of difficulty of the game on the page.
 */
export function increaseSnakeSpeed() {
  snakeSpeed += 0.25;
  let currentLevel = document.getElementById("level").innerText; // Obtain current level from the DOM

  // Display the increase of difficulty of the game on HTML when the speed of the snake is an integer
  if (Number.isInteger(snakeSpeed)) {
    document.getElementById("level").innerText = ++currentLevel;
  }
}
