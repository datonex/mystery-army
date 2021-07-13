import { onSnake, growSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition(); // Spawn food at a random position at start of game

const growthRate = 1; // how many segments the snake can grow when it eats food

/**
 * This function will update the position of the food a the start of the game and each time the food
 * disappears from the grid.
 *
 * @requires module:game
 * @alias updateFood
 */
export function update() {
  if (onSnake(food)) {
    // If the position of the head if the snake and the food are equal, grow the snake and remove food
    // from game board
    growSnake(growthRate);
    food = getRandomFoodPosition(); // generate a new food position on the game board
  }
}

/**
 *This function will draw the food onto the game board
 *
 * @param {string} gameBoard - Game board ID (already defined @see module:game)
 * @alias drawFood
 */
export function draw(gameBoard) {
  const foodElement = document.createElement("div");  // Each food item is contained in a div
  foodElement.style.gridRowStart = food.y;            // Draw food in y direction on grid
  foodElement.style.gridColumnStart = food.x;         // Draw food in x direction on grid
  foodElement.classList.add("food");                  // Add food class to new segment
  gameBoard.appendChild(foodElement);                 // Append div onto the game board
}

/**
 * This function will deal with generating the food coordinates. It also makes sure that the food does
 * not generate at the same coordinates as the snake.
 *
 * @requires module:snake
 * @requires module:grid
 * @function onSnake
 */
function getRandomFoodPosition() {
  let newFoodPosition;
  while (!newFoodPosition || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
