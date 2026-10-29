"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#hauptnavigation");
const desktop = window.matchMedia("(min-width: 1024px)");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.hidden = !open;
}

function syncNavigation() {
  // Beim Wechsel der Ansicht darf der Fokus nicht in einem versteckten Element bleiben.
  const wasInNavigation = navigation.contains(document.activeElement);
  const wasOnButton = document.activeElement === menuButton;
  menuButton.hidden = desktop.matches;
  setMenu(desktop.matches);
  if (!desktop.matches && wasInNavigation) menuButton.focus();
  if (desktop.matches && wasOnButton) navigation.querySelector("a").focus();
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#']");
  if (!link || desktop.matches || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const target = document.querySelector(link.getAttribute("href"));
  setMenu(false);
  // Die normale Sprunglink-Navigation bleibt erhalten; der Tastaturfokus folgt ihr.
  if (target) target.focus({ preventScroll: true });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !desktop.matches && !navigation.hidden) {
    setMenu(false);
    menuButton.focus();
  }
});

desktop.addEventListener("change", syncNavigation);
// Ohne JavaScript bleibt die Navigation offen und der Menübutton verborgen.
syncNavigation();
