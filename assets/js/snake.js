import { getInputDirection } from "./input.js";
// snake global variables
export const snakeSpeed = 1.5;
const snakeBody = [{ x: 21, y: 21 }];

export function update() {
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += getInputDirection.x;
  snakeBody[0].y += getInputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}
