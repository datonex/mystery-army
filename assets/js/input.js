let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

/**
 * Add keyboard event listeners.
 */
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    // Use arrow keys in game
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break; // Stop snake from moving down if it's currently moving up
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break; // Stop snake from moving up if it's currently moving down
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break; // Stop snake from moving right if it's currently moving left
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break; // Stop snake from moving left if it's currently moving right
      inputDirection = { x: 1, y: 0 };
      break;
    // use WASD in game
    case "w":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "s":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "a":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "d":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
    default:
      console.log(
        "Incorrect key pressed. Use the Arrow keys or WASD to play the game"
      );
  }
});

/**
 * This function will get the current input direction from the user. Function is called in @see update
 *
 * @requires module:snake
 * @requires module:game
 */
export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
