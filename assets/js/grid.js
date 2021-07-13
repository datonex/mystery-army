const gridSize = 15;

/**
 * This function will generate a random grid point based on the size of the grid
 * @returns {object} The co-ordinates for the new position
 */
export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
}

/**
 * This function will compare define the boundary of the grid in all directions. It will be used to
 * put in the position of the snake and check if its current position is less than or greater than the
 * boundaries of the board.
 *
 * @param {object} position The current position of the snake
 * @returns {boolean} Returns true if position of snake is the same as boundary of game board
 * @requires module:game
 */
export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > gridSize ||
    position.y < 1 ||
    position.y > gridSize
  );
}
