import { onSnake, growSnake } from "./snake.js";

let food = { x: 10, y: 5 };
const growthRate = 1;

export function update() {
  if (onSnake(food)) {
    growSnake(growthRate);
    food = { x: 22, y: 0 }; // new food position TODO: generate food randomly function
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
