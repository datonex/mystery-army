const mainMenu = document.getElementById("main-menu");
const credits = document.getElementById("credits-menu");

window.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "credits":
    case "btn-menu credits":
      show(credits);
      hide(mainMenu);
      break;
    case "fas fa-arrow-circle-left":
      hide(credits);
      show(mainMenu);
      break;
    case "btn-menu play":
    window.location.assign("https://datonex.github.io/snake-and-the-wizard/game.html")
    default:
      return;
  }
});

function show(element) {
  element.style.display = "block";
}

function hide(element) {
  element.style.display = "none";
}
