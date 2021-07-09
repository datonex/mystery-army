import "./libraries/swiped-events/dist/swiped-events.min.js";
import { checkDeath, togglePause, show, hide } from "./game.js";

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
const settingsMenu = document.getElementById("settings-menu");
const mainMenu = document.getElementById("main-menu");

// Add keyboard event listeners
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case " ":
      togglePause();
      break;
    // Use arrow keys in game
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break; // Stop snake from moving down if currently moving up
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break; // Stop snake from moving up if currently moving down
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break; // Stop snake from moving right if currently moving left
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break; // Stop snake from moving left if currently moving right
      inputDirection = { x: 1, y: 0 };
      break;
    // use WASD keys in game
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

// Add touch event listeners for touchscreen devices
window.addEventListener("swiped", function (e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.detail);
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

// Use enter button to restart game when user looses
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && checkDeath()) {
    console.log(checkDeath());
    location.reload();
  } else {
    return;
  }
});

//
// prettier-ignore
window.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (
    e.target.className === "btn-menu settings" ||
    e.target.className === "settings"
  ) {
    toggleSettingsOn();
    return;
  } else if (e.target.className === "back-to-menu" ||
  e.target.className === "fas fa-arrow-circle-left") {
    toggleSettingsOff();
    return;
  } else {
    return;
  }
});

function toggleSettingsOn() {
  show(settingsMenu);
  hide(mainMenu);
}

function toggleSettingsOff() {
  hide(settingsMenu);
  show(mainMenu);
}

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
