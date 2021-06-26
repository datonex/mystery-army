// Wait for the Dom to finish loading before running the game
// Obtain button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", () => {
  // Game loop global variables
  let lastRenderTime = 0;
  const snakeSpeed = 1.5;

  //Game loop
  function main(currentTime) {
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // ms to s
    if (secondsSinceLastRender < 1 / snakeSpeed) return;

    lastRenderTime = currentTime;
  }
  window.requestAnimationFrame(main);
});
