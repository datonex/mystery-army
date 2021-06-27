// snake global variables
export const snakeSpeed = 1.5;
const snakeBody = [
  { x: 21, y: 21 },
  { x: 22, y: 21 },
  { x: 23, y: 21 },
];

export function update() {
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += 1;
  snakeBody[0].x += 0;
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
