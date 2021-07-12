import { hide, show } from "./game.js";

const settingsMenu = document.getElementById("settings-menu");
const mainMenu = document.getElementById("main-menu");

// Event listers to toggle between menu and settings boxes
// prettier-ignore
window.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (
    e.target.className === "btn-menu settings" ||
    e.target.className === "settings"
  ) {
    toggleSettingsOn();
    return;
  } else if (
    e.target.className === "back-to-menu" || 
    e.target.className === "fas fa-arrow-circle-left") {
    toggleSettingsOff();
    return;
  } else {
    return;
  }
});

/**
 * This function will show the settings and hide the main menu
 */
function toggleSettingsOn() {
  show(settingsMenu);
  hide(mainMenu);
}

/**
 * This function will show the main and hide the settings menu
 */
function toggleSettingsOff() {
  hide(settingsMenu);
  show(mainMenu);
}
