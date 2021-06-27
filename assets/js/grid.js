const gridSize = 40;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
}
