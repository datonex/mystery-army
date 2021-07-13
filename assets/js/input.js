import "./libraries/swiped-events/dist/swiped-events.min.js";
import {
  checkDeath,
  togglePause,
  startGame,
  toggleSettings,
  toggleGameStart,
} from "./game.js";

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

// Add keyboard event listeners
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "s":
      toggleSettings();
      break;
    case "p":
      togglePause();
      break;
    case " ":
      startGame();
      break;
    // Use arrow keys in game
    case "ArrowUp":
    case "w":
      if (lastInputDirection.y !== 0) break; // Stop snake from moving down if currently moving up
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
    case "s":
      if (lastInputDirection.y !== 0) break; // Stop snake from moving up if currently moving down
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
    case "a":
      if (lastInputDirection.x !== 0) break; // Stop snake from moving right if currently moving left
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
    case "d":
      if (lastInputDirection.x !== 0) break; // Stop snake from moving left if currently moving right
      inputDirection = { x: 1, y: 0 };
      break;
    default:
      return;
  }
});

// Use enter button to restart game when user looses
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && checkDeath()) {
    location.reload();
  } else {
    return;
  }
});

// Add touch event listeners for touchscreen devices from swiped-events import
window.addEventListener("swiped", function (e) {
  switch (e.detail.dir) {
    case "up":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "down":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "left":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "right":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

window.addEventListener("touchstart", (e) => {
  toggleGameStart();
  switch (e.target.className) {
    case "fas fa-cog":
      toggleSettings();
      break;
    case "fas fa-arrow-circle-left":
      window.location.assign("https://datonex.github.io/snake-and-the-wizard/");
      break;
    case "fas fa-redo-alt":
      window.location.assign(
        "https://datonex.github.io/snake-and-the-wizard/game.html"
      );
      break;
    default:
      return;
  }
});

// https://medium.com/jsdownunder/locking-body-scroll-for-all-devices-22def9615177
// prettier-ignore
document.addEventListener("touchend", (e) => {
  e.preventDefault();
}, false);

window.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "fas fa-cog":
      toggleSettings();
      break;
    case "fas fa-arrow-circle-left":
    case "btn-menu main-menu":
    case "main-menu":
      window.location.assign("http://127.0.0.1:5500/");
      // window.location.assign("https://datonex.github.io/snake-and-the-wizard/")
      break;
    case "fas fa-redo-alt":
    case "btn-menu restart":
    case "restart":
      window.location.assign("http://127.0.0.1:5500/game.html");
      // window.location.assign("https://datonex.github.io/snake-and-the-wizard/game.html")
      break;
    default:
      return;
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
